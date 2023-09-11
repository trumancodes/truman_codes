import Image from 'next/image';
import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import starsLImg from '../public/images/stars_l.png';
import starsRImg from '../public/images/stars_r.png';
import aiProfileImg from '../public/images/ai-profile.png';
import styles from '../styles/components/hero.module.scss';

export default function Hero() {

  let container = useRef();
  let gradient = useRef();
  let starsL = useRef();
  let starsR = useRef();
  let aiProfile = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline()
      .to(starsL, { opacity: 1, x: 20, duration: 0.5}, 0)
      .to(starsR, { opacity: 1, x: -20, duration: 0.5}, 0)
      .to(aiProfile, { opacity: 1, y: -10, duration: 0.5 }, 0.75)
      .to(gradient, {transform: 'translateY(0vh)', duration: 1}, 0)
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroSection} ref={(el) => {container = el}}>
      <span className={styles.gradientBG} ref={(el) => {gradient = el}}/>
      <span className={styles.cropBox}>
        <Image
          className={`${styles.stars} ${styles.starsL}`}
          src={starsLImg}
          alt="Stars and sparkles"
          ref={(el) => {starsL = el}}
        />
        <Image
          priority
          className={styles.aiProfilePic}
          src={aiProfileImg}
          alt="AI Generated picture of me"
          ref={(el) => {aiProfile = el}}
        />
        <Image
          className={`${styles.stars} ${styles.starsR}`}
          src={starsRImg}
          alt="Stars and sparkles"
          ref={(el) => {starsR = el}}
        />
      </span>
    </section>
  );
}