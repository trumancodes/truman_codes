import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import Layout, { siteTitle } from '../components/layout';
import HypnoMarquee from '../components/hypnomarquee';
import EmojiCanvas from '../components/emojicanvas';

import styles from '../styles/pages/Home.module.scss';
import starsL from '../public/images/stars_l.png';
import starsR from '../public/images/stars_r.png';
import waveEmoji from '../public/images/wave.png';
import aiProfilePic from '../public/images/ai-profile.png';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${styles.heroSection} ${styles.sectionWrapper}`}>
        <Image
          className={`${styles.stars} ${styles.starsL}`}
          src={starsL}
          alt="Stars and sparkles"
        />
        <Image
          className={styles.aiProfilePic}
          src={aiProfilePic}
          alt="AI Generated picture of me"
        />
        <Image
          className={`${styles.stars} ${styles.starsR}`}
          src={starsR}
          alt="Stars and sparkles"
        />
      </section>
      <HypnoMarquee />
      <section className={`${styles.aboutInfoSection} ${styles.sectionWrapper}`}>
        <h2 className={styles.aboutH2}>
          Hi! I'm Truman
          <Image
            className={styles.aboutWave}
            src={waveEmoji}
            alt="Waving Hand Emoji"
          />,
        </h2>
        <p className={styles.aboutText}>
          an experienced 
          <span data-emoji="⚙️" className='emojiSpot'> engineer,</span>
          <span data-emoji="👑" className='emojiSpot'> leader,</span>
          <span data-emoji="💼" className='emojiSpot'> and consultant </span>
          based in
          <span data-emoji="🏖️" className='emojiSpot'> Venice Beach, California. </span>
          With over 5 years of hands-on 
          <span data-emoji="💻" className='emojiSpot'> coding and</span>
          <span data-emoji="📈" className='emojiSpot'> management experience,</span>
          <span data-emoji="🎯" className='emojiSpot'> I focus on</span>
          <span data-emoji="💡" className='emojiSpot'> creating solutions</span>
          <span data-emoji="✨" className='emojiSpot'> that truly resonate.</span>
        </p>
        <p className={styles.aboutText}>
          I blend
          <span data-emoji="🎨" className='emojiSpot'> artistic expression</span>
          <span data-emoji="🔍" className='emojiSpot'> with pixel perfection,</span>
          <span data-emoji="🗝️" className='emojiSpot'> unlock potential,</span>
          <span data-emoji="🌈" className='emojiSpot'> and foster inclusivity.</span>
        </p>
        <p className={styles.aboutText}>
          <span data-emoji="💻" className='emojiSpot'> Outside of coding</span>
          <span data-emoji="📋" className='emojiSpot'> and coaching, </span>
          you might catch me
          <span data-emoji="🎮" className='emojiSpot'> leveling up in the latest video game,</span>
          <span data-emoji="🌞" className='emojiSpot'> soaking up the sun with</span>
          <span data-emoji="🐕" className='emojiSpot'> my dog on the beach,</span>
          <span data-emoji="🖼️" className='emojiSpot'> exploring new art</span>
          <span data-emoji="🎵" className='emojiSpot'> and music,</span>
          <span data-emoji="🌱" className='emojiSpot'> or nurturing my garden —</span>
          <span data-emoji="🧱" className='emojiSpot'> both the Lego</span>
          <span data-emoji="🌻" className='emojiSpot'> and real one.</span>
        </p>
        <button className={styles.resumeButton}>
        <svg class={styles.resumeSVG} xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512">
          <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"/>
        </svg>
          Download Resume
        </button>
        <EmojiCanvas id='aboutCanvas' className={styles.aboutCanvas} width={'100%'} height={'100%'} />
      </section>
      <section className={`${styles.contactSection} ${styles.sectionWrapper}`}>
        <span className={styles.contactFrame}>
          <h2 className={styles.contactH2}>Want to work together?</h2>
          <button className={styles.copyButton}>
            hello@truman.codes
            <span className={styles.copyText}>(click to copy)</span>
          </button>
        </span>
        <button className={styles.shuffleButton}>
          <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>
        </button>
      </section>
    </Layout>
  );
}