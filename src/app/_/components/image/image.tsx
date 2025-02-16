import React from 'react';
import NextLink from 'next/link';
import { Asset } from 'contentful';

import styles from './image.module.css';

export interface ImageProps {
  image: Asset;
}

export function Image(props: ImageProps) {
  return (
    <NextLink href={`http:${props.image.fields.file?.url}`} target="_blank">
      <span className={styles.imageContainer}>
        <img
          className={styles.image}
          aria-hidden
          src={`http:${props.image.fields.file?.url}`}
          alt={`${props.image.fields.title} thumbnail`}
        />
      </span>
    </NextLink>
  );
}
