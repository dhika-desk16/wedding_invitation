export function bindParallax(): void {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const items = document.querySelectorAll<HTMLElement>('[data-parallax]');
  let queued = false;

  const update = () => {
    items.forEach((el) => {
      const box = el.parentElement?.getBoundingClientRect();
      if (!box) return;
      const progress = Math.min(Math.max(-box.top / box.height, 0), 1);
      el.style.setProperty('--p', progress.toFixed(3));
    });
    queued = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}
