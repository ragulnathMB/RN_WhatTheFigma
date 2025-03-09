import React from 'react';
import styles from './Shop.module.css';
import seasonal from '../../assets/seas.png'
import fo2 from '../../assets/fo2.png'
import mushroom from '../../assets/mushroom.png'
import avatar from '../../assets/icon _avatar_.svg'
import globe from '../../assets/globe.svg'
import lock from '../../assets/lock.svg'
import calendar from '../../assets/calendar.svg'
import { Link } from 'react-router-dom';
import watermelon from '../../assets/watermelon.png'
import { useTheme } from '../ThemeContext/ThemeContext';
const Shop = () => {
  // Product data in array object format
  const products = [
    {
      id: 1,
      type: 'featured',
      name: 'Organic Pears',
      description: 'Handpicked premium pears, rich in flavor and nutrients',
      price: 10.99,
      image: "./shopheroimg.jpg",
      label: 'Featured product'
    },
    {
      id: 2,
      type: 'category',
      name: 'Fruits',
      description: 'A delicate blend of fresh fruits for a balanced taste',
      price: 10.99,
      image: fo2
    },
    {
      id: 3,
      type: 'category',
      name: 'Mushrooms',
      description: 'Organic mushrooms, perfect for gourmet dishes',
      price: 10.99,
      image: mushroom
    },
    
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      icon: globe,
      title: 'Sustainability First',
      description: 'Our products are ethically sourced and environmentally friendly.'
    },
    {
      id: 2,
      icon:avatar,
      title: 'Quality Assurance',
      description: 'Every product goes through a rigorous quality check before reaching you.'
    },
    {
      id: 3,
      icon: lock,
      title: 'Customer Satisfaction',
      description: 'We prioritize customer experience with reliable service and fresh produce'
    },
    {
      id: 4,
      icon: calendar,
      title: 'Fresh, Every Day ',
      description: 'We ensure daily restocking for the best and freshest selection.'
    }
  ];

  // Seasonal picks data
  const seasonalData = {
    title: 'Seasional Picks',
    description: 'A subheading for this section, as long or as short as you like',
    image: seasonal
  };

  // Best sellers data
  const bestSellersData = {
    title: 'Best Sellers',
    description: 'A subheading for this section, as long or as short as you like'
  };

  // Filter products by type
  const featuredProducts = products.filter(product => product.type === 'featured');
  const categoryProducts = products.filter(product => product.type === 'category');
  const {togglePage}=useTheme();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Shop Fresh & Organic</h1>
          <p>Explore our selection of premium local produce and organic food</p>
          <Link to={'/productDetails'} className={styles.ctaButton} onClick={()=>{togglePage('DetailPage')}} >Shop</Link>
        </div>
      </section>


      <div className={styles.mainContent}>

        <section className={styles.seasonalSection}>
          <div className={styles.sectionText}>
            <h2>{seasonalData.title}</h2>
            <p>{seasonalData.description}</p>
            <button className={styles.learnMoreBtn}>Learn More</button>
          </div>
          <div className={styles.seasonalImage}>
            <img src={seasonalData.image} alt="Seasonal products" />
          </div>
        </section>

        
        <section className={styles.seasonalSection1}>
        <div className={styles.seasonalImage}>
            <img src={watermelon} alt="Seasonal products" />
          </div>
          <div className={styles.sectionText}>
            <h2>{bestSellersData.title}</h2>
            <p>{bestSellersData.description}</p>
            <button className={styles.learnMoreBtn}>Learn More</button>
          </div>
        </section>


        <section className={styles.freshSelectionSection}>
          <h2>Fresh & Organic Selection</h2>
          
          <div className={styles.productsGrid}>
            {featuredProducts.length > 0 && (
              <div className={styles.featuredProduct}>
                <div className={styles.productImage}>
                  <img src={featuredProducts[0].image} alt={featuredProducts[0].name} />
                </div>
                <div className={styles.productInfo}>
                  <h3>{featuredProducts[0].label}</h3>
                  <p>{featuredProducts[0].description}</p>
                  <p className={styles.price}>${featuredProducts[0].price.toFixed(2)}</p>
                </div>
              </div>
            )}

    
            {categoryProducts.slice(0, 4).map(product => (
              <div key={product.id} className={styles.productCategory}>
                <div className={styles.productCategoryImage}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.productCategoryInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className={styles.price}>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Shop With Us Section */}
        <section className={styles.whyShopSection}>
          <h2>Why Shop With Us?</h2>
          
          <div className={styles.benefitsGrid}>
            {benefits.map(benefit => (
              <div key={benefit.id} className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <span><img src={benefit.icon}/></span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;