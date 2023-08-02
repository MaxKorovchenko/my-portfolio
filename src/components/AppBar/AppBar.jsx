import { Navigation } from '../Navigation/Navigation';

import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.text}>Max Korovchenko. Front-End Developer</p>
        <Navigation />
      </div>
    </header>
  );
};
