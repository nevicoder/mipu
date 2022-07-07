import Tabs from "../Tabs/";

import Content from "../Content";
import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.main}>
      <Tabs />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Main;
