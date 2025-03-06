import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src="/logo-XG.svg" 
          alt="GameIntel Logo"
          width={150}
          height={40}
          priority
        />
      </div>
      <nav className={styles.nav}>
        <button className={styles.navButton}>About</button>
        <button className={styles.navButton}>Contact Us</button>
        <button className={styles.navButton}>Explore</button>
      </nav>
    </header>
  );
}