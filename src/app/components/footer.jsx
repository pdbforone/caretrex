import styles from '../styles/footer.module.css'
import { ReactDOM } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter, }
  from '@fortawesome/free-brands-svg-icons'

  const Socials = [
    {
      icon: faSquareFacebook ,
      url: "www.facebook.com"
    },
    {
      icon: faSquareInstagram,
      url: "www.instagram.com"
    },
    {
      icon: faSquareXTwitter,
      url: "www.twitter.com"
    },
  ];


export default function Footer() {
    return (
    <>
    <footer className = {styles.smallFooter}>
   
        <h3>CareTrex</h3>
        

   



    </footer>
    <footer className={styles.largeFooter}>
    <div className={styles.footerContainer}>
    <div className={styles.imageHere}>CareTrex</div>
      <nav className={styles.innerNav}>
        <ul className={styles.uList}>
        <li key="home" className={styles.list}>
            <Link href='/'>Home</Link>
        </li>
          <li key="about" className={styles.list}>
            <Link href="/About">About</Link>
          </li>
          <li key="contact" className={styles.list}>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
     </nav>
     
    <nav className={styles.socialsMenu}>
     <div >
     {Socials.map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} className={styles.icon} size='2x' key={url} />
              </a>
            ))}

      </div>
      </nav>
      </div>
      </footer>
    </>
    );
}
