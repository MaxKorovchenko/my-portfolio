import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './BackLink.module.css';

export const BackLink = ({ to }) => {
  return (
    <Link className={styles.link} to={to}>
      GO BACK
      <BsFillArrowLeftCircleFill />
    </Link>
  );
};
