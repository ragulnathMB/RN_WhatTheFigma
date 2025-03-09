import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './Components/About/About'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage/LandingPage'

import Navbar from './Components/Navbar/Navbar'
import ProductDetailPage from './Components/ProductDetailPage/ProductDetailPage'
import Shop from './Components/Shop/Shop'
import { ThemeProvider, useTheme } from './Components/ThemeContext/ThemeContext'


function App() {
  return (
    <Router>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </Router>
  )
}
import LoginSignupPage from './Components/LoginSignupPage/LoginSignupPage'

const MainComponent = () => {
  const { currPage } = useTheme();

  // Function to render correct page based on currPage state
  const renderPageContent = () => {
    switch (currPage) {
      case 'LandingPage':
        return <LandingPage />;
      case 'AboutPage':
        return <About />;
      case 'ShopPage':
        return <Shop />;
      case 'ArticlePage':
        return <Article />;
      case 'DetailPage':
        return <ProductDetailPage />;
      case 'LoginPage':
        return <LoginSignupPage/>;
      default:
        return <About />;
    }
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
      {(currPage=='LoginPage')?(<></>):(<Navbar />)}
      
      {/* Router configuration */}
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/home" replace />} 
        />
        <Route 
          path="/home" 
          element={currPage === 'LandingPage' ? <LandingPage /> : renderPageContent()} 
        />
        <Route 
          path="/about" 
          element={currPage === 'AboutPage' ? <About /> : renderPageContent()} 
        />
        <Route 
          path="/shop" 
          element={currPage === 'ShopPage' ? <Shop /> : renderPageContent()} 
        />
        <Route 
          path="/detail/:id" 
          element={currPage === 'DetailPage' ? <ProductDetailPage /> : renderPageContent()} 
        />
        <Route 
          path="/learn" 
          element={currPage === 'ArticlePage' ? <Article /> : renderPageContent()} 
        />
        <Route 
          path="/login" 
          element={currPage === 'LoginPage' ? <LoginSignupPage /> : renderPageContent()} 
        />
        <Route 
          path="*" 
          element={<Navigate to="/home" replace />} 
        />
      </Routes>
      {(currPage=='LoginPage')?(<></>):(<Footer />)}
    </div>
  );
};

export default App