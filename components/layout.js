import Head from 'next/head';
import Header from './header.js'
import styles from '../styles/components/layout.module.scss';

export const siteTitle = '</truman.codes>';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <footer>
      </footer>
    </>
  );
}