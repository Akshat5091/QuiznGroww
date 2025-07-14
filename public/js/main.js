document.addEventListener("DOMContentLoaded", async () => {
    const mainNav = document.getElementById('main-nav');
    const userGreetingContainer = document.getElementById('user-greeting-container');
    const ctaButton = document.getElementById('start-quiz-link');
    const performanceModal = document.getElementById('performance-modal');
    const performanceCloseBtn = document.getElementById('performance-close-btn');
    const performanceListDiv = document.getElementById('performance-history-list');
    let clerk = null;

    const waitForClerk = async () => {
        while (typeof window.Clerk === "undefined") {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        return window.Clerk;
    };

    const showPerformanceModal = () => performanceModal.classList.remove('hidden');
    const hidePerformanceModal = () => performanceModal.classList.add('hidden');

    const fetchAndRenderPerformance = async () => {
        performanceListDiv.innerHTML = '<p>Loading history...</p>';
        try {
            const token = await clerk.session.getToken();
            const response = await fetch('/api/performance', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch history');
            
            const history = await response.json();

            if (history.length === 0) {
                performanceListDiv.innerHTML = '<p>No quiz history found. Go play a quiz!</p>';
                return;
            }

            const historyHTML = history.map(item => `
                <div class="performance-item">
                    <div class="performance-topic">${item.topic}</div>
                    <div class="performance-details">
                        <span><strong>Score:</strong> ${item.score} / ${item.totalQuestions}</span>
                        <span><strong>Difficulty:</strong> ${item.difficulty}</span>
                        <span><strong>Date:</strong> ${new Date(item.date).toLocaleString()}</span>
                    </div>
                </div>
            `).join('');
            
            performanceListDiv.innerHTML = historyHTML;

        } catch (err) {
            performanceListDiv.innerHTML = '<p>Could not load history. Please try again later.</p>';
            console.error(err);
        }
    };

    const updateHeader = () => {
        if (!mainNav || !userGreetingContainer) return;

        if (clerk && clerk.user) {
            userGreetingContainer.innerHTML = `
                <div class="greeting-container">
                    <button id="greeting-button" class="greeting-box">Hi, ${clerk.user.firstName}</button>
                    <div id="greeting-dropdown" class="greeting-dropdown hidden">
                        <a href="#" id="view-performance-link">View History</a>
                    </div>
                </div>
            `;
            mainNav.innerHTML = `
                <a href="/contact.html" class="nav-item">Contact</a>
                <a href="/about.html" class="nav-item">About</a>
                <button id="logout-button" class="nav-item">Sign Out</button>
            `;
            document.getElementById('logout-button').addEventListener('click', () => {
                clerk.signOut({ redirectUrl: '/' });
            });

            const greetingButton = document.getElementById('greeting-button');
            const greetingDropdown = document.getElementById('greeting-dropdown');
            const viewPerformanceLink = document.getElementById('view-performance-link');

            greetingButton.addEventListener('click', (e) => {
                e.stopPropagation();
                greetingDropdown.classList.toggle('hidden');
            });

            viewPerformanceLink.addEventListener('click', (e) => {
                e.preventDefault();
                greetingDropdown.classList.add('hidden');
                fetchAndRenderPerformance();
                showPerformanceModal();
            });

        } else {
            mainNav.innerHTML = `
                <a href="/contact.html" class="nav-item">Contact</a>
                <a href="/about.html" class="nav-item">About</a>
                <button id="login-button" class="nav-item">Login</button>
            `;
            document.getElementById('login-button').addEventListener('click', () => {
                clerk.openSignIn({
                    redirectUrl: '/topics.html'
                });
            });
        }
    };

    const main = async () => {
        try {
            clerk = await waitForClerk();
            await clerk.load();

            updateHeader();
            clerk.addListener(updateHeader);

            if (performanceCloseBtn) {
                performanceCloseBtn.addEventListener('click', hidePerformanceModal);
            }
            
            window.addEventListener('click', () => {
                const greetingDropdown = document.getElementById('greeting-dropdown');
                if (greetingDropdown && !greetingDropdown.classList.contains('hidden')) {
                    greetingDropdown.classList.add('hidden');
                }
            });

            const params = new URLSearchParams(window.location.search);
            if (params.get('action') === 'focus_cta') {
                if (ctaButton) {
                    ctaButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    ctaButton.classList.add('highlight-animation-intense');
                    ctaButton.focus();
                }
            }

        } catch (err) {
            console.error("Clerk Error on Homepage:", err);
        }
    };

    main();
});
