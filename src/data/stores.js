import { stateNames } from './states';

// Store data — start with empty array; populate later via data pipeline
// Each store object: { n: name, c: city, s: stateCode, a: address, p: phone, w: website, r: rating, v: reviewCount, pr: priceRange, i: id }
export const stores = [];

// ── Slug helpers ──────────────────────────────────────────
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getStateSlug(stateCode) {
  const name = stateNames[stateCode];
  return name ? slugify(name) : slugify(stateCode);
}

export function getCitySlug(city) {
  return slugify(city);
}

export function getStoreSlug(store) {
  return slugify(store.n);
}

// ── Path helpers ─────────────────────────────────────────
export function getStorePath(store) {
  return `/stores/${getStateSlug(store.s)}/${getCitySlug(store.c)}/${getStoreSlug(store)}`;
}

export function getStatePath(stateCode) {
  return `/stores/${getStateSlug(stateCode)}`;
}

export function getCityPath(stateCode, city) {
  return `/stores/${getStateSlug(stateCode)}/${getCitySlug(city)}`;
}

// ── Lookup helpers ───────────────────────────────────────
export function findStateCode(stateSlug) {
  return Object.keys(stateNames).find(code => getStateSlug(code) === stateSlug) || null;
}

export function findStore(stateSlug, citySlug, storeSlug) {
  return stores.find(s =>
    getStateSlug(s.s) === stateSlug &&
    getCitySlug(s.c) === citySlug &&
    getStoreSlug(s) === storeSlug
  ) || null;
}

export function getStoresByState() {
  const map = {};
  stores.forEach(s => {
    if (!map[s.s]) map[s.s] = [];
    map[s.s].push(s);
  });
  return Object.entries(map).sort((a, b) => (stateNames[a[0]] || '').localeCompare(stateNames[b[0]] || ''));
}

export function getStoresByCity(stateCode) {
  const map = {};
  stores.filter(s => s.s === stateCode).forEach(s => {
    if (!map[s.c]) map[s.c] = [];
    map[s.c].push(s);
  });
  return map;
}

// ── SEO Gating helpers ───────────────────────────────────
export function getStoreCountByState(stateCode) {
  return stores.filter(s => s.s === stateCode).length;
}

export function getStoreCountByCity(stateCode, citySlug) {
  return stores.filter(s => s.s === stateCode && getCitySlug(s.c) === citySlug).length;
}

export function isStateIndexable(stateCode) {
  return getStoreCountByState(stateCode) >= 15;
}

export function isCityIndexable(stateCode, citySlug) {
  return getStoreCountByCity(stateCode, citySlug) >= 8;
}

// Re-export stateNames for convenience
export { stateNames };
