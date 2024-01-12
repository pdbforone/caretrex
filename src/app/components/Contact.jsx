import styles from '../styles/contactSection.module.css';
import Image from 'next/image';


export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get in touch, you'll be glad you did!
      </h2>
      <p className={styles.description}>
        Ready to book your journey or need more information? Contact CareTrex today to discuss your medical transportation needs. Our team is here to provide you with the best solutions.
      </p>
      <div className={styles.contactInfo}>
        <p><i className={`${styles.icon} ${styles.iconPhone}`}></i><a className={styles.link} href="tel:+17088550863">719-352-1389</a></p>
        <p><i className={`${styles.icon} ${styles.iconEnvelope}`}></i><a className={styles.link} href="mailto:info@caretrex.com">rexisthebest5@gmail.com</a></p>
        <p><i className={`${styles.icon} ${styles.iconLocation}`}></i>2900 Willow St. Hays KS, 67601</p>
      </div>
      <div
      className={styles.bWBox}
      >
      <Image
      src='/B+W.png'
      width={100}
      height={100}
      alt="Black and White CareTrex Logo"
      className={styles.bW}
      priority={true}
      />
      </div>
    </section>
  );
}
