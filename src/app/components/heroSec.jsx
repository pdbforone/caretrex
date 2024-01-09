
import  styles from "../styles/heroSec.module.css";
import { HeroImage } from "./mobileHeroImage";
import { Button } from "./button1";
import Link from "next/link";




export default function HeroSec() {
    return (
        
    <section className={styles.sectionHero}>

    
    <h1 className={styles.heroHeader}>CareTrex</h1>
    
   
    <div className={styles.imageContainer}>
    <HeroImage className = {styles.imageLeft}/>
    </div>
    
  
  
    <p className={styles.heroP}>
    Ride with ease and expert care from CareTrex. Our team is composed entirely of licensed and enthusiastically professional caregivers. Book a safe and dependable ride today.
    </p> 
    
    <p className={`${styles.heroP} ${styles.additionalTextContent}`}>
  
 Ride with ease and expert care from CareTrex. Our team is composed entirely of licensed and enthusiastically professional caregivers. Book a safe and dependable ride today.
</p>
  
    <Link href="/Contact" className={styles.buttonContainer}>
    <Button />
    </Link>
  
    </section>
    );
};