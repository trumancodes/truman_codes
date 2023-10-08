import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/pages/SquareCanvas.module.scss";

const layoutProps = {
  pageMainClassName: styles.mainContainer,
  pageHeaderClassName: styles.headerWrap
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
