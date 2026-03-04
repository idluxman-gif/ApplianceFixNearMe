import { stateNames } from './states';

// TEST DATA — SEO gating verification
// TX: 16 shops total (state >= 15 → INDEX)
//   Houston TX: 8 shops (city >= 8 → INDEX)
//   Austin TX: 7 shops (city < 8 → NOINDEX)
//   Dallas TX: 1 shop
// VT: 5 shops total (state < 15 → NOINDEX)
export const stores = [
  // ── Houston, TX — 8 shops (city = INDEX) ──
  {n:'Houston Appliance Repair Co',c:'Houston',s:'TX',a:'100 Main St, Houston, TX 77001',p:'+1 713-555-0101',w:'https://example.com',r:4.8,v:500,pr:'$$',i:1},
  {n:'Bayou City Appliance Fix',c:'Houston',s:'TX',a:'200 Travis St, Houston, TX 77002',p:'+1 713-555-0102',w:'https://example.com',r:4.6,v:400,pr:'$$',i:2},
  {n:'Space City Repair Services',c:'Houston',s:'TX',a:'300 Fannin St, Houston, TX 77003',p:'+1 713-555-0103',w:'https://example.com',r:4.9,v:350,pr:'$',i:3},
  {n:'HTX Appliance Pros',c:'Houston',s:'TX',a:'400 Smith St, Houston, TX 77004',p:'+1 713-555-0104',w:'https://example.com',r:4.5,v:300,pr:'$$',i:4},
  {n:'Gulf Coast Appliance Repair',c:'Houston',s:'TX',a:'500 Louisiana St, Houston, TX 77005',p:'+1 713-555-0105',w:'https://example.com',r:4.7,v:280,pr:'$',i:5},
  {n:'Magnolia Appliance Service',c:'Houston',s:'TX',a:'600 Walker St, Houston, TX 77006',p:'+1 713-555-0106',w:'https://example.com',r:4.4,v:260,pr:'$$',i:6},
  {n:'Houston Quick Fix Appliance',c:'Houston',s:'TX',a:'700 Milam St, Houston, TX 77007',p:'+1 713-555-0107',w:'https://example.com',r:4.3,v:240,pr:'$',i:7},
  {n:'Lone Star Appliance Repair',c:'Houston',s:'TX',a:'800 Capitol St, Houston, TX 77008',p:'+1 713-555-0108',w:'https://example.com',r:4.6,v:220,pr:'$$',i:8},
  // ── Austin, TX — 7 shops (city = NOINDEX) ──
  {n:'Austin Appliance Fixers',c:'Austin',s:'TX',a:'100 Congress Ave, Austin, TX 78701',p:'+1 512-555-0201',w:'https://example.com',r:4.7,v:450,pr:'$$',i:9},
  {n:'Keep Austin Fixed',c:'Austin',s:'TX',a:'200 6th St, Austin, TX 78702',p:'+1 512-555-0202',w:'https://example.com',r:4.5,v:380,pr:'$',i:10},
  {n:'Capitol City Appliance',c:'Austin',s:'TX',a:'300 Lamar Blvd, Austin, TX 78703',p:'+1 512-555-0203',w:'https://example.com',r:4.8,v:320,pr:'$$',i:11},
  {n:'ATX Repair Pros',c:'Austin',s:'TX',a:'400 Guadalupe St, Austin, TX 78704',p:'+1 512-555-0204',w:'https://example.com',r:4.4,v:290,pr:'$',i:12},
  {n:'South Austin Appliance Co',c:'Austin',s:'TX',a:'500 S 1st St, Austin, TX 78705',p:'+1 512-555-0205',w:'https://example.com',r:4.6,v:270,pr:'$$',i:13},
  {n:'Barton Creek Appliance Fix',c:'Austin',s:'TX',a:'600 Barton Springs Rd, Austin, TX 78706',p:'+1 512-555-0206',w:'https://example.com',r:4.3,v:250,pr:'$',i:14},
  {n:'Live Music Appliance Repair',c:'Austin',s:'TX',a:'700 Red River St, Austin, TX 78707',p:'+1 512-555-0207',w:'https://example.com',r:4.5,v:230,pr:'$$',i:15},
  // ── Dallas, TX — 1 shop (makes TX total = 16) ──
  {n:'Big D Appliance Repair',c:'Dallas',s:'TX',a:'100 Elm St, Dallas, TX 75201',p:'+1 214-555-0301',w:'https://example.com',r:4.7,v:400,pr:'$$',i:16},
  // ── Vermont — 5 shops (state = NOINDEX) ──
  {n:'Green Mountain Appliance Fix',c:'Burlington',s:'VT',a:'100 Church St, Burlington, VT 05401',p:'+1 802-555-0401',w:'https://example.com',r:4.8,v:300,pr:'$$',i:17},
  {n:'Burlington Appliance Repair',c:'Burlington',s:'VT',a:'200 Main St, Burlington, VT 05402',p:'+1 802-555-0402',w:'https://example.com',r:4.5,v:250,pr:'$',i:18},
  {n:'Maple Leaf Appliance Service',c:'Montpelier',s:'VT',a:'100 State St, Montpelier, VT 05602',p:'+1 802-555-0403',w:'https://example.com',r:4.6,v:200,pr:'$$',i:19},
  {n:'Vermont Valley Repair',c:'Rutland',s:'VT',a:'100 Center St, Rutland, VT 05701',p:'+1 802-555-0404',w:'https://example.com',r:4.4,v:180,pr:'$',i:20},
  {n:'Stowe Appliance Pros',c:'Stowe',s:'VT',a:'100 Mountain Rd, Stowe, VT 05672',p:'+1 802-555-0405',w:'https://example.com',r:4.7,v:160,pr:'$$',i:21},
];

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
