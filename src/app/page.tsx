'use client';

import styles from './page.module.css';
import ForwardSlashIcon from '../assets/svgs/forward-slash.svg';
import config from '../lib/config';

import Link from 'next/link';

export default function Home() {
  const { contacts, headerGroup } = config;
  const isMobile =
    window &&
    (window.navigator.userAgent.toLowerCase().includes('mobile') || window.navigator.maxTouchPoints >= 1 || true);
  return (
    <div className={styles.root}>
      <hgroup className={styles['header-group']}>
        <h1 className={styles['header']}>{headerGroup.hedaer}</h1>
        <ForwardSlashIcon className={styles['header-icon']} aria-hidden />
        <h2 className={styles['subheader']}>{headerGroup.subHeader}</h2>
        <p className={styles['description']}>{headerGroup.description}</p>
      </hgroup>
      <main className={styles['main']}></main>
      <footer className={styles['footer']}>
        <ul className={styles['footer__contacts']} aria-label={contacts.ariaLabel}>
          {contacts.items.map(({ Icon, href, ariaLabel }) =>
            href.startsWith('tel:') && !isMobile ? null : (
              <li key={ariaLabel} className={styles['footer__contacts__item']}>
                <Link href={href} aria-label={ariaLabel}>
                  <Icon className={styles['footer__contacts__item__icon']} aria-hidden />
                </Link>
              </li>
            ),
          )}
        </ul>
      </footer>
    </div>
  );
}
