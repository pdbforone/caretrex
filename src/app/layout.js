import  Header  from "./components/header"
import  Footer  from "./components/footer"
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import styles from './page.module.css';


export const metadata = {
  title: 'CareTrex',
  description: 'CareTrex.',
  charset: 'utf-8',
  
    og: {
    title: 'CareTrex',
    description: 'CareTrex',
    image: 'CareTrex Logo', // Replace with the actual image URL
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/logo192.png' },
    { rel: 'manifest', href: '/manifest.json' },
  ],
};


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
      <body className={styles.body1}>
        <Header />
        {children}
        <Footer />
      </body>
      </html>
    </>
  );
}