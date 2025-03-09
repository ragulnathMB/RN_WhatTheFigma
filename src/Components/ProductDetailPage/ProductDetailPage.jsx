import React from 'react';
import styles from './ProductDetailPage.module.css';
import ogm from '../../assets/ogm.png'
import watermelon from '../../assets/watermelon.png'
import seas from '../../assets/seas.png'
import radish from '../../assets/radish.png'
import mushroom from '../../assets/mushroom.png'
import sv from '../../assets/sv.png'
import cherry from '../../assets/cherry.png'

const ProductDetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainProduct}>
        <div className={styles.productImage}>
          <img src={ogm} alt="Organic Gourmet Mushroom" />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>Organic Gourmet Mushroom</h2>
          <p className={styles.productPrice}>$10.99</p>
          <p className={styles.productDescription}>
            A premium selection of farm-fresh mushrooms, perfect for gourmet dishes and healthy meals.
          </p>
          <button className={styles.addToCartButton}>Add to cart</button>
          <p className={styles.productTags}>
            Sustainably grown | Freshly harvested | Packed with nutrients
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className={styles.relatedSection}>
        <h3 className={styles.relatedTitle}>Related products</h3>
        <div className={styles.relatedGrid}>
          {/* Product 1 */}
          <div className={styles.relatedProduct}>
            <div className={styles.relatedImageContainer}>
              <img src={seas} alt="Fresh Pears" className={styles.relatedImage} />
            </div>
            <h4 className={styles.relatedProductTitle}>Fresh Pears</h4>
            <p className={styles.relatedProductDescription}>Sweet and juicy organic pears</p>
            <p className={styles.relatedProductPrice}>$10.99</p>
          </div>

          {/* Product 2 */}
          <div className={styles.relatedProduct}>
            <div className={styles.relatedImageContainer}>
              <img src={radish} alt="Radish Greens" className={styles.relatedImage} />
            </div>
            <h4 className={styles.relatedProductTitle}>Radish Greens</h4>
            <p className={styles.relatedProductDescription}>Crisp and fresh garden radishes.</p>
            <p className={styles.relatedProductPrice}>$10.99</p>
          </div>

          {/* Product 3 */}
          <div className={styles.relatedProduct}>
            <div className={styles.relatedImageContainer}>
              <img src={watermelon} alt="Watermelon" className={styles.relatedImage} />
            </div>
            <h4 className={styles.relatedProductTitle}>Watermelon</h4>
            <p className={styles.relatedProductDescription}>Refreshing, naturally sweet watermelon.</p>
            <p className={styles.relatedProductPrice}>$10.99</p>
          </div>

          {/* Product 4 */}
          <div className={styles.relatedProduct}>
            <div className={styles.relatedImageContainer}>
              <img src={mushroom} alt="Organic Mushrooms" className={styles.relatedImage} />
            </div>
            <h4 className={styles.relatedProductTitle}>Organic Mushrooms</h4>
            <p className={styles.relatedProductDescription}>Rich in flavor, perfect for cooking</p>
            <p className={styles.relatedProductPrice}>$10.99</p>
          </div>

          {/* Product 5 */}
          <div className={styles.relatedProduct}>
            <div className={styles.relatedImageContainer}>
              <img src={sv} alt="Seasonal Vegetables" className={styles.relatedImage} />
            </div>
            <h4 className={styles.relatedProductTitle}>Seasonal Vegetables</h4>
            <p className={styles.relatedProductDescription}>Handpicked for the best quality</p>
            <p className={styles.relatedProductPrice}>$10.99</p>
          </div>

          {/* Product 6 */}
          <div className={styles.relatedProduct}>
            <div className={styles.relatedImageContainer}>
              <img src={cherry} alt="Cherry Bunch" className={styles.relatedImage} />
            </div>
            <h4 className={styles.relatedProductTitle}>Cherry Bunch</h4>
            <p className={styles.relatedProductDescription}>Sun-ripened, sweet and tangy cherries.</p>
            <p className={styles.relatedProductPrice}>$10.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;