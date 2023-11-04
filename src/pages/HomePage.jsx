import { About } from 'components/About/About';
import { Skills } from 'components/Skills/Skills';

const styles = {
  container: {
    width: 1240,
    margin: '0 auto',
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: 'aliceblue',
    textAlign: 'center',
    padding: 50,
    fontSize: 50,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: 200,

    marginTop: 'auto',
    marginBottom: 'auto',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hi! I'm Max, a Front-End Developer </h1>
      <div style={styles.wrapper}>
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default HomePage;
