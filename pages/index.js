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
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <HypnoMarquee />
      <About />
      <Contact />
    </Layout>
  );
}