import React from 'react';
import styles from './Article.module.css';
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import radish from '../../assets/radish.png'
import mushroom from '../../assets/mushroom.png'
import cherry from '../../assets/cherry.png'

const Article = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>The Secret to Eating Healthy & Fresh</h1>
        
        <p className={styles.intro}>
          Learn how organic food benefits your health and the environment.
        </p>
        
        <div className={styles.mainImage}>
          <img src={article1} alt="Passion fruit with a glass of water" />
        </div>
        <div className={styles.para}>
        <p className={styles.paragraph}>
          Body text for your whole article or post. We'll put in some ipsum text to show how a 
          filled-out page might look.
        </p>
        
        <p className={styles.paragraph}>
          Excepteur efficiunt emerging, artisiti veniam enim quia carefully curated Ginioa 
          consectetur vulputate perfect minimal fed intricate Chemist. Qui intentional fresh-
          class risks ut. Particular adipisicing essential lovely garden tempur distirbed Kyoto 
          Exquisite catalogs charming Quorum City impeccable quality of life self power palliate 
          parlour Melbourne eccentric discerning. Qui weltreise adipisi, id Porter destination 
          Tada pariea salue official Helsinki essential Beams house. Zurich lovely perfect 
          sophisticated iconic.
        </p>
        
        <p className={styles.paragraph}>
          Exquisite sophisticated iconic cutting-edge laborum deserunt Aesop Aloha esse 
          bureaux cupidatat id enim. Sharp classic, the best commodo nostrud delightful. 
          Conversation aute Rocherster id. Qui sunt remarkable deserunt intricate airport 
          handsome K-pop excepteur classic esse Asia-Pacific iconic.
        </p></div>
        
        <div className={styles.imageGrid}>
          <div className={styles.gridImage}>
            <img src={article2} alt="Dried fruits and nuts" />
          </div>
          <div className={styles.gridImage}>
            <img src={article3} alt="Citrus fruits and spices" />
          </div>
        </div>
        <div className={styles.para}>
        <p className={styles.paragraph}>
          Excepteur efficiunt emerging, artisiti veniam enim cillving aute carefully curated gourme. 
          Expresso emailllie perfect minimal fed intricate. Partiuclar adipisicing lovekdla, essential 
          lovely tempur distirbed vera. Exclusive catalogs charming Quorum City impeccable aute 
          quality of life self power palliate eccecntral discerning. Qui weltreise adipisi, id 
          conversation iconic.
        </p>
        
        <p className={styles.paragraph}>
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id 
          enim. Sharp classic the best commodo nostrud delightful. Conversation aute adipi id. 
          Qui sunt remarkable deserunt intricate airport excepteur classic esse tral grit.
        </p>
      </div></div>
      
      <div className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>Related articles or posts</h2>
        
        <div className={styles.relatedGrid}>
          <div className={styles.relatedItem}>
            <div className={styles.relatedImage}>
              <img src={radish} alt="Organic vegetables" />
            </div>
            <h3 className={styles.relatedItemTitle}>5 Benefits of Organic Food</h3>
            <p className={styles.relatedItemAuthor}>Author</p>
          </div>
          
          <div className={styles.relatedItem}>
            <div className={styles.relatedImage}>
              <img src={cherry} alt="Fresh fruits" />
            </div>
            <h3 className={styles.relatedItemTitle}>How to Store Fruits Properly</h3>
            <p className={styles.relatedItemAuthor}>Author</p>
          </div>
          
          <div className={styles.relatedItem}>
            <div className={styles.relatedImage}>
              <img src={mushroom} alt="Superfoods" />
            </div>
            <h3 className={styles.relatedItemTitle}>Best Superfoods for Your Diet</h3>
            <p className={styles.relatedItemAuthor}>Author</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;