import React from 'react';
import styles from './About.module.css';
import profileImg from '../../assets/pimage.png'

const About = () => {
  return (
    <div className={styles.container}>
     <div className={styles.wrapper}>
     <div className={styles.aboutSection}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>About</h1>
          <h2 className={styles.subheading}>Subheading for description or instructions</h2>
          <p className={styles.bodyText}>
            Body text for your whole article or post. We'll put in some lorem 
            ipsum to show how a filled-out page might look.
          </p>
          <p className={styles.bodyText}>
            Excepteur efficient emerging, minim veniam anim aute carefully 
            curated Ginza conversation exquisite perfect nostrud nisi 
            intricate Content. Qui international first-class nulla ut. Punctual 
            adipisicing, essential lovely queen tempor eiusmod irure. 
            Exclusive izakaya charming Scandinavian impeccable aute 
            quality of life soft power pariatur Melbourne occaecat discerning. 
            Qui wardrobe aliquip, et Porter destination Toto remarkable 
            officia Helsinki excepteur Basset hound. Zürich sleepy perfect 
            consectetur.
          </p>
        </div>
      </div>
      <div className={styles.contactSection}>
        <h2 className={styles.contactHeading}>Contact me</h2>
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>First name</label>
              <input
                type="text"
                id="firstName"
                className={styles.input}
                placeholder="Jane"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Last name</label>
              <input
                type="text"
                id="lastName"
                className={styles.input}
                placeholder="Smitherton"
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="email@janefakedomain.net"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Your message</label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Enter your question or message"
              rows="6"
            ></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
     </div>
      <div className={styles.imageContainer}>
          <img 
            src={profileImg}
            alt="Profile" 
            className={styles.profileImage} 
          />
        </div>

      
    </div>
  );
};

export default About;