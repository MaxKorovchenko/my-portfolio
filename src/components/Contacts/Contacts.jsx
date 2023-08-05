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
        <p>
          <img src={locationIcon} alt="mail icon" width={100} />
          Kramatorsk (currently in Poltava), Ukraine{' '}
        </p>
        <p>
          <img src={mailIcon} alt="mail icon" width={100} />
          <a
            href="mailto:max.korovchenko@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            max.korovchenko@gmail.com
          </a>
        </p>
        <p>
          <img src={telegramIcon} alt="telegram icon" width={100} />
          <a
            href="https://t.me/MaxKorovchenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </p>
        <p>
          <img src={linkedInIcon} alt="linkedIn icon" width={100} />
          <a
            href="https://linkedin.com/in/maxkorovchenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <img src={gitHubIcon} alt="github icon" width={100} />
          <a
            href="https://github.com/MaxKorovchenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
};
