/* script.js — accordion interactions */

(function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    let closeTimer;

    const closeItem = () => {
      item.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    item.addEventListener('mouseenter', () => {
      window.clearTimeout(closeTimer);
    });

    item.addEventListener('mouseleave', () => {
      closeTimer = window.setTimeout(closeItem, 900);
    });
  });
})();
