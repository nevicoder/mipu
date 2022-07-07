import styles from "./Header.module.scss";
import classnames from "classnames";
import { useEffect, useState } from "react";
import {} from "react";
const Header = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch("http://quotes.stormconsultancy.co.uk/random.json").then((res) =>
      res.json().then((quote) => setQuote(quote))
    );
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/271546716_2257043321109788_7855038822841370437_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=s1xnCAFwkXQAX8jM1bd&_nc_ht=scontent.fvca1-2.fna&oh=00_AT_IPz0blv1rLMX1L5iBeL_vhVI7CurSi4G_19Aaq81JpA&oe=62C51A27"
            alt="avatar"
          />
        </div>
        <div className={classnames(styles.title, styles.nonSelect)}>
          <h1>Hi, welcome to my portfolio</h1>
        </div>
        {quote && (
          <p className={styles.quote}>{`"${quote.quote}" - ${quote.author}`}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
