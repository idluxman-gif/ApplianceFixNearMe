import { stores, stateNames, getStateSlug, getCitySlug, getStoreSlug, isStateIndexable, isCityIndexable } from '@/data/stores';
import { blogArticles } from './blog/blogData';

export default function sitemap() {
  const baseUrl = 'https://www.appliancefixnearme.com';

  // Homepage
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Blog listing page
  routes.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  });

  // Blog article pages — ONLY published articles
  for (const article of blogArticles.filter(a => a.published)) {
    routes.push({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Legal / trust pages
  for (const page of ['about', 'contact', 'privacy-policy', 'terms-of-service']) {
    routes.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    });
  }

  // State pages — ONLY indexable (>= 15 shops)
  const states = [...new Set(stores.map(s => s.s))];
  for (const stateCode of states) {
    if (isStateIndexable(stateCode)) {
      routes.push({
        url: `${baseUrl}/stores/${getStateSlug(stateCode)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // City pages — ONLY indexable (>= 8 shops)
  const cityCombos = new Set();
  for (const store of stores) {
    const key = `${store.s}-${store.c}`;
    if (!cityCombos.has(key)) {
      cityCombos.add(key);
      const citySlug = getCitySlug(store.c);
      if (isCityIndexable(store.s, citySlug)) {
        routes.push({
          url: `${baseUrl}/stores/${getStateSlug(store.s)}/${citySlug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        });
      }
    }
  }

  // Individual store pages — always included
  for (const store of stores) {
    routes.push({
      url: `${baseUrl}/stores/${getStateSlug(store.s)}/${getCitySlug(store.c)}/${getStoreSlug(store)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return routes;
}
