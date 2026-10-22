import { copyText, flashLabel } from './copy';

export function bindShareButtons(): void {
  document.querySelectorAll<HTMLElement>('[data-share]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.shareUrl ?? location.href;
      const data = { title: btn.dataset.shareTitle, text: btn.dataset.shareText, url };

      if (navigator.share) {
        try {
          await navigator.share(data);
        } catch {}
        return;
      }
      const ok = await copyText(url);
      flashLabel(btn, ok ? 'Link tersalin' : 'Gagal menyalin');
    });
  });
}
