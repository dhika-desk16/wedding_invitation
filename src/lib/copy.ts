export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

export function flashLabel(el: HTMLElement, text: string, ms = 1600): void {
  const original = el.dataset.label ?? el.textContent ?? '';
  el.dataset.label = original;
  el.textContent = text;
  window.setTimeout(() => {
    el.textContent = original;
  }, ms);
}

export function bindCopyButtons(): void {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const ok = await copyText(btn.dataset.copy ?? '');
      flashLabel(btn, ok ? 'Tersalin' : 'Gagal menyalin');
    });
  });
}
