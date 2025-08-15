import { fetchContentful } from '../helpers/fetch-contentful';
import { COMPONENT_MAP } from '../components';
import { connection } from 'next/server';

export async function Page({ params }: { params: Promise<{ path?: string }> }) {
  await connection();
  const { path } = await params
  const data = await fetchContentful({ content_type: 'appSection', 'fields.id': path || '/' });
  const fields = data[0].fields.fields;

  return (
    <>
      {fields?.map(({ fields, sys }, index) => {
        const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
        return <Component key={`${sys.id}-${index}`} {...fields} />;
      })}
    </>
  );
}
