import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './text.module.css';
import { HTMLTags, Sentiments, Variants } from './lib/constants';

export interface TextProps {
  children: ReactNode | ReactNode[];
  variant?: Variants;
  sentiment?: Sentiments;
  HTMLTag: HTMLTags;
}

export function Text({ children, variant, sentiment, HTMLTag }: TextProps) {
  const Tag = HTMLTag;
  return <Tag className={cx(styles.text, styles[`variant_${variant}`], styles[`sentiment_${sentiment}`])}>{children}</Tag>;
}
