import style from "./About.module.css";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub, FiGrid } from "react-icons/fi";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 50, // Desplazamiento después del cual se activará la animación (en píxeles)
      duration: 1000, // Duración de la animación (en milisegundos)
      once: true, // Si se debe animar solo una vez
      easing: "ease-in-out", // Tipo de interpolación para la animación
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.about}>
        <h1 data-aos="fade-up">Creo en la innovación digital.</h1>
        <h2 data-aos="fade-up">
          Transformo ideas en experiencias digitales atractivas. Mi enfoque en
          la usabilidad y la estética me permite crear soluciones funcionales y
          a la vez visualmente impactantes. Trabajemos juntos para llevar tu
          proyecto al siguiente nivel en el mundo digital.
        </h2>
        <div className={style.botones} >
          <Link to="https://github.com/jorhedev" target="_blank">
          <h4 data-aos="fade-up">GitHub</h4>  <h3 data-aos="fade-up"><FiGithub /></h3> 
          </Link>
          <Link to="https://www.linkedin.com/in/hijorhe/" target="_blank">
          <h4 data-aos="fade-up">LinkedIn</h4>  <h3 data-aos="fade-up"><AiOutlineLinkedin /></h3> 
          </Link>
          <Link to="/projects">
          <h4 data-aos="fade-up">Portafolio</h4>  <h3 data-aos="fade-up"><FiGrid /></h3> 
          </Link>
          <a href="src/assets/JORGE_TOLENTINO_CV.pdf" download="JORGE_TOLENTINO_CV.pdf">
          <h4 data-aos="fade-up">Descargar CV</h4>  <h3 data-aos="fade-up"><HiOutlineFolderDownload /></h3> 
          </a>
        </div>
      </div>
    </div>
  );
};


export default About;


// href={require("../assets/cv.pdf").default} download="cv.pdf"