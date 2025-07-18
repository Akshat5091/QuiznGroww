document.addEventListener("DOMContentLoaded", async () => {
    // --- DOM ELEMENTS ---
    const topicsListDiv = document.getElementById('topics-list');
    const loginModal = document.getElementById('login-modal');
    const difficultyModal = document.getElementById('difficulty-modal');
    const modalLoginBtn = document.getElementById('modal-login-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalLearnMoreBtn = document.getElementById('modal-learn-more-btn');
    const difficultyCloseBtn = document.getElementById('difficulty-close-btn');
    const discoverButton = document.querySelector('.discover-button');

    // --- GLOBAL STATE ---
    let clerk = null;
    let selectedTopic = null;

    // --- HELPER FUNCTIONS ---
    const waitForClerk = async () => {
        while (typeof window.Clerk === "undefined") {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        return window.Clerk;
    };

    const showLoginModal = () => loginModal.classList.remove('hidden');
    const hideLoginModal = () => loginModal.classList.add('hidden');
    const showDifficultyModal = () => difficultyModal.classList.remove('hidden');
    const hideDifficultyModal = () => difficultyModal.classList.add('hidden');

    // --- DATA FETCHING ---
    const fetchAndRenderTopics = async () => {
        // UPDATED: Show the skeleton loader before fetching data
        const skeletonHTML = `
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
        `;
        topicsListDiv.innerHTML = skeletonHTML;

        try {
            const response = await fetch('/api/questions/topics');
            if (!response.ok) throw new Error('Failed to fetch topics');
            const topics = await response.json();
            
            const mainTopics = topics.filter(t => !["History", "Geography", "Literature", "Art", "Mythology", "Movies"].includes(t));

            const topicsHTML = mainTopics.map(topic => `
                <div class="topic-item" data-topic="${topic}">
                    <img src="/images/${topic}.png" alt="${topic}" class="topic-icon" onerror="this.style.display='none'">
                    <span class="topic-name">${topic}</span>
                    <img src="/images/double_right.png" alt="Start quiz" class="start-quiz-icon">
                </div>
            `).join('');

            const randomChallengeHTML = `
                <div class="topic-item random-challenge" data-topic="random">
                    <img src="/images/mixed.png" alt="Random Challenge" class="topic-icon">
                    <span class="topic-name">Random Challenge</span>
                    <img src="/images/double_right.png" alt="Start quiz" class="start-quiz-icon">
                </div>
            `;

            topicsListDiv.innerHTML = topicsHTML + randomChallengeHTML;

        } catch (err) {
            topicsListDiv.innerHTML = '<p>Could not load topics. Please try again later.</p>';
            console.error(err);
        }
    };

    // --- MAIN EXECUTION & EVENT HANDLING ---
    try {
        clerk = await waitForClerk();
        await clerk.load();
        
        fetchAndRenderTopics();

        document.body.addEventListener('click', (event) => {
            const target = event.target;
            const topicItem = target.closest('.topic-item');

            if (topicItem) {
                selectedTopic = topicItem.dataset.topic;
                if (clerk.user) {
                    showDifficultyModal();
                } else {
                    showLoginModal();
                }
            }

            if (target.classList.contains('difficulty-btn')) {
                const difficulty = target.dataset.difficulty;
                // 👇 Path updated here
                window.location.href = `/html/quiz.html?topic=${selectedTopic}&difficulty=${difficulty}`;
            }
            
            if (target.id === 'modal-login-btn') clerk.openSignIn();
            if (target.id === 'modal-close-btn') hideLoginModal();
            // 👇 Path updated here
            if (target.id === 'modal-learn-more-btn') window.location.href = '/html/feedback.html';
            if (target.id === 'difficulty-close-btn') hideDifficultyModal();
        });

        if (discoverButton) {
            discoverButton.addEventListener('click', () => {
                // 👇 Path updated here
                window.location.href = '/html/more-topics.html';
            });
        }

    } catch (err) {
        console.error("Clerk or Topics Error:", err);
        topicsListDiv.innerHTML = '<p>There was an error loading the page.</p>';
    }
});