import styles from './FilterType.module.css';

export const FilterType = () => {
  return (
    <div className={styles.wrapper}>
      <p>Filter by type :</p>
      <div className={styles.btnGroup}>
        <button type="button">All</button>
        <button type="button">Team</button>
        <button type="button">Solo</button>
      </div>
    </div>
  );
};
