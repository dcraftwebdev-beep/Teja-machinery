// Shared helper so the card link and the detail route resolve to the same slug.
export const toSlug = (str) =>
  String(str)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
