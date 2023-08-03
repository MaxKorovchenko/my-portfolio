import { projects } from '../../assets/db/projects';
import { FilterType } from '../FilterType/FilterType';

import styles from './ProjectsList.module.css';

export const ProjectsList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <FilterType />

      <ul className={styles.list}>
        {projects.map(({ id, name, cover }) => (
          <li className={styles.item} key={id}>
            <img src={cover} alt={name} width={350} height={220} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
