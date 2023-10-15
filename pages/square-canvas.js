import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/pages/SquareCanvas.module.scss";

const S001 = dynamic(() => import("../components/square-canvas/001-cdol"));

const layoutProps = {
  pageMainClassName: styles.mainContainer,
  pageHeaderClassName: styles.headerWrap
}

const squareSet = []

for (let i = 0; i < 1; i++){
  squareSet.push(<S001 />)
}

export default function Home() {
  return (
    <Layout {...layoutProps}>
      <Head>
        <title>{siteTitle} ⬜</title>
      </Head>
      {squareSet}
    </Layout>
  );
}
