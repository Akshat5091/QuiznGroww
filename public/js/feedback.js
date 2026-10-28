/**
 * QuiznGroww Product Feedback Controller (feedback.js)
 */
window.initFeedbackPage = function initFeedbackPage() {
  const form = document.getElementById('feedback-form');
  if (!form) return;

  form.onsubmit = async (e) => {
    e.preventDefault();
    const alertBox = document.getElementById('feedback-alert');
    const rating = form.rating ? form.rating.value : '5';
    const message = form.message ? form.message.value : '';

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (window.QuiznGrowwAuth && window.QuiznGrowwAuth.getUser())?.name || 'Anonymous User',
          email: (window.QuiznGrowwAuth && window.QuiznGrowwAuth.getUser())?.email || 'feedback@quizngroww.com',
          subject: `Product Feedback (${rating} Stars)`,
          message: `Rating: ${rating}/5 Stars\nFeedback: ${message}`,
        }),
      });

      if (window.QuiznGrowwSound) window.QuiznGrowwSound.fanfare();
      if (alertBox) {
        alertBox.textContent = 'Thank you for your valuable feedback! We review all suggestions.';
        alertBox.className = 'auth-alert';
        alertBox.style.background = 'var(--success-bg)';
        alertBox.style.color = 'var(--success)';
        alertBox.style.border = '1px solid var(--success)';
      }
      form.reset();
    } catch (err) {
      if (alertBox) {
        alertBox.textContent = 'Thank you! Your feedback has been noted.';
        alertBox.className = 'auth-alert';
      }
    }
  };
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initFeedbackPage);
} else {
  window.initFeedbackPage();
}
