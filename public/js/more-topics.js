document.addEventListener("DOMContentLoaded", async () => {
    // --- DOM ELEMENTS ---
    const topicsGridDiv = document.getElementById('more-topics-grid');
    const difficultyModal = document.getElementById('difficulty-modal');
    const difficultyCloseBtn = document.getElementById('difficulty-close-btn');
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
    const showLoginModal = () => loginModal.classList.remove('hidden');
    const hideLoginModal = () => loginModal.classList.add('hidden');

    // --- RENDER FUNCTION ---
    const renderNewTopics = () => {
        // UPDATED: Show the skeleton loader first
        const skeletonHTML = `
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
        `;
        topicsGridDiv.innerHTML = skeletonHTML;

        // Since the topics are local, we can render them immediately after.
        // In a real-world scenario with a fetch call, this would happen in a .then() or after await.
        const newTopics = ["History", "Geography", "Literature", "Art", "Mythology", "Movies"];
        
        const topicsHTML = newTopics.map(topic => `
            <div class="more-topic-item" data-topic="${topic}">
                <span class="more-topic-name">${topic}</span>
                <img src="/images/double_right.png" alt="Start ${topic} quiz" class="start-quiz-icon">
            </div>
        `).join('');

        // A tiny delay can make the transition feel smoother, but is optional.
        setTimeout(() => {
            topicsGridDiv.innerHTML = topicsHTML;
        }, 250); // 250ms delay
    };

    // --- MAIN EXECUTION & EVENT HANDLING ---
    try {
        clerk = await waitForClerk();
        await clerk.load();
        
        renderNewTopics();

        document.body.addEventListener('click', (event) => {
            const target = event.target;
            const topicItem = target.closest('.more-topic-item');

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

    } catch (err) {
        console.error("More Topics Page Error:", err);
        topicsGridDiv.innerHTML = '<p>There was an error loading the page.</p>';
    }
});