import Image from "next/image";
import EmojiCanvas from "./emojicanvas";
import waveEmoji from "../../public/images/wave.png";
import styles from "../../styles/components/about.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.aboutInfoSection}>
      <h2 className={styles.aboutH2}>
        Hi! I&apos;m Truman
        <Image
          priority
          className={styles.aboutWave}
          src={waveEmoji}
          alt="Waving Hand Emoji"
        />
        ,
      </h2>
      <p className={styles.aboutText}>
        an experienced{" "}
        <span data-emoji="⚙️" className={`emojiSpot ${styles.emojiSpot}`}>
          engineer
        </span>
        ,{" "}
        <span data-emoji="👑" className={`emojiSpot ${styles.emojiSpot}`}>
          leader
        </span>
        , and{" "}
        <span data-emoji="💼" className={`emojiSpot ${styles.emojiSpot}`}>
          consultant
        </span>{" "}
        based in{" "}
        <span data-emoji="🏖️" className={`emojiSpot ${styles.emojiSpot}`}>
          Venice Beach, California
        </span>
        . With over 5 years of hands-on{" "}
        <span data-emoji="💻" className={`emojiSpot ${styles.emojiSpot}`}>
          coding
        </span>{" "}
        and{" "}
        <span data-emoji="📈" className={`emojiSpot ${styles.emojiSpot}`}>
          management
        </span>{" "}
        experience, I{" "}
        <span data-emoji="🎯" className={`emojiSpot ${styles.emojiSpot}`}>
          focus
        </span>{" "}
        on{" "}
        <span data-emoji="💡" className={`emojiSpot ${styles.emojiSpot}`}>
          creating solutions
        </span>{" "}
        that{" "}
        <span data-emoji="✨" className={`emojiSpot ${styles.emojiSpot}`}>
          truly resonate
        </span>
        .
      </p>
      <p className={styles.aboutText}>
        I blend{" "}
        <span data-emoji="🧑‍🎨" className={`emojiSpot ${styles.emojiSpot}`}>
          artistic expression
        </span>{" "}
        with{" "}
        <span data-emoji="💯" className={`emojiSpot ${styles.emojiSpot}`}>
          pixel perfection
        </span>
        ,{" "}
        <span data-emoji="🔓" className={`emojiSpot ${styles.emojiSpot}`}>
          unlock potential
        </span>
        , and{" "}
        <span data-emoji="🌈" className={`emojiSpot ${styles.emojiSpot}`}>
          foster inclusivity
        </span>
        .
      </p>
      <p className={styles.aboutText}>
        Outside of{" "}
        <span data-emoji="🎨" className={`emojiSpot ${styles.emojiSpot}`}>
          creating
        </span>{" "}
        and{" "}
        <span data-emoji="📋" className={`emojiSpot ${styles.emojiSpot}`}>
          coaching
        </span>
        , you might catch me leveling up in the latest{" "}
        <span data-emoji="🎮" className={`emojiSpot ${styles.emojiSpot}`}>
          video game
        </span>{" "}
        <span data-emoji="🌞" className={`emojiSpot ${styles.emojiSpot}`}>
          soaking up the sun
        </span>{" "}
        with{" "}
        <span data-emoji="🐕" className={`emojiSpot ${styles.emojiSpot}`}>
          my dog
        </span>{" "}
        on the{" "}
        <span data-emoji="🐚" className={`emojiSpot ${styles.emojiSpot}`}>
          beach
        </span>
        , exploring new{" "}
        <span data-emoji="🖼️" className={`emojiSpot ${styles.emojiSpot}`}>
          art
        </span>{" "}
        and{" "}
        <span data-emoji="🎵" className={`emojiSpot ${styles.emojiSpot}`}>
          music
        </span>
        , or nurturing{" "}
        <span data-emoji="🌱" className={`emojiSpot ${styles.emojiSpot}`}>
          my garden
        </span>{" "}
        — both the{" "}
        <span data-emoji="🧱" className={`emojiSpot ${styles.emojiSpot}`}>
          Lego
        </span>{" "}
        and{" "}
        <span data-emoji="🌻" className={`emojiSpot ${styles.emojiSpot}`}>
          real
        </span>{" "}
        one.
      </p>
      <a
        href="/Truman-Lahr_Resume-2023.pdf"
        download
        className={styles.resumeButton}
        title="Download my resume"
      >
        <svg
          className={styles.resumeSVG}
          xmlns="http://www.w3.org/2000/svg"
          height="1rem"
          viewBox="0 0 512 512"
        >
          <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" />
        </svg>
        Download Resume
      </a>
      <EmojiCanvas
        id="aboutCanvas"
        className={styles.aboutCanvas}
        width={"100%"}
        height={"100%"}
      />
    </section>
  );
}
