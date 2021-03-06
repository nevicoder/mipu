import styles from "./Header.module.scss";
import classnames from "classnames";
import { useEffect, useState } from "react";
import {} from "react";
const Header = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch(" https://programming-quotes-api.herokuapp.com/Quotes/random").then(
      (res) => res.json().then((quote) => setQuote(quote))
    );
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src="https://i.imgur.com/ZluHaBo.jpg" />
        </div>
        <div className={classnames(styles.title, styles.nonSelect)}>
          <h1>Hi, welcome to my portfolio</h1>
        </div>
        {quote && (
          <p className={styles.quote}>{`"${quote.en}" - ${quote.author}`}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
