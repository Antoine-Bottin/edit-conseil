import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.edit-conseil.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/faq', '/privacy', '/legals'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
