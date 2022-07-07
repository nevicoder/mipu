import { useEffect } from "react";
import { useState } from "react";
import styles from "./Project.module.scss";

function Project({ prj }) {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repos/nevicoder/${prj.name}/languages`)
      .then((res) => res.json())
      .then((data) => {
        const array = Object.keys(data);
        setLanguages(array);
      });
  }, []);
  return (
    <li className={styles.project}>
      <a href={`https://github.com/nevicoder/${prj.name}`}>
        <p className={styles.title}>{prj.name}</p>
        <p>{prj.description}</p>
        <p>
          Languages:{" "}
          {languages.map((item) => (
            <span className={styles.language} key={item}>
              {item}
            </span>
          ))}
        </p>
      </a>
    </li>
  );
}

export default Project;
