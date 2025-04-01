"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Analytics from "./analytics/page";

export default function Home() {
  // Sidebar ka open/closed state track karne ke liye
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Active page track karne ke liye (for routing)
  const [activePage, setActivePage] = useState("home");

  // Toggle function jo sidebar ko open/close karega
  const toggleSidebar = () => {
    console.log("Sidebar toggle clicked");
    setSidebarOpen(!sidebarOpen);
  };

  // Handle navigation when sidebar items are clicked
  const handleNavigation = (page) => {
    setActivePage(page);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false); // Close sidebar on mobile after navigation
    }
  };

  // Render the correct page content based on activePage
  const renderContent = () => {
    switch (activePage) {
      case "analytics":
        return <Analytics />;
      case "overview":
        return (
          <>
            <h1>Overview</h1>
            <p>This is the overview page content.</p>
          </>
        );
      case "competitive-analysis":
        return (
          <>
            <h1>Competitive Analysis</h1>
            <p>This is the competitive analysis page content.</p>
          </>
        );
      default:
        return (
          <>
            <h1>Hey this is the main content</h1>
            <p>Welcome to GameIntel - your source for gaming intelligence.</p>
          </>
        );
    }
  };

  return (
    <div className={styles.page}>
      <Header toggleSidebar={toggleSidebar} />
      <div className={styles.main}>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          activePage={activePage}
          onNavigate={handleNavigation}
        />
        <div className={styles.content}>{renderContent()}</div>
      </div>
      {/* Overlay to close sidebar when clicked outside */}
      {sidebarOpen && (
        <div
          className={`${styles.overlay} ${styles.visible}`}
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
