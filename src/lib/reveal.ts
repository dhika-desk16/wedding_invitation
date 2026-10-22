const hidden = ['opacity-0', 'translate-y-8'];

export function bindReveal(): void {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove(...hidden);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.classList.add(...hidden);
    observer.observe(el);
  });
}
