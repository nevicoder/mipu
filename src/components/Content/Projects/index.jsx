import { useEffect, useState } from "react";
import Project from "../Project";
import styles from "./Projects.module.scss"

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/nevicoder/repos")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className={styles.projects}>
      <ul>
        {projects.map((prj) => (
          <Project key={prj.id} prj={prj} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
