export function applySchedule(now = Date.now()): void {
  document.querySelectorAll<HTMLElement>('[data-show-from]').forEach((el) => {
    const time = Date.parse(el.dataset.showFrom ?? '');
    if (!Number.isNaN(time) && now >= time) el.classList.remove('hidden');
  });

  document.querySelectorAll<HTMLElement>('[data-hide-after]').forEach((el) => {
    const time = Date.parse(el.dataset.hideAfter ?? '');
    if (!Number.isNaN(time) && now > time) el.classList.add('hidden');
  });
}
