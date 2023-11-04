import styles from './Skills.module.css';

import html from 'assets/images/skills/html.png';
import css from 'assets/images/skills/css.png';
import js from 'assets/images/skills/javascript.png';
import react from 'assets/images/skills/react.png';
import redux from 'assets/images/skills/redux.png';

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <ul className={styles.list}>
        <li>
          <img className={styles.item} src={html} alt="html" />
        </li>
        <li>
          <img className={styles.item} src={css} alt="css" />
        </li>
        <li>
          <img className={styles.item} src={js} alt="js" />
        </li>
        <li>
          <img className={styles.item} src={react} alt="react" />
        </li>
        <li>
          <img className={styles.item} src={redux} alt="redux" />
        </li>
      </ul>
    </div>
  );
};
