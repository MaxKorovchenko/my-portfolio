import { About } from 'components/About/About';
import { Skills } from 'components/Skills/Skills';
import { AnimatedAbout } from 'utils/animations/AnimatedAbout';
import { AnimatedSkills } from 'utils/animations/AnimatedSkills';

import styles from 'components/Layout/Layout.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hi! I'm Max, a Front-End Developer </h1>
      <div className={styles.wrapper}>
        <AnimatedAbout>
          <About />
        </AnimatedAbout>

        <AnimatedSkills>
          <Skills />
        </AnimatedSkills>
      </div>
    </div>
  );
};

export default HomePage;
