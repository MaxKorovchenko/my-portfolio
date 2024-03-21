import CV from 'assets/CV/Max_Korovchenko_Front-End_Developer.pdf';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.resume} href={CV} download>
        Download Resume
      </a>

      <p>© 2024</p>
    </footer>
  );
};
