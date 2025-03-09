import React from 'react';

import styles from './header.module.css';

export interface HeaderProps {
  name: string;
  role: string;
  description: string;
}

export function Header({ name, role, description }: HeaderProps) {
  return (
    <hgroup className={styles['header-group']}>
      <h1 className={styles['header']}>{name}</h1>
      <div className={styles['header-separator']} data-testid="header-separator" >
        <div className={styles['separator']} />
      </div>
      <h2 className={styles['subheader']}>{role}</h2>
      <p className={styles['description']}>{description}</p>
    </hgroup>
  );
}
