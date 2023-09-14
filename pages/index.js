import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/hero";

const HypnoMarquee = dynamic(() => import("../components/hypnomarquee"));
const About = dynamic(() => import("../components/about"));
const Contact = dynamic(() => import("../components/contact"));

export default function Home() {
  return (
    <Layout>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#6b66ff" />
        <meta name="theme-color" content="#6b66ff" />
        <meta
          name="description"
          content="Explore the dynamic portfolio of Truman, a multidisciplinary creative leader and developer based in Venice Beach. Specializing in UI/UX design, software engineering, and more. Creating digital solutions that engage and inspire."
        ></meta>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <HypnoMarquee />
      <About />
      <Contact />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9T8SYM7X1T" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-9T8SYM7X1T');
        `}
      </Script>
    </Layout>
  );
}
