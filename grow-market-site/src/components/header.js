// src/components/header.js

import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <StaticImage
          src="../images/G.R.o.W. Logo Version 1.png"
          alt="G.R.o.W. Farmers' Market Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <button className={styles.menuButton} onClick={toggleMenu}>
          Menu
        </button>
      </div>
      {menuOpen && (
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/signup" onClick={toggleMenu}>
                Sign Up
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/farmers-market" onClick={toggleMenu}>
                Find Farmers Market
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
