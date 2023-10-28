/* eslint-disable react/prop-types */
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { GoRocket } from "react-icons/go";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS
import Navbar from "../../components/Navbar/Navbar";
import snkrs from "../../assets/snkrs.png";
import poke from "../../assets/poke.png";
import noon from "../../assets/noon.png";
import nasa from "../../assets/nasa.png";
import rick from "../../assets/rick.png";
import port from "../../assets/port.png";

const Projects = ({ darkMode }) => {
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
      <Navbar />
      <div className={styles.about}>
        <h1 data-aos="fade-up">proyectos.</h1>
        {/* <h2 data-aos="fade-up">
          Transformo ideas en experiencias digitales atractivas. Mi enfoque en
          la usabilidad y la estética me permite crear soluciones funcionales y
          a la vez visualmente impactantes. Trabajemos juntos para llevar tu
          proyecto al siguiente nivel en el mundo digital.
        </h2> */}
        <div className={styles.botones}>
          <Link to="https://github.com/jorhedev" target="_blank">
            <h4 data-aos="fade-up">GitHub</h4>{" "}
            <h3 data-aos="fade-up">
              <FiGithub />
            </h3>
          </Link>
          <Link to="https://www.linkedin.com/in/hijorhe/" target="_blank">
            <h4 data-aos="fade-up">LinkedIn</h4>{" "}
            <h3 data-aos="fade-up">
              <AiOutlineLinkedin />
            </h3>
          </Link>
          {/* <Link to="/projects">
            <h4 data-aos="fade-up">Portafolio</h4>{" "}
            <h3 data-aos="fade-up">
              <FiGrid />
            </h3>
          </Link> */}
          <a href="src/assets/JORGE_TOLENTINO_CV.pdf" download="JORGE_TOLENTINO_CV.pdf">
            <h4 data-aos="fade-up">Descargar CV</h4>{" "}
            <h3 data-aos="fade-up">
              <HiOutlineFolderDownload />
            </h3>
          </a>
        </div>
        <div className={styles.proContain}>
          <div className={styles.cardPro}>
            <img src={snkrs} alt="" />
            <div className={styles.cardContent}>
              <h3>SNKRS</h3>
              <p>Descripción detallada o contenido adicional aquí.</p>
              <div className={styles.botones}>
                <Link
                  to="https://github.com/jorhedev/snkrs_front"
                  target="_blank"
                >
                  <h4>GitHub</h4>{" "}
                  <h3>
                    <FiGithub />
                  </h3>
                </Link>
                <Link to="https://snkrs-front.vercel.app" target="_blank">
                  <h4>Deploy</h4>{" "}
                  <h3>
                    <GoRocket />
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardPro}>
            <img src={poke} alt="" />
            <div className={styles.cardContent}>
              <h3>POKEAPI</h3>
              <p>Descripción detallada o contenido adicional aquí.</p>
              <div className={styles.botones}>
                <Link
                  to="https://github.com/jorhedev/pokemon_jorhe"
                  target="_blank"
                >
                  <h4>GitHub</h4>{" "}
                  <h3>
                    <FiGithub />
                  </h3>
                </Link>
                <Link to="https://deploypokemon.vercel.app" target="_blank">
                  <h4>Deploy</h4>{" "}
                  <h3>
                    <GoRocket />
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardPro}>
            <img src={noon} alt="" />
            <div className={styles.cardContent}>
              <h3>NOON</h3>
              <p>Descripción detallada o contenido adicional aquí.</p>
              <div className={styles.botones}>
                <Link
                  to="https://github.com/jorhedev/noon_landing"
                  target="_blank"
                >
                  <h4>GitHub</h4>{" "}
                  <h3>
                    <FiGithub />
                  </h3>
                </Link>
                <Link
                  to="https://noon-landing-three.vercel.app"
                  target="_blank"
                >
                  <h4>Deploy</h4>{" "}
                  <h3>
                    <GoRocket />
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardPro}>
            <img src={nasa} alt="" />
            <div className={styles.cardContent}>
              <h3>NASA-API</h3>
              <p>Descripción detallada o contenido adicional aquí.</p>
              <div className={styles.botones}>
                <Link to="https://github.com/jorhedev/nasaAPI" target="_blank">
                  <h4>GitHub</h4>{" "}
                  <h3>
                    <FiGithub />
                  </h3>
                </Link>
                <Link to="https://nasa-api-chi.vercel.app" target="_blank">
                  <h4>Deploy</h4>{" "}
                  <h3>
                    <GoRocket />
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardPro}>
            <img src={rick} alt="" />
            <div className={styles.cardContent}>
              <h3>Rick & Morty</h3>
              <p>Descripción detallada o contenido adicional aquí.</p>
              <div className={styles.botones}>
                <Link
                  to="https://github.com/jorhedev/rick_and_morty"
                  target="_blank"
                >
                  <h4>GitHub</h4>{" "}
                  <h3>
                    <FiGithub />
                  </h3>
                </Link>
                {/* <Link to="https://www.linkedin.com/in/hijorhe/" target="_blank">
                  <h4>Deploy</h4>{" "}
                  <h3>
                    <GoRocket />
                  </h3>
                </Link> */}
              </div>
            </div>
          </div>
          <div className={styles.cardPro}>
            <img src={port} alt="" />
            <div className={styles.cardContent}>
              <h3>Portfolio</h3>
              <p>Descripción detallada o contenido adicional aquí.</p>
              <div className={styles.botones}>
                <Link
                  to="https://github.com/jorhedev/portfolio"
                  target="_blank"
                >
                  <h4>GitHub</h4>{" "}
                  <h3>
                    <FiGithub />
                  </h3>
                </Link>
                <Link
                  to="https://portfolio-jorhedev.vercel.app"
                  target="_blank"
                >
                  <h4>Deploy</h4>{" "}
                  <h3>
                    <GoRocket />
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h1 data-aos="fade-up">Trabajemos juntos.</h1>
        {/* <h2>México</h2> */}
        <h3 data-aos="fade-up">hijorhe@gmail.com</h3>
        <h3 data-aos="fade-up">+52 771 288 7372</h3>
      </footer>
      <p className={styles.footerP}>&copy; 2023 Jorhe</p>
    </div>
  );
};

export default Projects;
