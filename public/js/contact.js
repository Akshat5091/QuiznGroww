/**
 * QuiznGroww Contact Form Controller (contact.js)
 */
window.initContactPage = function initContactPage() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');
  const sendBtn = document.getElementById('send-btn');

  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value;
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        if (alertBox) {
          alertBox.textContent = 'Please fill out all fields.';
          alertBox.className = 'auth-alert error';
        }
        return;
      }

      try {
        if (sendBtn) {
          sendBtn.disabled = true;
          sendBtn.textContent = 'Sending Message...';
        }

        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message }),
        });

        const data = await res.json();

        if (res.ok) {
          if (window.QuiznGrowwSound) window.QuiznGrowwSound.fanfare();
          if (alertBox) {
            alertBox.textContent = data.message || 'Thank you! Your message has been received.';
            alertBox.className = 'auth-alert';
            alertBox.style.background = 'var(--success-bg)';
            alertBox.style.color = 'var(--success)';
            alertBox.style.border = '1px solid var(--success)';
          }
          form.reset();
        } else {
          throw new Error(data.message || 'Failed to send message.');
        }
      } catch (err) {
        if (window.QuiznGrowwSound) window.QuiznGrowwSound.wrong();
        if (alertBox) {
          alertBox.textContent = err.message || 'Failed to submit inquiry.';
          alertBox.className = 'auth-alert error';
        }
      } finally {
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.innerHTML = `
            <span>Send Message</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          `;
        }
      }
    };
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initContactPage);
} else {
  window.initContactPage();
}
