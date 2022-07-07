import { Link } from "react-router-dom";
import styles from "./Tab.module.scss";
function Tab({ type, tab, onClick}) {
  return (
    <Link
      className={type === tab ? `${styles.tab} ${styles.active}` : styles.tab}
      onClick={onClick}
      to={`/${tab}`}
    >
      {tab}
    </Link>
  );
}

export default Tab;
