import React, { useRef, useEffect, useState } from 'react';

import Marquee from "react-fast-marquee";
import styles from '../styles/components/hypnomarquee.module.scss';

export default function HypnoMarquee() {
  const [cursorX, setCursorX] = useState(50);
  const [cursorY, setCursorY] = useState(50);
  const [allowMove, setAllowMove] = useState('none');

  const handleCursorMove = (e) => {
    if (allowMove === 'none') {
      const rect = e.target.getBoundingClientRect();
      setCursorX(((e.clientX/rect.width)*100).toFixed(0));
      setCursorY((((e.clientY-rect.top)/rect.height)*100).toFixed(0));
    }
  };

  const handleClick = () => {
    if (allowMove === 'none') {
      setAllowMove('auto')
    } else {
      setAllowMove('none')
    }
  }

  return (
    <section
      onMouseEnter={handleCursorMove}
      onMouseMove={handleCursorMove}
      onClick={handleClick}
      className={`${styles.hypnoMarqueeSection} ${styles.sectionWrapper}`}
      style={{ '--hypno': `${cursorX}% ${cursorY}%`, '--cursor': `${allowMove}` }}
    >
      <Marquee
      className={styles.hypnoMarquee}
      speed={150}
      >
        <span className={styles.hypnoMarqueeText}>
        INNOVATE
        </span>
        <span className={styles.hypnoMarqueeText}>
        CREATE
        </span>
        <span className={styles.hypnoMarqueeText}>
        RELATE
        </span>
        <span className={styles.hypnoMarqueeText}>
        INNOVATE
        </span>
        <span className={styles.hypnoMarqueeText}>
        CREATE
        </span>
        <span className={styles.hypnoMarqueeText}>
        RELATE
        </span>
      </Marquee>
    </section>
  );
}