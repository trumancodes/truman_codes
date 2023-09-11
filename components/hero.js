import Image from 'next/image';
import starsL from '../public/images/stars_l.png';
import starsR from '../public/images/stars_r.png';
import aiProfilePic from '../public/images/ai-profile.png';
import styles from '../styles/components/hero.module.scss';

export default function Hero({className, ...props}) {

  return (
    <section
      className={`${styles.heroSection} ${className}`}
      {...props}
    >
      <Image
        className={`${styles.stars} ${styles.starsL}`}
        src={starsL}
        alt="Stars and sparkles"
      />
      <Image
        className={styles.aiProfilePic}
        src={aiProfilePic}
        alt="AI Generated picture of me"
      />
      <Image
        className={`${styles.stars} ${styles.starsR}`}
        src={starsR}
        alt="Stars and sparkles"
      />
    </section>
  );
}