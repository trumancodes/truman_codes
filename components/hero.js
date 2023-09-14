import Image from "next/image";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import starsLImg from "../public/images/stars_l.png";
import starsRImg from "../public/images/stars_r.png";
import aiProfileImg from "../public/images/ai-profile.png";
import styles from "../styles/components/hero.module.scss";

export default function Hero() {
  let container = useRef();
  let gradient = useRef();
  let starsL = useRef();
  let starsR = useRef();
  let aiProfile = useRef();
  const tl = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(starsL, { opacity: 1, x: 20, duration: 0.5 }, 0)
        .to(starsR, { opacity: 1, x: -20, duration: 0.5 }, 0)
        .to(gradient, { transform: "translateY(0vh)", duration: 1 }, 0)
        .to(aiProfile, { opacity: 1, y: -10, duration: 0.5 }, 0.75);
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className={styles.heroSection}
      ref={(el) => {
        container = el;
      }}
    >
      <span
        className={styles.gradientBG}
        ref={(el) => {
          gradient = el;
        }}
      />
      <span className={styles.cropBox}>
        <Image
          priority
          className={`${styles.stars} ${styles.starsL}`}
          src={starsLImg}
          alt="Stars and sparkles"
          ref={(el) => {
            starsL = el;
          }}
          sizes="110vh"
        />
        <Image
          priority
          className={styles.aiProfilePic}
          src={aiProfileImg}
          alt="AI Generated picture of me"
          ref={(el) => {
            aiProfile = el;
          }}
          sizes="40vw"
        />
        <Image
          priority
          className={`${styles.stars} ${styles.starsR}`}
          src={starsRImg}
          alt="Stars and sparkles"
          ref={(el) => {
            starsR = el;
          }}
          sizes="40vw"
        />
      </span>
    </section>
  );
}
