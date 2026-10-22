export const mapsEmbedUrl = (query: string): string =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapsOpenUrl = (query: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
