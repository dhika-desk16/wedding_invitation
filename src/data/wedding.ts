export interface WeddingEvent {
  id: string;
  title: string;
  time: string;
  venue: string;
  address: string;
  mapQuery: string;
  start: string;
  end: string;
}

export interface Gift {
  bank: string;
  number: string;
  holder: string;
}

export interface StoryItem {
  date: string;
  title: string;
  text: string;
}

export interface InfoItem {
  title: string;
  text: string;
}

export interface DressColor {
  name: string;
  hex: string;
}

const events: WeddingEvent[] = [
  {
    id: 'akad',
    title: 'Akad nikah',
    time: '08.00 – 10.00 WIB',
    venue: 'Masjid Al-Falah',
    address: 'Jl. Raya Mojosari No. 12, Mojokerto',
    mapQuery: 'Masjid Al-Falah, Mojokerto',
    start: '2026-12-19T08:00:00+07:00',
    end: '2026-12-19T10:00:00+07:00',
  },
  {
    id: 'resepsi',
    title: 'Resepsi',
    time: '11.00 – 14.00 WIB',
    venue: 'Gedung Graha Bahagia',
    address: 'Jl. Raden Wijaya No. 45, Mojokerto',
    mapQuery: 'Gedung Graha Bahagia, Mojokerto',
    start: '2026-12-19T11:00:00+07:00',
    end: '2026-12-19T14:00:00+07:00',
  },
];

const story: StoryItem[] = [
  { date: '2019', title: 'Pertama bertemu', text: 'Kami bertemu di sebuah acara kampus dan memulai obrolan yang tak pernah selesai.' },
  { date: '2022', title: 'Memantapkan hati', text: 'Setelah bertahun-tahun saling mengenal, kami memutuskan untuk berjalan bersama.' },
  { date: '2026', title: 'Menuju pelaminan', text: 'Dengan restu kedua keluarga, kami melangkah ke jenjang pernikahan.' },
];

const info: InfoItem[] = [
  { title: 'Kedatangan', text: 'Mohon hadir 15 menit sebelum acara dimulai.' },
  { title: 'Parkir', text: 'Area parkir tersedia di depan gedung dan halaman masjid.' },
  { title: 'Dokumentasi', text: 'Silakan abadikan momen, namun mohon tidak mengganggu prosesi.' },
];

const dressColors: DressColor[] = [
  { name: 'Krem', hex: '#f5edda' },
  { name: 'Emas', hex: '#c9a961' },
  { name: 'Cokelat', hex: '#6b5b43' },
];

const gifts: Gift[] = [
  { bank: 'BCA', number: '1234567890', holder: 'Adriana Lima' },
  { bank: 'DANA', number: '081234567890', holder: 'Dhika Slamet Dunyo Akhirat' },
];

export const wedding = {
  bride: 'Adriana',
  groom: 'Dhika',
  brideParents: 'Putri dari Bapak Ahmad Fauzi & Ibu Siti Rahmah',
  groomParents: 'Putra dari Bapak Wijaya Kusuma & Ibu Lestari Dewi',
  dateLabel: 'Sabtu, 19 Desember 2026',

  siteUrl: 'https://wedinvite.dhikaryast.site',
  slugSalt: 'adriana-dhika-2026',

  target: events[0].start,
  rsvpDeadline: '2026-12-12T23:59:59+07:00',
  rsvpDeadlineLabel: '12 Desember 2026',
  whatsapp: '6281234567890',
  musicSrc: '/music.mp3',

  mapEventId: 'resepsi',
  events,
  story,
  info,
  dressCode: {
    theme: 'Earth tone',
    note: 'Kami menantikan Anda dalam balutan warna-warna hangat berikut.',
    colors: dressColors,
  },
  gifts,
  giftAddress: 'Jl. Raden Wijaya No. 45, Mojokerto (a.n. Adriana Lima & Dhika Slamet Dunyo Akhirat)',
};

export const coupleName = `${wedding.bride} & ${wedding.groom}`;
