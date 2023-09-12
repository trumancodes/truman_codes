import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import HypnoMarquee from '../components/hypnomarquee';
import About from '../components/about';
import Contact from '../components/contact';

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#6b66ff" />
        <meta name="theme-color" content="#6b66ff" />
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <HypnoMarquee />
      <About />
      <Contact />
    </Layout>
  );
}