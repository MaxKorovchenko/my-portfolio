import styles from './FilterType.module.css';

export const FilterType = ({ filter, setFilter }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Filter by type :</p>
      <div className={styles.btnGroup}>
        <button
          className={filter === 'all' ? styles.active : styles.btn}
          type="button"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'team' ? styles.active : styles.btn}
          type="button"
          onClick={() => setFilter('team')}
        >
          Team
        </button>
        <button
          className={filter === 'solo' ? styles.active : styles.btn}
          type="button"
          onClick={() => setFilter('solo')}
        >
          Solo
        </button>
      </div>
    </div>
  );
};
