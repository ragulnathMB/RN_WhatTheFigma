import React from 'react';
import styles from './LandingPage.module.css';
import fstyles from './fstyles.module.css'
import cstyles from './cstyles.module.css'
import article1 from '../../assets/article1.png'
import samw from '../../assets/samw.png'
import lian from '../../assets/lian.png'
import sophial from '../../assets/sophia.png'
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import d1 from '../../assets/d1.png'
import { useTheme } from '../ThemeContext/ThemeContext';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const {togglePage}=useTheme();
  return (
    <>
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fresh & Organic Food<br />Delivered to Your Doorstep</h1>
          <p>Your one-stop destination for farm-fresh produce, exotic fruits, and high-<br/>quality organic food.</p>
         <Link to={'ArticlePage'}> <button className={styles.btnPrimary} onClick={()=>{togglePage('ArticlePage')}}>Article</button></Link>
        </div>
        <div className={styles.heroImage}>
          <img src={article1}/>
        </div>
      </div>
      
      <section className={styles.freshness}>
        <h2>Discover Freshness in Every Bite</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <div >
              <img src={f1} className={styles.categoryImage}/>
            </div>
            <h3>Handpicked Fruits</h3>
            <p>Juicy and delicious seasonal picks.</p>
          </div>
          <div className={styles.categoryCard}>
          <div >
              <img src={f2} className={styles.categoryImage}/>
            </div>
            <h3>Delicious Beverages</h3>
            <p>Taste the richness of homemade juices and natural drinks.</p>
          </div>
          <div className={styles.categoryCard}>
          <div >
              <img src={f3} className={styles.categoryImage}/>
            </div>
            <h3>Gourmet & Essentials</h3>
            <p>Premium dairy, nuts, and healthy snacks.</p>
          </div>
        </div>
      </section>
      <section className={fstyles.container}>
      <div className={fstyles.content}>
        <h2 className={fstyles.heading}>Section heading</h2>
        
        <div className={fstyles.featureItem}>
          <h3 className={fstyles.featureTitle}>Premium Quality</h3>
          <p className={fstyles.featureText}>
            We ensure the highest quality standards with farm-to-table freshness
          </p>
        </div>
        
        <div className={fstyles.featureItem}>
          <h3 className={fstyles.featureTitle}>Sustainably Sourced</h3>
          <p className={fstyles.featureText}>
            Our products come from sustainable farming practices for a healthier planet.
          </p>
        </div>
        
        <div className={fstyles.featureItem}>
          <h3 className={fstyles.featureTitle}>Fast & Reliable Delivery</h3>
          <p className={fstyles.featureText}>
            Get your groceries delivered fresh and on time, every time.
          </p>
        </div>
        
        <div className={fstyles.buttonContainer}>
          <button className={fstyles.primaryButton}>Shop Now</button>
          <button className={fstyles.secondaryButton}>Learn More</button>
        </div>
      </div>
      
      <div className={fstyles.imageContainer}>
        <img 
          src={d1} 
          alt="Fresh fruits with camera on white fabric" 
          className={fstyles.sectionImage} 
        />
      </div>
    </section>
      
      <section className={cstyles.container}>
      <h2 className={cstyles.heading}>What Our Customers Say</h2>
      
      <div className={cstyles.testimonialsGrid}>
        <div className={cstyles.testimonialCard}>
          <p className={cstyles.testimonialText}>
            Absolutely love the fresh produce and quick delivery!
          </p>
          <div className={cstyles.testimonialAuthor}>
            <div className={cstyles.authorAvatar}>
              <img src={samw} alt="Sam W." />
            </div>
            <div className={cstyles.authorInfo}>
              <p className={cstyles.authorName}>Sam W.</p>
              <p className={cstyles.authorDescription}>Description</p>
            </div>
          </div>
        </div>
        
        <div className={cstyles.testimonialCard}>
          <p className={cstyles.testimonialText}>
            Their organic fruits are the best I've ever tasted!
          </p>
          <div className={cstyles.testimonialAuthor}>
            <div className={cstyles.authorAvatar}>
              <img src={lian} alt="Liam P." />
            </div>
            <div className={cstyles.authorInfo}>
              <p className={cstyles.authorName}>Liam P.</p>
              <p className={cstyles.authorDescription}>Description</p>
            </div>
          </div>
        </div>
        
        <div className={cstyles.testimonialCard}>
          <p className={cstyles.testimonialText}>
            Highly recommend for anyone looking for quality groceries
          </p>
          <div className={cstyles.testimonialAuthor}>
            <div className={cstyles.authorAvatar}>
              <img src={sophial} alt="Sophia M." />
            </div>
            <div className={cstyles.authorInfo}>
              <p className={cstyles.authorName}>Sophia M.</p>
              <p className={cstyles.authorDescription}>Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      
    </div>
    <section className={styles.cta}>
    <div><h2>Join Us for a Healthier Lifestyle!</h2></div>
    
    <div className={styles.ctaButtons}>
      <button className={styles.btnPrimary}>Shop</button>
      <button className={styles.btnSecondary}>Learn More</button>
    </div>
  </section></>
  );
};

export default LandingPage;