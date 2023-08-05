import gitHubIcon from '../../assets/images/svg/github.svg';
import linkedInIcon from '../../assets/images/svg/linkedin.svg';
import telegramIcon from '../../assets/images/svg/telegram.svg';
import mailIcon from '../../assets/images/svg/mail.svg';
import locationIcon from '../../assets/images/svg/location.svg';

import styles from './Contacts.module.css';

export const Contacts = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>

      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <img src={locationIcon} alt="mail icon" width={70} />
          <p>Kramatorsk (currently in Poltava), Ukraine </p>
        </div>

        <a
          className={styles.contact}
          href="mailto:max.korovchenko@gmail.com"
          rel="noopener noreferrer"
        >
          <img src={mailIcon} alt="mail icon" width={70} />
          max.korovchenko@gmail.com
        </a>

        <a
          className={styles.contact}
          href="https://t.me/MaxKorovchenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="telegram icon" width={70} />
          Telegram
        </a>

        <a
          className={styles.contact}
          href="https://linkedin.com/in/maxkorovchenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInIcon} alt="linkedIn icon" width={70} />
          LinkedIn
        </a>

        <a
          className={styles.contact}
          href="https://github.com/MaxKorovchenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubIcon} alt="github icon" width={70} />
          GitHub
        </a>
      </div>
    </section>
  );
};
