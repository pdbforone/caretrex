import Image from "next/image";
import styles from '../styles/heroSec.module.css';
export function HeroImage() {
    return <Image src="/Nursepatientvan.png" 
      alt="Professional nurse assisting client in a modern medical transport vehicle"
      height="250" 
      width="250"
      layout="responsive" 
      className={styles.imageLeft}/>
}