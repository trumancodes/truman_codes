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
        <h2 className={styles.introH2}>
          Hi! I'm Truman
          <Image
            className={styles.waveEmoji}
            src={waveEmoji}
            alt="Waving Hand Emoji"
          />,
        </h2>
        <p className={styles.textBlock}>
          an experienced 
          <span data-emoji="⚙️" className='emojiSpot'> engineer,</span>
          <span data-emoji="👑" className='emojiSpot'> leader,</span>
          <span data-emoji="💼" className='emojiSpot'> and consultant </span>
          based in
          <span data-emoji="🏖️" className='emojiSpot'> Venice Beach, California. </span>
          With over 5 years of hands-on 
          <span data-emoji="💻" className='emojiSpot'> coding and</span>
          <span data-emoji="📈" className='emojiSpot'> management experience,</span>
          <span data-emoji="🎯" className='emojiSpot'> focus on</span>
          <span data-emoji="💡" className='emojiSpot'> creating solutions</span>
          <span data-emoji="✨" className='emojiSpot'> that truly resonate.</span>
        </p>
        <p className={styles.textBlock}>
          I blend
          <span data-emoji="🎨" className='emojiSpot'> artistic expression</span>
          <span data-emoji="🔍" className='emojiSpot'> with pixel perfection,</span>
          <span data-emoji="🗝️" className='emojiSpot'> unlock potential,</span>
          <span data-emoji="🌈" className='emojiSpot'> and foster inclusivity.</span>
        </p>
        <p className={styles.textBlock}>
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
        <EmojiCanvas id='aboutCanvas' className={styles.aboutCanvas} width={'100%'} height={'100%'} />
      </section>
    </Layout>
  );
}