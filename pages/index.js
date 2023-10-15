import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/home/hero";
import styles from "../styles/pages/Home.module.scss";

const HypnoMarquee = dynamic(() => import("../components/home/hypnomarquee"));
const About = dynamic(() => import("../components/home/about"));
const Contact = dynamic(() => import("../components/home/contact"));

const layoutProps = {
  pageMainClassName: styles.mainContainer,
  pageHeaderClassName: styles.headerWrap,
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
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
