import Link from 'next/link';
import pageCopy from './lib/content';

import styles from './clearscore.module.css';
import ChevronLeftIcon from '../../../_/assets/icons/chevron-left.svg';

export default function ClearScore() {
  const { intro, roleSummary, backNavigation, appPreviews } = pageCopy;
  return (
    <div className={styles['container']}>
      <Link href={backNavigation.path} className={styles['link']}>
        <ChevronLeftIcon className={styles['link__icon']} aria-hidden />
        <p>{backNavigation.cta}</p>
      </Link>
      <article className={styles['intro']}>
        {intro.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </article>
      <section className={styles['section']}>
        <h2 className={styles['section__title']}>{roleSummary.title}</h2>
        <ul className={styles['list']}>
          {roleSummary.tasks.map((task) => {
            return (
              <li key={task} className={styles['list__item-task']}>
                {task}
              </li>
            );
          })}
        </ul>
      </section>
      <h2 className={styles['visually-hidden']}>{appPreviews.accessibleIntro}</h2>
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
                    Your browser does not support the video tag.
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
