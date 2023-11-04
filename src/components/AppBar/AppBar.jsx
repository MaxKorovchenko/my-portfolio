import { Navigation } from 'components/Navigation/Navigation';

import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Max Korovchenko. Front-End Developer</p>
      <Navigation />
    </div>
  );
};
