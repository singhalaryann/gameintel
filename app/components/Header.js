import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function Header({ toggleSidebar }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Adding direct click handlers with debugging
  const handleSidebarToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Sidebar button clicked directly');
    if (toggleSidebar) toggleSidebar();
  };
  
  const handleNavToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Nav button clicked directly');
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={styles.header}>
      {/* Simplified sidebar toggle button */}
      <button 
        className={styles.sidebarToggle} 
        onClick={handleSidebarToggle}
        type="button"
      >
        <div className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <div className={styles.logo}>
        <Image
          src="/logo-XG.svg"
          alt="GameIntel Logo"
          width={isMobile ? 100 : 150}
          height={isMobile ? 28 : 40}
          priority
        />
      </div>
      
      {/* Simplified navigation toggle button */}
      <button 
        className={styles.navToggle} 
        onClick={handleNavToggle}
        type="button"
      >
        <div className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <nav className={`${styles.nav} ${mobileNavOpen ? styles.open : ''}`}>
        <button className={styles.navButton}>About</button>
        <button className={styles.navButton}>Contact Us</button>
        <button className={styles.navButton}>Explore</button>
      </nav>
    </header>
  );
}