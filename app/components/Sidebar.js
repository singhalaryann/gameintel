import styles from '../../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <button className={styles.navButton}>
          <span className={styles.buttonText}>Analytics</span>
        </button>
        <button className={styles.navButton}>
          <span className={styles.buttonText}>Overview</span>
        </button>
        <button className={styles.navButton}>
          <span className={styles.buttonText}>Competitive Analysis</span>
        </button>
      </nav>
    </div>
  );
}