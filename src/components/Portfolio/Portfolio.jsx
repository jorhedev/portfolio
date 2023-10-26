/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// Componente Portfolio.jsx
import styles from "./Portfolio.module.css";
import Experience from "../Experience/Experience";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS

import gif from "../../assets/4dv1.gif";
import me from "../../assets/me2.png";

import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Stack from "../Stack/Stack";

const Portfolio = ({ darkMode, setDarkMode }) => {
  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({
      offset: 50, // Desplazamiento después del cual se activará la animación (en píxeles)
      duration: 1000, // Duración de la animación (en milisegundos)
      once: true, // Si se debe animar solo una vez
      easing: "ease-in-out", // Tipo de interpolación para la animación

    });
  }, []);

  return (
    <div
      className={`${styles.container} ${
        darkMode ? styles.dark : styles.lighten
      }`}
    >
      <Navbar handleModeToggle={handleModeToggle} darkMode={darkMode} />{" "}
      <div className={styles.mainContent} id="home">
        <div className={styles.header}>
          <img src={gif} alt="" />
        </div>
        <div className={`${styles.headerText}`} data-aos="fade-up">
          <h3 data-aos="fade-up">Construyendo experiencias </h3>
          <h2 data-aos="fade-up">digitales a medida.</h2>
        </div>
        <div className={`${styles.infoMe}`} data-aos="fade-up" id="about">
          <div className={`${styles.infoText}`} >
            <h1>Jorge Tolentino</h1>
            <h2>Full Stack Developer</h2>
          </div>

          <img src={me} alt="" data-aos="fade-up" />
        </div>


        <About/>
        <Stack id="technologies"/>
        <Experience/>
      </div>
      <footer>
        <p>&copy; 2023 Jorhe</p>
      </footer>
    </div>
  );
};

export default Portfolio;
