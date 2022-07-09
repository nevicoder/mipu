import ContactUs from "../ContactUs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.scss";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <FontAwesomeIcon className={styles.envelope} icon={faEnvelope} />
        <ContactUs />
        <div className={styles.info}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            Ly Minh Phuc
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            0962***253
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faAt} />
            nevi.coder@gmail.com
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
            nevi.coder
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            nevicoder
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
