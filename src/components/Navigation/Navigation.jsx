import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/projects">
        Projects
      </NavLink>
      <NavLink className={styles.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
