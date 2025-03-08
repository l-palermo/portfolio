import { RefObject, useEffect, useRef } from 'react';

import styles from './background.module.css';

const handleMouseMove = (ref: RefObject<HTMLDivElement>) => (e: MouseEvent) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  ref.current?.style.setProperty(
    'background',
    `radial-gradient(at ${x * 100}% ${y * 100}%, var(--color-light-ciano-alpha-5) 0%, var(--color-dark-blue) 100%)`,
  );
};

export function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove(ref));
    return () => {
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <div className={styles.background} ref={ref} data-testid="background" />;
}
