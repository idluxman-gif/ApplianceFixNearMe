import Link from 'next/link';
import { stores, stateNames, findStateCode, getStoresByCity, getCitySlug, getStateSlug, getStorePath, getCityPath, isStateIndexable } from '@/data/stores';
import { notFound } from 'next/navigation';
import PageNav from '@/components/PageNav';

export function generateStaticParams() {
  const states = [...new Set(stores.map(s => s.s))];
  return states.map(s => ({ state: getStateSlug(s) }));
}

export function generateMetadata({ params }) {
  const stateCode = findStateCode(params.state);
  if (!stateCode) return {};
  const stateName = stateNames[stateCode];
  const stateStores = stores.filter(s => s.s === stateCode);
  const indexable = isStateIndexable(stateCode);
  return {
    title: `Appliance Repair Shops in ${stateName} (${stateStores.length} Shops) | ApplianceFixNearMe.com`,
    description: `Find ${stateStores.length} verified appliance repair shops in ${stateName}. Compare ratings, read reviews, and get your appliances fixed by trusted local technicians.`,
    openGraph: {
      title: `Appliance Repair Shops in ${stateName}`,
      description: `Browse ${stateStores.length} appliance repair shops in ${stateName}.`,
    },
    robots: indexable ? 'index,follow' : 'noindex,follow',
  };
}

export default function StatePage({ params }) {
  const stateCode = findStateCode(params.state);
  if (!stateCode) notFound();
  const stateName = stateNames[stateCode];
  const byCity = getStoresByCity(stateCode);
  const cities = Object.keys(byCity).sort();
  const totalStores = stores.filter(s => s.s === stateCode).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Appliance Repair Shops in ${stateName}`,
    "numberOfItems": totalStores,
    "itemListElement": stores.filter(s => s.s === stateCode).map((store, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.appliancefixnearme.com${getStorePath(store)}`,
      "name": store.n,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.appliancefixnearme.com" },
      { "@type": "ListItem", "position": 2, "name": stateName },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: '#F9FAFB', minHeight: '100vh' }}>
        <PageNav />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 24px' }}>
          <div style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            <Link href="/" style={{ color: '#EA580C', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#333' }}>{stateName}</span>
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', margin: '16px 0 8px' }}>
            Appliance Repair Shops in {stateName}
          </h1>
          <p style={{ color: '#666', fontSize: 16, margin: '0 0 32px' }}>
            {totalStores} verified shops across {cities.length} cities.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Cities in {stateName}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 40 }}>
            {cities.map(city => (
              <Link key={city} href={getCityPath(stateCode, city)}
                style={{ background: '#fff', padding: '12px 16px', borderRadius: 8, textDecoration: 'none', color: '#0F172A', border: '1px solid #e5e7eb', fontWeight: 500, fontSize: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{city}</span>
                <span style={{ background: '#FFF7ED', color: '#EA580C', padding: '2px 8px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>{byCity[city].length}</span>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>All Shops in {stateName}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 40 }}>
            {stores.filter(s => s.s === stateCode).sort((a, b) => b.v - a.v).map(store => (
              <Link key={store.i} href={getStorePath(store)}
                style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb', transition: 'box-shadow 0.2s' }}>
                <div style={{ background: 'linear-gradient(135deg,#0F172A,#1E293B)', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <span style={{ fontSize: 32, opacity: 0.15 }}>🔧</span>
                  <span style={{ position: 'absolute', top: 8, right: 8, background: store.pr === '$' ? '#16a34a' : '#EA580C', color: '#fff', padding: '2px 8px', borderRadius: 12, fontSize: 11, fontWeight: 600 }}>
                    {store.pr === '$' ? '$ Budget' : store.pr === '$$$' ? '$$$ Premium' : '$$ Mid-Range'}
                  </span>
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 4px', color: '#0F172A' }}>{store.n}</h3>
                  <p style={{ fontSize: 13, color: '#666', margin: '0 0 6px' }}>📍 {store.c}, {store.s}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, marginBottom: 6 }}>
                    <span style={{ color: '#F59E0B' }}>{'★'.repeat(Math.round(store.r))}</span>
                    <span style={{ color: '#666' }}>{store.r} ({store.v.toLocaleString()})</span>
                  </div>
                  {store.p && <p style={{ fontSize: 13, color: '#EA580C', margin: 0 }}>📞 {store.p}</p>}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '24px 0 48px' }}>
            <Link href="/" style={{ color: '#EA580C', textDecoration: 'none', fontWeight: 600 }}>
              &larr; Back to All Shops
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
