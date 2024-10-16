"use client";

import React, { useState, useEffect } from 'react';
import styles from "./ProfilePage.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use useRouter from 'next/router' for route navigation
import { FaBars, FaTimes, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const ProfilePage = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false); // State to manage sidenav toggle
  const router = useRouter(); // Using Next.js router
  const [content, setContent] = useState(<h2>Welcome to Your Profile</h2>); // Default content

  useEffect(() => {
    // Dynamically update the content when the route changes
    switch (router.pathname) {
      case '/component/ProfilePage/Dashboard':
        setContent(<h2>Dashboard Content</h2>);
        break;
      case '/component/ProfilePage/MyCourses':
        setContent(<h2>My Courses Content</h2>);
        break;
      case '/component/ProfilePage/Assignments':
        setContent(<h2>Assignments Content</h2>);
        break;
      case '/component/ProfilePage/DashReviews':
        setContent(<h2>Reviews Content</h2>);
        break;
      case '/component/ProfilePage/Settings':
        setContent(<h2>Settings Content</h2>);
        break;
      case '/component/SignIn':
        setContent(<h2>Signing Out...</h2>);
        break;
      default:
        setContent(<h2>Welcome to Your Profile</h2>);
        break;
    }
  }, [router.pathname]); // Runs whenever the route changes

  return (
    <div className={styles.ProfilePage}>
      {/* Sidenav */}
      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <h2>MyLogo</h2>
        </div>
        <nav className={styles.navLinks}>
          <div className={styles.spacer}>
            <Link href="/component/ProfilePage/Dashboard">Dashboard</Link>
            <Link href="/component/ProfilePage/MyCourses">My Courses</Link>
            <Link href="/component/ProfilePage/Assignment">Assignments</Link>
            <Link href="/component/ProfilePage/DashReviews">Reviews</Link>
          </div>
          <div className={styles.spacer}> {/* Gap before settings/logout */}
            <Link href="/component/ProfilePage/Settings"><FaCog /> Settings</Link>
            <Link href="/component/SignIn"><FaSignOutAlt /> Logout</Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <button className={styles.hamburger} onClick={() => setSidenavOpen(!isSidenavOpen)}>
            {isSidenavOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1>Profile Page</h1>
        </div>
        <div className={styles.content}>
          {/* Render the dynamic content */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
