import Head from 'next/head';
import styles from '../styles/components/layout.module.scss';

export const siteTitle = 'truman.codes';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <h1 className={styles.heading}>
          truman.codes
        </h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}