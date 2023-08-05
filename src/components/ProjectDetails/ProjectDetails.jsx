import { useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';

import { BackLink } from '../BackLink/BackLink';
import { projects } from '../../assets/db/projects';
import githubIcon from '../../assets/images/svg/github.svg';
import websiteIcon from '../../assets/images/svg/website.svg';

import styles from './ProjectDetails.module.css';

export const ProjectDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/projects');
  const { projectId } = useParams();

  const { name, role, cover, description, technologies, github, livePage } =
    projects[projectId - 1];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.wrapper}>
        <div className={styles.backLink}>
          <BackLink to={backLinkRef.current} />
        </div>

        <div className={styles.box}>
          <img className={styles.image} src={cover} alt={name} width={600} />
          <div className={styles.linkWrapper}>
            <a
              className={styles.link}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" width={50} />
              GitHub
            </a>
            <a
              className={styles.link}
              href={livePage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={websiteIcon} alt="github icon" width={50} />
              Live Page
            </a>
          </div>
        </div>

        <p className={styles.text}>{description}</p>
        <p className={styles.text}>Role: {role}</p>
        <p className={styles.text}>Skills: {technologies}</p>
      </div>
    </section>
  );
};
