import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/pages/Home.module.scss';
import starsL from '../public/images/stars_l.png'
import starsR from '../public/images/stars_r.png'
import aiProfilePic from '../public/images/ai-profile.png'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.sectionWrapper}>
        <Image
          className={styles.starsL}
          src={starsL}
          alt="Stars and sparkles"
        />
        <Image
          className={styles.aiProfilePic}
          src={aiProfilePic}
          alt="AI Generated picture of me"
        />
        <Image
          className={styles.starsR}
          src={starsR}
          alt="Stars and sparkles"
        />
      </section>
    </Layout>
  );
}