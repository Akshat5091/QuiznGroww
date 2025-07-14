document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById('back-button');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const sendButton = document.getElementById('send-button');

    // Back button logic
    if (backButton) {
        backButton.addEventListener('click', () => {
            if (document.referrer && document.referrer.startsWith(window.location.origin)) {
                window.history.back();
            } else {
                window.location.href = '/';
            }
        });
    }

    // Contact form submission logic
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            sendButton.disabled = true;
            sendButton.textContent = 'Sending...';
            formStatus.textContent = '';
            formStatus.style.color = '';

            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                subject: contactForm.subject.value,
                message: contactForm.message.value,
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (response.ok) {
                    formStatus.textContent = result.message;
                    formStatus.style.color = '#2e7d32'; // Green for success
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'An unknown error occurred.');
                }
            } catch (error) {
                formStatus.textContent = error.message;
                formStatus.style.color = '#c62828'; // Red for error
            } finally {
                sendButton.disabled = false;
                sendButton.textContent = 'Send Message';
            }
        });
    }
});
