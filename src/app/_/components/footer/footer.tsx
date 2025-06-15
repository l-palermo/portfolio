import React from 'react';

import styles from './footer.module.css';
import { Section, SectionProps } from '../section';
import { FieldContent } from '../../helpers/fetch-contentful/types';

export interface FooterProps {
  title: string;
  section: ({ fields: SectionProps } & FieldContent)[];
}

export function Footer({ title, section }: FooterProps) {
  return (
    <footer className={styles['footer']}>
      <h2 className={styles['footer__header']}>{title}</h2>
      <ul className={styles['footer__contacts']}>
        {section.map((item) => {
          return <Section key={item.sys.id} {...item.fields} />;
        })}
      </ul>
    </footer>
  );
}
