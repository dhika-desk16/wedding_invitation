export type RsvpStatus = 'hadir' | 'tidak' | 'belum';

export const statusLabel: Record<RsvpStatus, string> = {
  hadir: 'Hadir',
  tidak: 'Tidak hadir',
  belum: 'Belum konfirmasi',
};

export function statusNote(status: RsvpStatus, fromDevice: boolean, deadlineLabel: string): string {
  if (fromDevice) return 'Konfirmasi Anda sudah dikirim lewat WhatsApp dari perangkat ini.';
  if (status === 'hadir') return 'Kehadiran Anda sudah kami catat. Sampai jumpa di hari bahagia kami.';
  if (status === 'tidak') return 'Terima kasih sudah memberi kabar. Doa Anda sangat berarti bagi kami.';
  return `Mohon konfirmasi kehadiran Anda sebelum ${deadlineLabel}.`;
}

interface LocalRsvp {
  status: RsvpStatus;
  jumlah: string;
}

const storageKey = (slug: string) => `rsvp:${slug}`;

export function loadLocalRsvp(slug: string): LocalRsvp | null {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    return raw ? (JSON.parse(raw) as LocalRsvp) : null;
  } catch {
    return null;
  }
}

export function saveLocalRsvp(slug: string, value: LocalRsvp): void {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(value));
  } catch {}
}
