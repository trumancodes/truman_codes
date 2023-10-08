import { useRef, useEffect, useState } from "react";
import styles from "../styles/components/header.module.scss";

export default function Header({ pageHeaderClassName }) {
  const handleScroll = (sectionName) => {
    const section = document.getElementById(sectionName);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={`${styles.headerWrap} ${pageHeaderClassName}`}>
      <button
        className={styles.menuBtn}
        onClick={() => handleScroll("hero")}
        title="Back to top"
      >
        <h1 className={styles.textLogo}>&lt;/truman.codes&gt;</h1>
      </button>
      <button
        className={styles.menuBtn}
        onClick={() => handleScroll("about")}
        title="Scoll to About"
      >
        About
      </button>
      <button
        className={styles.menuBtn}
        onClick={() => handleScroll("contact")}
        title="Scoll to Contact"
      >
        Contact
      </button>
    </header>
  );
}
