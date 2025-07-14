document.addEventListener("DOMContentLoaded", async () => {
    // --- DOM ELEMENTS ---
    const topicsGridDiv = document.getElementById('more-topics-grid');
    const difficultyModal = document.getElementById('difficulty-modal');
    const difficultyCloseBtn = document.getElementById('difficulty-close-btn');
    // ADDED: Get the new login modal elements
    const loginModal = document.getElementById('login-modal');
    const modalLoginBtn = document.getElementById('modal-login-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalLearnMoreBtn = document.getElementById('modal-learn-more-btn');

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

    const showDifficultyModal = () => difficultyModal.classList.remove('hidden');
    const hideDifficultyModal = () => difficultyModal.classList.add('hidden');
    // ADDED: Functions to show and hide the login modal
    const showLoginModal = () => loginModal.classList.remove('hidden');
    const hideLoginModal = () => loginModal.classList.add('hidden');

    // --- RENDER FUNCTION ---
    const renderNewTopics = () => {
        const newTopics = ["History", "Geography", "Literature", "Art", "Mythology", "Movies"];
        
        const topicsHTML = newTopics.map(topic => `
            <div class="more-topic-item" data-topic="${topic}">
                <span class="more-topic-name">${topic}</span>
                <img src="/images/double_right.png" alt="Start ${topic} quiz" class="start-quiz-icon">
            </div>
        `).join('');

        topicsGridDiv.innerHTML = topicsHTML;
    };

    // --- MAIN EXECUTION & EVENT HANDLING ---
    try {
        clerk = await waitForClerk();
        await clerk.load();
        
        renderNewTopics();

        // Main event listener for the whole page body
        document.body.addEventListener('click', (event) => {
            const target = event.target;
            const topicItem = target.closest('.more-topic-item');

            // If a topic item is clicked
            if (topicItem) {
                selectedTopic = topicItem.dataset.topic;
                // UPDATED: Check if user is logged in
                if (clerk.user) {
                    // If logged in, show difficulty modal
                    showDifficultyModal();
                } else {
                    // If not logged in, show the login modal instead of direct sign-in
                    showLoginModal();
                }
            }

            // If a difficulty button is clicked
            if (target.classList.contains('difficulty-btn')) {
                const difficulty = target.dataset.difficulty;
                window.location.href = `/quiz.html?topic=${selectedTopic}&difficulty=${difficulty}`;
            }
            
            // ADDED: Listeners for the new login modal buttons
            if (target.id === 'modal-login-btn') clerk.openSignIn();
            if (target.id === 'modal-close-btn') hideLoginModal();
            if (target.id === 'modal-learn-more-btn') window.location.href = '/feedback.html';

            // Difficulty modal close button
            if (target.id === 'difficulty-close-btn') {
                hideDifficultyModal();
            }
        });

    } catch (err) {
        console.error("More Topics Page Error:", err);
        topicsGridDiv.innerHTML = '<p>There was an error loading the page.</p>';
    }
});
