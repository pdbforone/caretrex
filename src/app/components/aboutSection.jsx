
import Image from 'next/image';
import styles from '../styles/aboutSection.module.css'; // Make sure the path is correct

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.headline}>About Our Company</h2>
      <p className={styles.missionStatement}>
        We are dedicated to delivering excellence and innovation in our services.
      </p>
      <div className={styles.teamIntroduction}>
        <Image
          src="/CareTrexAbout.png" // Replace with your image path
          alt="Our Dedicated Team"
          layout="responsive"
          width={900} // These will be used to maintain aspect ratio
          height={600}
          className={styles.teamImage}
        />
        <p className={styles.teamText}>Meet the minds behind our success.</p>
      </div>
      <p className={styles.seoBackground}>
        With years of experience in our field, we strive to lead and inspire. <a className={styles.learnMoreLink} href="/about">Learn more about our journey.</a>
      </p>
    </section>
  );
}
