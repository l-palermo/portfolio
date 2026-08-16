import styles from './loading.module.css';

export default function ResumeLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <h1 className={styles.text}>
        Generating PDF...
      </h1>
    </div>
  );
}
