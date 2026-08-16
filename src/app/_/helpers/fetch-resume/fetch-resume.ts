import { createClient } from 'contentful';
import resolveResponse from 'contentful-resolve-response';

const client = createClient({
  space: process.env.CMS_SPACE || '',
  accessToken: process.env.CMS_ACCESS_TOKEN || '',
  host: process.env.CMS_HOST || '',
});

export async function fetchResume() {
  const response = await client.withoutUnresolvableLinks
    .getEntries({ content_type: 'resumeData', 'fields.id': 'resume', include: 5 })
    .catch((error: Error) => {
      console.error(error);
      throw error;
    });

  return resolveResponse(response);
}
