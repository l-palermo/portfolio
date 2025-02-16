import { ReactNode } from 'react';

import styles from './list.module.css';

export function List({ children }: { children: ReactNode }) {
  return <ul className={styles.list}>{children}</ul>;
}

export function ListItem({ children }: { children: ReactNode }) {
  return <li className={styles.listItem}>{children}</li>;
}
