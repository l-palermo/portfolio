import { createClient } from 'contentful';
import resolveResponse from 'contentful-resolve-response';

import { ContentfulResponsePayload } from './types';

const client = createClient({
  space: process.env.CMS_SPACE || '',
  accessToken: process.env.CMS_ACCESS_TOKEN || '',
  host: process.env.CMS_HOST || '',
});

export async function fetchContentful(options: {
  content_type: 'appSection';
  [key: string]: string;
}): Promise<ContentfulResponsePayload> {
  const data = await client.withoutUnresolvableLinks.getEntries({ include: 10, ...options }).catch((error) => {
    console.error(error);
    return [];
  });
  return resolveResponse(data);
}
