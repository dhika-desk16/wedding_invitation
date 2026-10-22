export function buildRsvpUrl(phone: string, couple: string, data: FormData): string {
  const attending = data.get('hadir') === 'hadir';
  const lines = [
    `Assalamu'alaikum, saya ${data.get('nama')}.`,
    attending
      ? `Insya Allah saya hadir di pernikahan ${couple} (jumlah tamu: ${data.get('jumlah')}).`
      : `Mohon maaf, saya belum bisa hadir di pernikahan ${couple}.`,
  ];

  const wish = String(data.get('ucapan') ?? '').trim();
  if (wish) lines.push('', `Ucapan: ${wish}`);

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
