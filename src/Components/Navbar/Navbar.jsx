import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useTheme } from '../ThemeContext/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currPage, togglePage } = useTheme();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine if we're on ShopPage to apply white text styling
  const isShopPage = currPage === "ShopPage";
  
  // Dynamically determine link styling based on current page
  const getLinkClassName = (mobile = false) => {
    if (mobile) {
      return isShopPage ? `${styles.mobileNavLink} ${styles.whiteText}` : styles.mobileNavLink;
    } else {
      return isShopPage ? `${styles.navLink} ${styles.whiteText}` : styles.navLink;
    }
  };
  
  // Dynamically determine login button styling based on current page
  const getLoginClassName = (mobile = false) => {
    if (mobile) {
      return isShopPage ? `${styles.mobileLoginButton} ${styles.shopPageLogin}` : styles.mobileLoginButton;
    } else {
      return isShopPage ? `${styles.loginButton} ${styles.shopPageLogin}` : styles.loginButton;
    }
  };

  return (
    <header className={`${styles.header} ${isShopPage ? styles.shopPageHeader : ''}`}>
      <div className={styles.container}>
        <h1 className={`${styles.logo} ${isShopPage ? styles.whiteText : ''}`}>FreshHarvest</h1>
        
        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {["ArticlePage", "ShopPage", "DetailPage", "AboutPage"].includes(currPage) && (
              <li className={styles.navItem}>
                <Link to="/home" className={getLinkClassName()} onClick={() => togglePage("LandingPage")}>Home</Link>
              </li>
            )}
            
            {["LandingPage", "ArticlePage", "ShopPage", "DetailPage"].includes(currPage) && (
              <li className={styles.navItem}>
                <Link to="/about" className={getLinkClassName()} onClick={() => togglePage("AboutPage")}>About</Link>
              </li>
            )}
            
            {["LandingPage", "ArticlePage", "DetailPage", "AboutPage"].includes(currPage) && (
              <li className={styles.navItem}>
                <Link to="/shop" className={getLinkClassName()} onClick={() => togglePage("ShopPage")}>Shop</Link>
              </li>
            )}
            
            {["ShopPage"].includes(currPage) && (
              <li className={styles.navItem}>
                <Link to="/learn" className={getLinkClassName()} onClick={() => togglePage("ArticlePage")}>Learn More</Link>
              </li>
            )}
            
            {["ShopPage", "LandingPage", "ArticlePage", "DetailPage", "AboutPage"].includes(currPage) && (
              <li className={styles.navItem}>
                <Link to="/login" className={getLoginClassName()} onClick={() => togglePage("LoginPage")}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`${styles.hamburger} ${isShopPage ? styles.whiteHamburger : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu Modal */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <button 
            className={styles.closeButton} 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className={styles.mobileNavList}>
            {["ArticlePage", "ShopPage", "DetailPage", "AboutPage"].includes(currPage) && (
              <li className={styles.mobileNavItem}>
                <Link to="/home" className={getLinkClassName(true)} onClick={() => {togglePage("LandingPage"); toggleMenu();}}>Home</Link>
              </li>
            )}
            
            {["LandingPage", "ArticlePage", "ShopPage", "DetailPage"].includes(currPage) && (
              <li className={styles.mobileNavItem}>
                <Link to="/about" className={getLinkClassName(true)} onClick={() => {togglePage("AboutPage"); toggleMenu();}}>About Us</Link>
              </li>
            )}
            
            {["LandingPage", "ArticlePage", "DetailPage", "AboutPage"].includes(currPage) && (
              <li className={styles.mobileNavItem}>
                <Link to="/shop" className={getLinkClassName(true)} onClick={() => {togglePage("ShopPage"); toggleMenu();}}>Shop</Link>
              </li>
            )}
            
            {["ShopPage"].includes(currPage) && (
              <li className={styles.mobileNavItem}>
                <Link to="/learn" className={getLinkClassName(true)} onClick={() => {togglePage("ArticlePage"); toggleMenu();}}>Learn More</Link>
              </li>
            )}
            
            {["ShopPage", "LandingPage", "ArticlePage", "DetailPage", "AboutPage"].includes(currPage) && (
              <li className={styles.mobileNavItem}>
                <Link to="/login" className={getLoginClassName(true)}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Overlay for when menu is open */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Navbar;