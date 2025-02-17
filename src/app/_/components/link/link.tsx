import React from 'react';
import cx from 'classnames';
import Svg from 'react-inlinesvg';
import NextLink from 'next/link';

import styles from './link.module.css';

export interface LinkProps {
  url: string;
  label: string;
  icon: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  iconOnly?: boolean;
  reverse?: boolean;
  isItemList?: boolean;
  opensInNewTab?: boolean;
}

function LinkInner({ url, label, icon, iconOnly, reverse, opensInNewTab }: LinkProps) {
  return (
    <NextLink
      className={cx(styles['link'], { [styles['link_list_icon']]: iconOnly, [styles['link_reverse']]: reverse })}
      href={url}
      aria-label={label}
      {...(opensInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {!iconOnly ? <span>{label}</span> : null}
      <Svg src={icon.fields.file.url} aria-hidden data-testid={'link-icon'} />
    </NextLink>
  );
}

export function Link({ url, label, icon, iconOnly, reverse, isItemList, opensInNewTab }: LinkProps) {
  const props = { url, label, icon, iconOnly, reverse, opensInNewTab };
  if (isItemList) {
    return (
      <li className={styles['link_list']}>
        <LinkInner {...props} />
      </li>
    );
  }
  return <LinkInner {...props} />;
};