export type GuestStatus = 'hadir' | 'tidak' | 'belum';

export interface Guest {
  name: string;
  seats?: number;
  label?: string;
  phone?: string;
  status?: GuestStatus;
}

export const guests: Guest[] = [
  { name: 'Bapak Budi Santoso', seats: 2, label: 'Bersama istri', phone: '6281111111111', status: 'hadir' },
  { name: 'Ibu Siti Rahayu', seats: 1, phone: '6282222222222' },
  { name: 'Keluarga Besar Hartono', seats: 4, label: 'Bersama keluarga', status: 'belum' },
  { name: 'Dika Pratama', seats: 2, phone: '6283333333333', status: 'tidak' },
];
