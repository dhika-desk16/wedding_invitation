export function bindNav(): void {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav] a[href^="#"]'));
  const byId = new Map(links.map((link) => [link.hash.slice(1), link]));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.removeAttribute('data-active'));
        byId.get(entry.target.id)?.setAttribute('data-active', '');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );

  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}
