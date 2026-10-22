import { createHash } from 'node:crypto';
import { guests, type Guest } from '../data/guests.ts';
import { wedding } from '../data/wedding.ts';
import type { RsvpStatus } from './rsvp.ts';

export interface ResolvedGuest {
  name: string;
  slug: string;
  url: string;
  seats: number;
  status: RsvpStatus;
  label?: string;
  phone?: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function guestSlug(name: string): string {
  const code = createHash('sha256').update(`${wedding.slugSalt}:${name}`).digest('hex').slice(0, 5);
  return `${slugify(name)}-${code}`;
}

export const guestUrl = (slug: string) => `${wedding.siteUrl}/u/${slug}`;

export const resolvedGuests: ResolvedGuest[] = guests.map((guest: Guest) => {
  const slug = guestSlug(guest.name);
  return {
    name: guest.name,
    slug,
    url: guestUrl(slug),
    seats: guest.seats ?? 1,
    status: guest.status ?? 'belum',
    label: guest.label,
    phone: guest.phone,
  };
});
