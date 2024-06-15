import Head from "next/head";
import styles from "../public/styles/home.module.css";
import Script from "next/script";
import Continue from '../components/continue';
import { useEffect } from "react";

export default function Home() {
  useEffect => {
    const namer = document.querySelector(`${styles.namer}`)
     namer?.classList.remove("hide")
     namer?.classList.add("show")
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yes-No</title>
        <link rel="shortcut icon" href="/gfx/Caution.png" type="image/x-icon" />
      </Head>
      <Script
        src="js/script.js"
        onLoad={() => {
          console.log("Script loaded and executed");
        }}
      ></Script>
      <div className={`${styles.namer} ${styles.hide}`}>
        <div className={styles.menu}>
          <img src="/gfx/svg.png" alt="" className={styles.svg} />
          <h1 className={styles.header_mond}>Yes-No</h1>
        </div>
        {/* <div className={`${styles.name} ${styles.hide}`}>
          <form className={styles.main_form}>
            <span>
              <h3 className={styles.header_main}>Enter your name:</h3>
            </span>
            <label className={styles.name_bx}>
              <input
                name="submitted-name"
                autoComplete="name"
                className={styles.name_in}
              />
            </label>
            <button className={styles.contin_btn}>Continue</button>
          </form>
        </div> */}
        <Continue />
      </div>
      <div className={`${styles.notify} ${styles.hide}`}>
        <div className={styles.notibox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "red" }}
            className={styles.svg}
          >
            <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
          </svg>
          <h4>Press Yes.</h4>
        </div>
      </div>
      <div className={`${styles.container} ${styles.hide}`}>
        <div className={styles.menu}>
          <img src="/gfx/svg.png" alt="" className={styles.svg} />
          <h1 className={styles.header_mond}>Yes-No</h1>
        </div>
        <h1>Are you a fool?</h1>
        <div className={styles.form}>
          <button className={styles.yes_btn} type="button">
            Yes
          </button>
          <button className={styles.no_btn} type="button">
            No
          </button>
        </div>
      </div>
      <div className={`${styles.accepted} ${styles.hide}`}>
        <div className={styles.menu}>
          <img src="/gfx/svg.png" alt="" className={styles.svg} />
          <h1 className={styles.header_mond}>Yes-No</h1>
        </div>
        <h1>HA HA, I knew it</h1>
        <footer>Your response has been sent to the original author.</footer>
      </div>
      <footer>
        <div className={styles.footer}>
          <p>
            Made by
            <a href="https://github.com/aarush0101" className={styles.fop}>
              Aarush Master
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
