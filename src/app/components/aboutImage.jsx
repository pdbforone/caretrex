import Image from "next/image";
import styles from '../styles/aboutSection.module.css';
export function AboutImage() {
    return <Image src="/kansas.jpg" 
      alt="Photo of Kansas"
      sizes="540px"
      fill
      priority={true}
      style={{
        objectFit: 'contain'
      }}
      className={styles.mobileImage}
      />
    }
