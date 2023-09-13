import { useState } from "react";
import styles from "../styles/components/contact.module.scss";

const colorPairs = [
  ["#5a4c87", "#acc8e1"],
  ["#e3c984", "#52b9da"],
  ["#5aab95", "#cca5c6"],
  ["#d4afba", "#83c28b"],
  ["#b58abd", "#e5837b"],
  ["#d7d998", "#c490bd"],
  ["#476d5d", "#e25588"],
  ["#6a809a", "#d9b48f"],
  ["#7d6ea8", "#e6a57e"],
  ["#9b6b70", "#6f83ef"],
  ["#a89f91", "#8e6ae6"],
  ["#8b8680", "#a8d5e2"],
  ["#c19a6b", "#5d737e"],
  ["#394989", "#d3bcc0"],
  ["#a5a58d", "#6b4226"],
];

const initRandomPair =
  colorPairs[Math.floor(Math.random() * colorPairs.length)];

export default function Contact() {
  const [curentPrimary, setPrimary] = useState(initRandomPair[0]);
  const [curentSecondary, setSecondary] = useState(initRandomPair[1]);
  const [copyText, setCopyText] = useState("(click to copy)");

  const setRandomPair = () => {
    const tempCopy = [...colorPairs];
    const indexOfCurrent = tempCopy.indexOf([curentPrimary, curentSecondary]);

    if (indexOfCurrent > -1) {
      tempCopy.splice(indexOfCurrent, 1);
    }

    const randomPair = tempCopy[Math.floor(Math.random() * tempCopy.length)];
    setPrimary(randomPair[0]);
    setSecondary(randomPair[1]);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@truman.codes");
      console.log("Content copied to clipboard");
      setCopyText("copied! i look forward to hearing from you soon 🤗");
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopyText("error");
    }
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
      style={{ "--primary": curentPrimary, "--secondary": curentSecondary }}
    >
      <span className={styles.contactFrame}>
        <h2 className={styles.contactH2}>Want to work together?</h2>
        <button
          className={styles.copyButton}
          onClick={copyEmail}
          title="Copy my email address"
        >
          hello@truman.codes
        </button>
        <span className={styles.copyText} onClick={copyEmail}>{copyText}</span>
      </span>
      <button
        className={styles.shuffleButton}
        onClick={setRandomPair}
        title="Shuffle colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 512 512"
        >
          <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
        </svg>
      </button>
    </section>
  );
}
