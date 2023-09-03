import Head from 'next/head';
import styles from '../styles/components/header.module.scss';

export const siteTitle = '</truman.codes>';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.textLogo}>
        &lt;/truman.codes&gt;
      </h1>
      <menu>
        About Work People Contact
      </menu>
    </header>
  );
}