import cx from 'classnames';

import styles from './pill-list.module.css';

export interface PillListProps {
  technologies: string[];
  isLarge?: boolean;
}

export function PillList({ technologies, isLarge }: PillListProps) {
  return (
    <ul className={cx(styles['pill_list'], { [styles.large]: isLarge })}>
      {technologies?.map((technology) => (
        <li key={technology} className={cx(styles['pill_list__item'], { [styles.large]: isLarge })}>
          {technology}
        </li>
      ))}
    </ul>
  );
}
