import type { MetadataRoute } from 'next';

import { fetchContentful } from '../_/helpers/fetch-contentful';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchContentful({ content_type: 'appSection' });

  return data
    .map((entry) => ({
      url: entry.fields?.id?.replaceAll('-', ' '),
      lastModified: entry.sys.updatedAt,
    }))
    .sort((a, b) => new Date(b.lastModified).valueOf() - new Date(a.lastModified).valueOf());
}
