document.addEventListener("DOMContentLoaded", () => {
    const subscribeForm = document.getElementById('subscribe-form');
    const subscribeEmailInput = document.getElementById('subscribe-email');
    const notificationPopup = document.getElementById('notification-popup');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            // Prevent the form from actually submitting and reloading the page
            e.preventDefault();

            // Check if the email input has a value
            if (subscribeEmailInput.value.trim() !== '') {
                // Show the popup
                notificationPopup.classList.remove('hidden');
                notificationPopup.classList.add('show');

                // Hide the popup after 4 seconds
                setTimeout(() => {
                    notificationPopup.classList.remove('show');
                    // Add the 'hidden' class back after the fade-out animation completes
                    setTimeout(() => {
                        notificationPopup.classList.add('hidden');
                    }, 500); // This should match the CSS transition duration
                }, 4000);

                // Clear the input field
                subscribeEmailInput.value = '';
            }
        });
    }
});
