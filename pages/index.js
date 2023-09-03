import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import HypnoMarquee from '../components/hypnomarquee';
import EmojiCanvas from '../components/emojicanvas';

import styles from '../styles/pages/Home.module.scss';
import starsL from '../public/images/stars_l.png';
import starsR from '../public/images/stars_r.png';
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
          Hi! I'm Truman 👋,
        </h2>
        <p className={styles.textBlock}>
        an experienced engineer, leader, and consultant based in Venice Beach, California.
        With over 5 years of hands-on coding and management experience, focus on creating solutions that truly resonate.
        </p>
        <p className={styles.textBlock}>
        I blend artistic expression with pixel perfection, unlock potential, and foster inclusivity.
        </p>
        <p className={styles.textBlock}>
        Outside of coding and coaching, you might catch me leveling up in the latest video game, soaking up the sun with my dog on the beach, exploring new art and music, or nurturing my garden — both the Lego and real one.
        </p>
        <EmojiCanvas id='aboutCanvas' className={styles.aboutCanvas} width={'100%'} height={'100%'} />
      </section>
    </Layout>
  );
}