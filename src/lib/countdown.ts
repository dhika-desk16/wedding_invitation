const pad = (n: number) => String(n).padStart(2, '0');

export function startCountdown(root: HTMLElement): void {
  const target = new Date(root.dataset.target ?? '').getTime();
  if (Number.isNaN(target)) return;

  const unit = (key: string) => root.querySelector<HTMLElement>(`[data-unit="${key}"]`);
  const days = unit('d');
  const hours = unit('h');
  const minutes = unit('m');
  const seconds = unit('s');

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      root.innerHTML =
        '<p class="col-span-4 font-[family-name:Cormorant_Garamond,serif] text-3xl italic text-[#e2c57e]">Hari bahagia telah tiba</p>';
      window.clearInterval(timer);
      return;
    }
    if (days) days.textContent = String(Math.floor(diff / 864e5));
    if (hours) hours.textContent = pad(Math.floor(diff / 36e5) % 24);
    if (minutes) minutes.textContent = pad(Math.floor(diff / 6e4) % 60);
    if (seconds) seconds.textContent = pad(Math.floor(diff / 1e3) % 60);
  };

  const timer = window.setInterval(tick, 1000);
  tick();
}
