import { ImageResponse } from 'next/og';

import styles from './opengraph-image-generator.module.css';

export const runtime = 'edge';
export const contentType = 'image/png';
export const alt = 'Luigi Palermo portfolio';
export const size = { width: 1200, height: 630 };

export default async function Image() {
  return new ImageResponse(<div className={styles.image}>Luigi Palermo portfolio</div>, { ...size });
}
