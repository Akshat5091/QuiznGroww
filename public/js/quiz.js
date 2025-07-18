document.addEventListener("DOMContentLoaded", async () => {
  const quizAppContainer = document.getElementById("quiz-app-container");
  let clerk = null;
  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let timerInterval = null;

  const waitForClerk = async () => {
    while (typeof window.Clerk === "undefined") {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    return window.Clerk;
  };

  const clearTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    let timeLeft = 60;
    const timerElement = document.getElementById('timer');
    if (timerElement) timerElement.textContent = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
      timeLeft--;
      if (timerElement) timerElement.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        handleAnswer(null);
      }
    }, 1000);
  };

  const handleAnswer = async (selectedOption) => {
    clearTimer();
    document.querySelectorAll('.option-button').forEach(button => button.disabled = true);

    const question = currentQuiz[currentQuestionIndex];
    try {
      const token = await clerk.session.getToken();
      const response = await fetch('/api/questions/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ questionId: question._id, userAnswer: selectedOption })
      });
      const result = await response.json();

      if (result.correct) score++;
      
      document.querySelectorAll('.option-button').forEach(button => {
        if (button.textContent === result.correctAnswer) {
          button.style.backgroundColor = 'lightgreen';
        }
        if (button.textContent === selectedOption && !result.correct) {
          button.style.backgroundColor = 'salmon';
        }
      });

      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
          renderQuizView();
        } else {
          renderQuizEndView();
        }
      }, 1500);
    } catch (err) {
      console.error("Error checking answer:", err);
      quizAppContainer.innerHTML = `<p>Error checking answer. Please try again.</p>`;
    }
  };

  const renderQuizView = () => {
    const question = currentQuiz[currentQuestionIndex];
    if (!question) {
      quizAppContainer.innerHTML = "<p>⚠️ No question available.</p>";
      return;
    }
    quizAppContainer.innerHTML = `
      <div class="quiz-container">
        <div>
            <h2>${question.topic === 'random' ? `Random Challenge (${question.difficulty})` : question.topic}</h2>
            <div id="timer" class="timer">Time Left: 60s</div>
        </div>
        <div class="quiz-body">
            <p class="question-text">${question.questionText || "No question text"}</p>
            <div class="options-container">
                ${question.options.map(option => `<button class="option-button">${option}</button>`).join('')}
            </div>
        </div>
        <div class="quiz-footer">
            <p>Question ${currentQuestionIndex + 1} of ${currentQuiz.length}</p>
            <p>Score: ${score}</p>
        </div>
      </div>
    `;
    startTimer();
  };

  const renderQuizEndView = () => {
    clearTimer();
    const incorrectAnswers = currentQuiz.length - score;

    // --- Save Performance to Database ---
    const saveResult = async () => {
        try {
            const token = await clerk.session.getToken();
            const performanceData = {
                topic: currentQuiz[0]?.topic === 'random' ? 'Random Challenge' : currentQuiz[0]?.topic,
                difficulty: currentQuiz[0]?.difficulty,
                score: score,
                totalQuestions: currentQuiz.length,
            };

            await fetch('/api/performance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(performanceData)
            });
        } catch (err) {
            console.error("Failed to save performance:", err);
        }
    };
    
    // Call the function to save the result as soon as the quiz ends
    saveResult();

    // --- Render the final view ---
    quizAppContainer.innerHTML = `
      <div class="quiz-container">
        <h2>Quiz Complete!</h2>
        <div class="quiz-summary">
            <p class="quiz-summary-text">
                Your final score is: 
                <span class="score-box correct">${score}</span> 
                out of 
                <span class="score-box total">${currentQuiz.length}</span>
            </p>
            <p class="quiz-summary-text">
                Incorrect Answers: 
                <span class="score-box incorrect">${incorrectAnswers}</span>
            </p>
        </div>
        <a href="/html/topics.html" class="play-again-button">Play Again</a>
      </div>
    `;
  };

  const startQuiz = async (topic, difficulty) => {
    try {
      const token = await clerk.session.getToken();
      let fetchUrl;
      
      if (topic === 'random') {
        fetchUrl = `/api/questions/random/challenge/${difficulty}`;
      } else {
        fetchUrl = `/api/questions/${topic}/${difficulty}`;
      }

      const response = await fetch(fetchUrl, { headers: { 'Authorization': `Bearer ${token}` } });
      if (!response.ok) throw new Error('Failed to fetch quiz questions.');
      
      currentQuiz = await response.json();
      if (topic === 'random') {
        currentQuiz.forEach(q => q.topic = 'random');
      }
      currentQuestionIndex = 0;
      score = 0;
      renderQuizView();
    } catch (err) {
      quizAppContainer.innerHTML = `<p>Error starting quiz. Please go back and try again.</p>`;
      console.error(err);
    }
  };

  const main = async () => {
    try {
      clerk = await waitForClerk();
      await clerk.load();

      if (!clerk.user) {
        // 👇 Path updated here
        window.location.href = '/html/topics.html';
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const topic = params.get('topic');
      const difficulty = params.get('difficulty');

      if (topic && difficulty) {
        startQuiz(topic, difficulty);
      } else {
        quizAppContainer.innerHTML = '<p>No topic or difficulty selected. Please go back and choose a topic.</p>';
      }
      
      quizAppContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('option-button')) {
          handleAnswer(event.target.textContent);
        }
      });

    } catch (err) {
      console.error("Quiz Page Error:", err);
      quizAppContainer.innerHTML = "<p>There was an error loading the quiz.</p>";
    }
  };

  main();
});