import cx from 'classnames';
import Svg from 'react-inlinesvg';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

import styles from './card-with-image.module.css';
import { Link, LinkProps } from '../link';
import { PillList } from '../pill-list';

const transformDate = (date: string) => {
  const dateString = new Date(date).toLocaleDateString('en-GB', {
    month: 'numeric',
    year: 'numeric',
  });
  return dateString.replace('/', ' . ');
};

interface ExperienceDatesProps {
  startDate?: string;
  endDate?: string;
}

const ExperienceDates = ({ startDate, endDate }: ExperienceDatesProps) => {
  if (!startDate) {
    return null;
  }

  return (
    <div className={styles['card__aside__date']}>
      <p>{transformDate(startDate)}</p>
      <div className={styles['separator']} data-testid="date-separator" />
      <p>{endDate ? transformDate(endDate) : 'Present'}</p>
    </div>
  );
};

export interface CardWithImageProps {
  title: string;
  subtitle?: string;
  description: string;
  titleIcon: { fields: { file: { url: string } } };
  type: string;
  fields?: { fields: { technologies: string[] } };
  projectGithubLink: { fields: LinkProps };
  destinationUrl: string;
  ctaAriaLabel: string;
  startDate?: string;
  endDate?: string;
  imageUrl?: { fields: { file: { url: string }; title: string } };
}

export function CardWithImage({
  title,
  subtitle,
  description,
  titleIcon,
  type,
  fields,
  projectGithubLink,
  destinationUrl,
  ctaAriaLabel,
  startDate,
  endDate,
  imageUrl,
}: CardWithImageProps) {
  const [userAgent, setUserAgent] = useState('');
  const isMobile = userAgent?.includes('Mobile');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <article className={styles['card']}>
      <div className={styles['card__image__container']}>
        <img className={styles['card__image']} src={imageUrl?.fields?.file?.url} alt={imageUrl?.fields?.title} />
      </div>
      <div className={styles['card__content-container']}>
        <div className={styles['card__content']}>
          <h3 className={styles['card__content__title']}>{title}</h3>
          <Svg className={styles['card__content__icon']} src={titleIcon.fields.file.url} aria-hidden />
          {subtitle ? <p className={styles['card__content__role']}>{subtitle}</p> : null}
          <p className={styles['card__content__description']}>{description}</p>
          {fields?.fields.technologies ? <PillList technologies={fields?.fields.technologies} /> : null}
        </div>
        <aside className={cx(styles['card__aside'], { [styles['card__aside-project']]: type === 'project' })}>
          {type === 'experience' ? <ExperienceDates startDate={startDate} endDate={endDate} /> : null}
          {type === 'project' ? <Link {...projectGithubLink.fields} /> : null}
        </aside>
      </div>
      <NextLink
        className={`${styles['card__link']} ${isMobile || true ? styles['card__link--mobile'] : ''}`}
        href={destinationUrl || ''}
      >
        <p className={styles['visually-hidden-item']}>{ctaAriaLabel}</p>
      </NextLink>
    </article>
  );
}
