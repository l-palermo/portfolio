import { fetchContentful } from '../helpers/fetch-contentful';
import { COMPONENT_MAP } from '../components';

export async function Page({ params }: { params: { path?: string } }) {
  const data = await fetchContentful({ content_type: 'appSection', 'fields.id': params.path || '/' });
  const fields = data[0].fields.fields;

  return (
    <>
      {fields?.map(({ fields, sys }, index) => {
        const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
        // fix any type
        return <Component key={`${sys.id}-${index}`} {...(fields as any)} />;
      })}
    </>
  );
}
