import { useParams } from 'react-router-dom';

import { projects } from '../../assets/db/projects';
import gitHubIcon from '../../assets/images/svg/gitHub-black.svg';
import website from '../../assets/images/svg/website.svg';

import styles from './ProjectDetails.module.css';

export const ProjectDetails = () => {
  const { projectId } = useParams();

  const { name, role, cover, description, technologies, github, livePage } =
    projects[projectId - 1];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <img className={styles.image} src={cover} alt={name} width={600} />
          <div className={styles.linkWrapper}>
            <a
              className={styles.link}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubIcon} alt="github icon" width={50} />
              GitHub
            </a>
            <a
              className={styles.link}
              href={livePage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={website} alt="github icon" width={50} />
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
