"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
  FaChevronDown, // Importing the dropdown icon
} from "react-icons/fa";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.navbarMain}>
      <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          {/* Logo Section */}
          <div className={styles.navIcons}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/image/Component 1.png"
                  alt="Logo"
                  width={200}
                  height={65}
                />
              </Link>
            </div>

            {/* Hamburger and Close Icons */}
            <div className={styles.menuToggle} onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
            </div>

            {/* Navigation Items */}
            <ul
              className={`${styles.navItems} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>

              {/* About with Dropdown */}
              <li className={styles.hasDropdown}>
                About
                <FaChevronDown className={styles.dropdownIcon} />
                <ul className={styles.dropdown}>
                  <li>
                    <Link href="/pages/About" onClick={toggleMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/Blog" onClick={toggleMenu}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/Contact" onClick={toggleMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Courses with Dropdown */}
              <li className={styles.hasDropdown}>
                Courses
                <FaChevronDown className={styles.dropdownIcon} />
                <ul className={styles.dropdown}>
                  <li>
                    <Link href="/pages/Courses" onClick={toggleMenu}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/Courses" onClick={toggleMenu}>
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/Courses" onClick={toggleMenu}>
                      Graphic Design
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/pages/Blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pages/Career" onClick={toggleMenu}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Icons and Text */}
          <div className={styles.rightMenu}>
            <FaSearch className={styles.icon} />
            <Link href="/pages/Card">
              <FaRegHeart className={styles.icon} />
            </Link>
            <Link href="/">
              <FaRegUserCircle className={styles.icon} />
            </Link>
            <span className={styles.helloText}>Hello,</span>
            <span className={styles.signInText}>Sign In</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
