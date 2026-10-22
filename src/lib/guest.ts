export function applyGuestName(param = 'to'): void {
  const name = new URLSearchParams(location.search).get(param)?.trim();
  if (!name) return;

  document.querySelectorAll('[data-guest]').forEach((el) => {
    el.textContent = name;
  });
  document.querySelectorAll<HTMLInputElement>('[data-guest-input]').forEach((input) => {
    input.value = name;
  });
}
