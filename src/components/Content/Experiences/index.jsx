import styles from "./Experiences.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
function Experiences() {
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2015-2021</div>
          <p>Studying pharmacy at University</p>
        </div>
      </li>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2021-2022</div>
          <p>Self-studying programming</p>
        </div>
      </li>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2022-2023</div>
          <p>Working on some personal projects</p>
        </div>
      </li>
    </ul>
  );
}

export default Experiences;
