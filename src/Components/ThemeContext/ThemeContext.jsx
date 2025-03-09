import { createContext, useState,useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [currPage,setCurrPage]=useState('LandingPage')

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const togglePage=(str)=>{
    setCurrPage(str);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme,currPage,togglePage }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = ()=>useContext(ThemeContext);
