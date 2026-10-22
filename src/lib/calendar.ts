export interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  location: string;
  description: string;
}

const stamp = (iso: string) =>
  new Date(iso)
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '');

const escapeIcs = (text: string) =>
  text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');

export function googleCalendarUrl(e: CalendarEvent): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.title,
    dates: `${stamp(e.start)}/${stamp(e.end)}`,
    details: e.description,
    location: e.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildIcs(e: CalendarEvent): string {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Undangan Pernikahan//ID',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${stamp(e.start)}-${Math.random().toString(36).slice(2)}@undangan`,
    `DTSTAMP:${stamp(new Date().toISOString())}`,
    `DTSTART:${stamp(e.start)}`,
    `DTEND:${stamp(e.end)}`,
    `SUMMARY:${escapeIcs(e.title)}`,
    `LOCATION:${escapeIcs(e.location)}`,
    `DESCRIPTION:${escapeIcs(e.description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

export function downloadIcs(e: CalendarEvent): void {
  const blob = new Blob([buildIcs(e)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${e.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
