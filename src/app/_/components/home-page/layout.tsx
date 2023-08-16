import { ReactNode } from 'react';

import styles from './layout.module.css';
import pageCopy from './lib/content';

export default function Layout({ children }: { children: ReactNode }) {
  const { headerGroup, contacts, footerAriaLabel } = pageCopy;
  return (
    <div className={styles.root}>
      <hgroup className={styles['header-group']}>
        <h1 className={styles['header']}>{headerGroup.header}</h1>
        <div className={styles['separator--header']} data-testid="header-separator" />
        <h2 className={styles['subheader']}>{headerGroup.subHeader}</h2>
        <p className={styles['description']}>{headerGroup.description}</p>
      </hgroup>
      <main className={styles['main']}>{children}</main>
      <footer className={styles['footer']} aria-label={footerAriaLabel}>
        <ul className={styles['footer__contacts']} aria-label={contacts.ariaLabel}>
          {contacts.items.map(({ Icon, href, ariaLabel }) => (
            <li key={href} className={styles['footer__contacts__item']}>
              <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
                <Icon className={styles['footer__contacts__item__icon']} aria-hidden data-testid={ariaLabel} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
