"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/cssNav.module.css'; 
import Link from 'next/link';

const CssNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
        setIsOpen(!isOpen);
    
  };

  return (
    <>

    <header className = {styles.smallHeader}>

    <div className= {styles.smallLogoContainer}>
    <Image src="/Logo.png" 
      width={50}
      height={50}
      alt='The Company Logo For CareTrex'
      className={styles.imageM}
      />
    </div>

    <nav className={styles.smallNav}>
      <div
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {isOpen && (
        <div className={styles.menu}>
         <ul className={styles.uList}>
          <li key="home" className={styles.list}><Link href='/'>Home</Link></li>
          <li key="about" className={styles.list}><Link href="/About">About</Link></li>
          <li key="contact" className={styles.list}><Link href="/Contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
    </header>
    
    <header className={styles.largeHeader}>
    
      <nav className={styles.largeNav}>
      <div className={styles.logoTop}>
      <Image src="/Logo.png" 
      width={100}
      height={80}
      alt='The Company Logo for CareTrex'
      className={styles.image}
      />
      </div>
        <ul className={styles.largeUlist}>
          <li>
            <Link href='/'><span>Home</span></Link>
          </li>
          <li>
            <Link href="/About"><span>About</span></Link>
          </li>
          <li>
            <Link href="/Contact"><span>Contact Us</span></Link>
          </li>
        </ul>
        <div className={styles.extraImage}>
          
        </div>
      </nav>
   </header>
    </>
  );
};

export default CssNav;
