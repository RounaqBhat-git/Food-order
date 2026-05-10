// Adds data attributes for partnership modal triggers at runtime.
// This avoids fragile HTML string replacements via tooling.
(function () {
  function apply() {
    const cards = document.querySelectorAll('.partnership-card');
    if (!cards || !cards.length) return;

    const variants = ['courier', 'restaurant', 'brand'];
    cards.forEach((card, idx) => {
      const btn = card.querySelector('a.btn.btn-primary.has-after');
      if (!btn) return;
      if (!btn.hasAttribute('data-partnership-learn-more')) {
        btn.setAttribute('data-partnership-learn-more', '');
      }
      if (variants[idx]) {
        btn.setAttribute('data-partnership-variant', variants[idx]);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();

