import { ReactNode } from 'react';
import Link from 'next/link';

import pageContent from './lib/content';
import styles from './clearscore.module.css';
import ArrowBackIcon from '../../assets/icons/arrow-back.svg';
import ArrowOutwardIcon from '../../assets/icons/arrow-outward.svg';
import interpolateStringWithComponents from '../../helpers/interpolate-strings';

function HighlightText({ children }: { children?: ReactNode }) {
  return <span className={styles['list__item-task--highlight']}>{children}</span>;
}

function TextLink({ children, ...props }: { children?: ReactNode }) {
  return (
    <a className={styles['intro__link']} {...props}>
      {children}
      <ArrowOutwardIcon className={styles['intro__link__icon']} />
    </a>
  );
}

const componentMap = {
  TextLink,
};

function mapComponents(components?: { componentId: keyof typeof componentMap; props: Record<string, string> }[]) {
  return components?.map(({ componentId, props }) => ({ Component: componentMap[componentId], props }));
}

export default function ClearScore() {
  const { intro, roleSummary, backNavigation, appPreviews } = pageContent;
  return (
    <div className={styles['container']}>
      <Link href={backNavigation.path} className={styles['link']}>
        <ArrowBackIcon className={styles['link__icon']} aria-hidden />
        <p>{backNavigation.cta}</p>
      </Link>
      <article className={styles['intro']} aria-label={intro.ariaLabel}>
        {intro.items.map(({ text, components }) => (
          <p key={text} className={styles['intro__text']} data-testid="intro-line">
            {interpolateStringWithComponents(text, mapComponents(components))}
          </p>
        ))}
      </article>
      <section className={styles['section']}>
        <h2 className={styles['section__title']}>{roleSummary.title}</h2>
        <ul className={styles['list']} aria-label={roleSummary.title}>
          {roleSummary.tasks.map((task) => {
            return (
              <li key={task} className={styles['list__item-task']}>
                {interpolateStringWithComponents(task, [{ Component: HighlightText }])}
              </li>
            );
          })}
        </ul>
      </section>
      <article className={styles['note']}>{appPreviews.accessibilityIntro}</article>
      {appPreviews.sections.map(({ title, videos }) => (
        <section key={title} className={styles['section']}>
          <h2 className={styles['section__title']}>{title}</h2>
          <ul className={styles['list']}>
            {videos.map(({ title, filePaths, isPortrait, description }) => (
              <li key={title} className={styles['list__item-video']}>
                <h3 className={styles['list__item-video__title']}>{title}</h3>
                <p className={styles['list__item-video__description']}>{description}</p>
                {filePaths.map((filePath, index) => (
                  <video
                    key={filePath}
                    className={styles['video']}
                    style={{ width: isPortrait ? '48%' : '100%' }}
                    controls
                    aria-hidden
                    data-testid={`video-${title}-${index}`}
                  >
                    <source src={filePath} />
                    {appPreviews.notSupportedVideo}
                  </video>
                ))}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
