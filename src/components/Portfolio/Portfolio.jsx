/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// Componente Portfolio.jsx
import styles from "./Portfolio.module.css";
import Experience from '../Experience/Experience'

import gif from '../../assets/4m3p.gif'

const Portfolio = ({ darkMode, setDarkMode }) => {

  const handleModeToggle = () => {
    if (darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.lighten}`}>
      <header>
        <h1>Jorhe.</h1>
        <button onClick={handleModeToggle}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <div className={styles.mainContent}>
        <p>Welcome to my portfolio website! I'm a passionate developer...</p>
        <img src={gif} alt="" />
        <Experience/>
      </div>
      <footer>
        <p>&copy; 2023 Jorhe</p>
      </footer>
    </div>
  );
};

export default Portfolio;
