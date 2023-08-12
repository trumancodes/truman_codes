import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.bgRed}>

      </section>
    </Layout>
  );
}