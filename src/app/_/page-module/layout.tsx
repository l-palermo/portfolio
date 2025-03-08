import { ReactNode } from 'react';

import styles from './layout.module.css';
import { fetchContentful } from '../helpers/fetch-contentful';
import { COMPONENT_MAP } from '../components';
import { Background } from '../components/background';

export default async function Layout({ children }: { children: ReactNode }) {
  const data = await fetchContentful({ content_type: 'appSection', 'fields.id': 'static-content' });
  const fields = data[0].fields.fields;

  return (
    <div className={styles.root}>
      <Background />
      <div className={styles.static}>
        {fields?.map(({ fields, sys }, index) => {
          const Component = COMPONENT_MAP[sys.contentType.sys.id as keyof typeof COMPONENT_MAP];
          // fix any type
          return <Component key={`${sys.id}-${index}`} {...(fields as any)} />;
        })}
      </div>
      <main className={styles['main']}>{children}</main>
    </div>
  );
}
