import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { projects } from '../../assets/db/projects';
import { FilterType } from '../FilterType/FilterType';

import styles from './ProjectsList.module.css';

export const ProjectsList = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');

  const getVisibleProjects = () => {
    switch (filter) {
      case 'team':
        return projects.filter(({ type }) => type === 'team');

      case 'solo':
        return projects.filter(({ type }) => type === 'solo');

      default:
        return projects;
    }
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <FilterType filter={filter} setFilter={setFilter} />

      <ul className={styles.list}>
        {visibleProjects.map(({ id, name, cover }) => (
          <li className={styles.item} key={id}>
            <Link to={`/projects/${id}`} state={{ from: location }}>
              <img src={cover} alt={name} width={350} height={220} />
              <p className={styles.text}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
