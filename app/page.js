import Image from 'next/image';
import styles from '../styles/page.module.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <h1>Hey this is the main content</h1>
          <p>Welcome to GameIntel - your source for gaming intelligence.</p>
        </div>
      </div>
    </div>
  );
}