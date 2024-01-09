import Image from "next/image"
import styles from "../styles/aboutSection.module.css"

export function aboutImage() {
<Image
alt="A photo of the countryside in Kansas"
src="/kansas.jpg" // Replace with your image path
sizes='540px'
priority={true}
style={{
  objectFit: 'contain'
}}
className={styles.teamImage}
/>
};