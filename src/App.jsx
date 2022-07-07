import Header from "./components/Header/";

import Main from "./components/Main";
import styles from "./app.module.scss";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <div className={styles.portfolio}>
          <Header />
          <Main />
        </div>
      </div>
   </BrowserRouter>
  );
}

export default App;
