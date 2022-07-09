import { useState } from "react";
import Tab from "../Tab";
import styles from "./Tabs.module.scss";

function Tabs() {
  const tabs = ["bio", "experiences", "projects","contact"];
  const [type, setType] = useState("bio");
  const handleClick = (e) => {
    setType(e.target.innerText);
  };
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab type={type} onClick={handleClick} tab={tab} key={tab} />
      ))}
    </div>
  );
}

export default Tabs;
