import { useState } from "react";
import styles from "../../styles/components/contact.module.scss";

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
        <span className={styles.copyText} onClick={copyEmail}>
          {copyText}
        </span>
        <div className={styles.linkWrap}>
          <a className={styles.profileLink} href="https://www.linkedin.com/in/trumanlahr/" title="LinkedIn Profile">
            <svg className={styles.profileSVG} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a className={styles.profileLink} href="https://github.com/trumancodes" title="Github Profile">
            <svg className={styles.profileSVG} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
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
