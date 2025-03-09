import React, { useState } from 'react';
import styles from './LoginSignupPage.module.css';
import facebook from '../../assets/XMLID_17_.svg';
import google from '../../assets/google.svg'
import mail from '../../assets/mail.svg'
import key from '../../assets/key.svg'
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeContext';

const LoginSignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {togglePage}=useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Log In</h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <img src={mail} className={styles.inputIcon}/>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <img src={key} className={styles.inputIcon}/>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            <Link to={'LandingPage'}>
            <button  type="submit" className={styles.loginButton} onClick={()=>{togglePage('LandingPage')}}>
              Log in
            </button></Link>
          </form>
          
          <div className={styles.forgotPassword}>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          
          <div className={styles.divider}>
            <span>or</span>
          </div>
          
          <div className={styles.socialLogin}>
            <button className={styles.googleButton}>
              <img src={google}/>
              <span>Google</span>
            </button>
            
            <button className={styles.facebookButton}>
            <img src={facebook}/>
              <span>Facebook</span>
            </button>
          </div>
          
          <div className={styles.signupPrompt}>
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.groceryGraphic}>
          
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;