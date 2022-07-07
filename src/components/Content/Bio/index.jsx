import styles from "./Bio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
function Bio() {
  return (
    <ul>
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
    </ul>
  );
}

export default Bio;
