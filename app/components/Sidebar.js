import styles from '../../styles/Sidebar.module.css';

export default function Sidebar({ isOpen, toggleSidebar, activePage, onNavigate }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Close button - small screens par dikhega */}
      <button className={styles.closeButton} onClick={toggleSidebar}>
        ✕
      </button>
      
      <nav className={styles.nav}>
        <button 
          className={`${styles.navButton} ${activePage === 'analytics' ? styles.active : ''}`}
          onClick={() => onNavigate('analytics')}
        >
          <span className={styles.buttonText}>Analytics</span>
        </button>
        <button 
          className={`${styles.navButton} ${activePage === 'overview' ? styles.active : ''}`}
          onClick={() => onNavigate('overview')}
        >
          <span className={styles.buttonText}>Overview</span>
        </button>
        <button 
          className={`${styles.navButton} ${activePage === 'competitive-analysis' ? styles.active : ''}`}
          onClick={() => onNavigate('competitive-analysis')}
        >
          <span className={styles.buttonText}>Competitive Analysis</span>
        </button>
      </nav>
    </div>
  );
}