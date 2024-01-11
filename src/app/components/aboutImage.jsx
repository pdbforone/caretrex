import Image from "next/image";
import styles from '../styles/aboutSection.module.css';
export function AboutImage() {
    return <Image src="/kansas.jpg" 
      alt="Photo of Kansas"
      fill
      priority={true}
      
      />
    }
