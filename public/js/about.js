/**
 * QuiznGroww About Page Script
 */
window.initAboutPage = function initAboutPage() {
  const backBtn = document.getElementById('back-button');
  if (backBtn) {
    backBtn.onclick = (e) => {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      } else if (window.QuiznGrowwNav) {
        window.QuiznGrowwNav.navigate('/');
      } else {
        window.location.href = '/';
      }
    };
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initAboutPage);
} else {
  window.initAboutPage();
}
