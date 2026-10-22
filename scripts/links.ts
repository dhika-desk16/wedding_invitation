import { writeFileSync } from 'node:fs';
import { resolvedGuests } from '../src/lib/guests.ts';
import { wedding, coupleName } from '../src/data/wedding.ts';

const cell = (value: string | number) => `"${String(value).replace(/"/g, '""')}"`;

const rows = resolvedGuests.map((guest) => {
  const message = [
    `Assalamu'alaikum ${guest.name},`,
    '',
    `Dengan segala kebahagiaan, kami mengundang Anda ke pernikahan ${coupleName} pada ${wedding.dateLabel}.`,
    '',
    `Undangan Anda: ${guest.url}`,
  ].join('\n');

  const whatsapp = `https://wa.me/${guest.phone ?? ''}?text=${encodeURIComponent(message)}`;
  return [guest.name, guest.seats, guest.status, guest.url, whatsapp].map(cell).join(',');
});

const header = ['Nama', 'Jumlah', 'Status', 'Link undangan', 'Kirim WhatsApp'].map(cell).join(',');
writeFileSync('guest-links.csv', [header, ...rows].join('\n') + '\n');

for (const guest of resolvedGuests) console.log(`${guest.name.padEnd(28)} ${guest.url}`);
console.log(`\n${resolvedGuests.length} link tersimpan di guest-links.csv`);
