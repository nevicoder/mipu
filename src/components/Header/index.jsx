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
          <img src="https://lh3.googleusercontent.com/vbTHR4vv-Sard-NdD3spCKq3l7e52sX79A7ASEqN-hXJ5wBqhcJUD7GP8saDD_sIBSnZheUX_lRd0DKgNAaqvY59bf6zeGBcWkqWdQaxtAA5b69bBFWKUqns5oQlH9jR7Rc6cE32zc3u-fyioSACr440D1_mU53dF0EtCPcL9jXc06CsfPjyLkeQsjgeFPsvyIX9sAv9q2HZlE8WJSgNwtATxlD-hOPFUCQjXuL2QyGxR7MdDgbFdGF9N7dqWFqrDisomOuqCGWJhvrSQOtGWzMLDgj28TqZMOWpxE17s1K-p-YqYnw8jCbVt6mh6YrqS5CMCDisplQMHOrfvqxt73fUeqFgrTnSewWZ_zJyn-oohJnSe5maraeu7E7Ij0Vh8Iaw-SRtUBWG3Mp4FMeu9eJVGqam3WiDRoKHeiWt4YQjxQj_Bf-CLpgGr0in99EFSKMYkuf3lf5sUsU1eIsA9BAydwETEC59Ty_u1V2Z1ulTxahIP-TbTxKyV7_GCV1-IKLukjIBilE_ZyRtLAHnhDOrqXbGesPOmFoKukAk-2hEVetPO6Fk7w0MnN5s9D4hETL7Q_NTTnKl1h1qnZkaEXNdjof0k_2CWyB7fK7j3JHI8AhF_j63V76__KY4PhTfevYxgliwME74DjTl0YEMbPRgeZEIrDSNXbuMdllAFiBTqklFKyYZxIu9B7MbIMeVHDlmiXT40PguMMsKSHzGffpMce9r6ehf7ASIDvagw3T8lK1JudR6-RjNB_8XPgBYSOuM_6pxwC8MAoQcnNsfcTzdpJiMNt_K9X0zwzXpTk70Gml7dxKwX6cSKye0BfhIJ31OLfhW5wRB8mTR810PG_sUrnDHG4LlWfXv1UBTnRVREiOsGLPyRz_Muy-nlxvriZyKWTNLI7nfSmGwN0BprQzm1eHUtu9MtnwzJsUpC0609QvwmHxu-DINaopbSLMIE31vcAE-kuy7hdi_-6E=s928-no?authuser=1" />
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
