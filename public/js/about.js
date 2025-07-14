document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', () => {
            // Check if the previous page was on the same site
            if (document.referrer && document.referrer.startsWith(window.location.origin)) {
                // If so, go back to the previous page in history
                window.history.back();
            } else {
                // Otherwise, go to the homepage as a fallback
                window.location.href = '/';
            }
        });
    }
});
