'use client';

import styles from './page.module.css';
import config from '../lib/config';
import Link from 'next/link';
import ArrowOutwardIcon from '../assets/svgs/arrow-outward.svg';

export default function Home() {
  const { contacts, headerGroup, footerAriaLabel, details } = config;
  return (
    <div className={styles.root}>
      <hgroup className={styles['header-group']}>
        <h1 className={styles['header']}>{headerGroup.header}</h1>
        <div className={`${styles['separator']} ${styles['separator--header']}`} data-testid="header-separator" />
        <h2 className={styles['subheader']}>{headerGroup.subHeader}</h2>
        <p className={styles['description']}>{headerGroup.description}</p>
      </hgroup>
      <main className={styles['main']}>
        <ul className={styles['list']}>
          {details.intro.map(({ skill }) => (
            <li key={skill} className={styles['list-item']}>
              <p className={styles['skill']}>{skill}</p>
            </li>
          ))}
        </ul>
        <section className={styles['section']}>
          <h2 className={styles['section__title']}>{details.experiences.title}</h2>
          <ul className={styles['list']} aria-label={details.experiences.title}>
            {details.experiences.items.map((experience) => (
              <li key={experience.destionationUrl} className={`${styles['list-item']} ${styles['list-item--card']}`}>
                <article className={styles['experience-card']}>
                  <div className={styles['experience-card__content']}>
                    <h3>{experience.company}</h3>
                    <ArrowOutwardIcon
                      className={styles['experience-card__content__icon']}
                      aria-hidden
                      data-testid="header-icon"
                    />
                    <p className={styles['experience-card__content__role']}>{experience.role}</p>
                    <p className={styles['experience-card__content__description']}>{experience.description}</p>
                  </div>
                  <aside className={styles['experience-card__aside']}>
                    <div className={styles['experience-card__aside__date']}>
                      <p>{experience.startDate}</p>
                      <div className={styles['separator']} data-testid="date-separator" />
                      <p>{experience.endDate}</p>
                    </div>
                  </aside>
                  <Link className={styles['experience-card__link']} href={experience.destionationUrl}>
                    <p className={styles['visually-hidden-item']}>{experience.ctaAriaLabel}</p>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles['section']}>
          <h2 className={styles['section__title']}>{details.projects.title}</h2>
          <ul className={styles['list']} aria-label={details.projects.title}>
            {details.projects.items.map((project) => (
              <li key={project.name} className={`${styles['list-item']} ${styles['list-item--card']}`}>
                <article className={styles['project-card']}>
                  <div className={styles['project-card__content']}>
                      <h3>{project.name}</h3>
                      <ArrowOutwardIcon
                        className={styles['project-card__content__header__icon']}
                        aria-hidden
                        data-testid="header-icon"
                      />
                    <p className={styles['project-card__content__description']}>{project.description}</p>
                    <a
                      className={styles['project-card__content__link']}
                      href={project.projectDestinationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className={styles['visually-hidden-item']}>{project.projectAriaLabel}</p>
                    </a>
                  </div>
                  <aside className={styles['project-card__aside']}>
                    <a
                      className={styles['project-card__aside__link']}
                      href={project.iconDestinationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className={styles['visually-hidden-item']}>{project.iconAriaLabel}</p>
                      <project.Icon className={styles['project-card__aside__link__icon']} />
                    </a>
                  </aside>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className={styles['footer']} aria-label={footerAriaLabel}>
        <ul className={styles['footer__contacts']} aria-label={contacts.ariaLabel}>
          {contacts.items.map(({ Icon, href, ariaLabel }) => (
            <li key={href} className={styles['footer__contacts__item']}>
              <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
                <Icon className={styles['footer__contacts__item__icon']} aria-hidden data-testid={ariaLabel} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
