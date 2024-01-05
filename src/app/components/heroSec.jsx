
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
    Ride with ease and expert care at CareTrex. Our certified nurses ensure a seamless and safe journey, wherever you need to go.
    </p> 
    
    <p className={`${styles.heroP} ${styles.additionalTextContent}`}>
  Step into a world of comfort and professional care for all your transportation needs.
  At CareTrex, we specialize in providing you with a seamless journey,
   accompanied by the best medical professionals in the industry.
  Whether it’s a trip to the doctor's office or a day out,
   our certified nurses ensure your health and safety are never compromised.
</p>
  
    <Link href="/Contact" className={styles.buttonContainer}>
    <Button />
    </Link>
  
    </section>
    );
};