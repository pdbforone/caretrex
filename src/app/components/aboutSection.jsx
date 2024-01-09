
import Image from 'next/image';
import styles from '../styles/aboutSection.module.css'; // Make sure the path is correct

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.headline}>About Our Company</h2>
      <p className={styles.missionStatement}>
       CareTrex LLC is a mobile health solutions company serving Western Kansas and beyond!
         
      </p>
      <div className={styles.teamIntroduction}>
        <Image
          src="/kansas.jpg" // Replace with your image path
          alt="Our Dedicated Team"
          layout="responsive"
          width={900} // These will be used to maintain aspect ratio
          height={600}
          className={styles.teamImage}
        />
        <p className={styles.teamText}> Birthed in 2023, we aim to serve the underserved aging and disabled population that is often isolated and/or forgotten.</p>
      </div>
      <p className={styles.seoBackground}>
        <a className={styles.learnMoreLink} href="/about">Learn more about our journey.</a>
      </p>
    </section>
  );
}
