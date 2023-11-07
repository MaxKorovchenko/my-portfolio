import styles from './Tagline.module.css';

export const Tagline = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        The time spent fishing or coding doesn't count
      </p>
    </div>
  );
};
