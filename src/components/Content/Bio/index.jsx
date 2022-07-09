import styles from "./Bio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faUser,
  faBriefcase,
  faCode,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
function Bio() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <p>Ly Minh Phuc</p>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faCakeCandles} />
            <p>15/11/1996</p>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
            <p>Junior Software Engineer</p>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faCode} />
            <p className={styles.icons}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNodeJs} />
            </p>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faLanguage} />
            <p>TOEIC: 700</p>
          </div>
        </li>
      </ul>
      <div className={styles.bio}>
        I'm a tech junkie who are willing to learn new things everyday. I love
        to work around with computers and do problems-solving. Looking forward
        to work in a professional environment, so i can dedicate myself for the company
        and be better me each day.
      </div>
    </>
  );
}

export default Bio;
