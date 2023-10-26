import style from "./Experience.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS


const Experience = () => {

  useEffect(() => {
    AOS.init({
      offset: 50, // Desplazamiento después del cual se activará la animación (en píxeles)
      duration: 1000, // Duración de la animación (en milisegundos)
      once: false, // Si se debe animar solo una vez
      easing: "ease-in-out", // Tipo de interpolación para la animación
    });
  }, []);

  return (
    <div className={style.container} id="education">
      <div className={style.info}>
        <h1 data-aos="fade-up">Educación</h1>
        <div className={style.dato}>
          <div className={style.datoName}>
            <h2 data-aos="fade-up">Estudios</h2>
          </div>

          <div className={style.datoInfo}>

          <h2 data-aos="fade-up">Henry</h2>
            <h4 data-aos="fade-up">2023</h4>
            <h3 data-aos="fade-up">Full Stack Developer</h3>
            <p data-aos="fade-up">
              Adquirí conocimientos en React, JavaScript, Redux,Node.js y
              Express para el desarrollo de aplicaciones web. Además, tengo
              experiencia en SQL y habilidades tanto en el backend como en el
              frontend.
            </p>

            <br />
            <br />

             
            <h2 data-aos="fade-up">Instituto Tecnológico de Pachuca</h2>
            <h4 data-aos="fade-up">2018 - 2022</h4>
            <h3 data-aos="fade-up">Ingeniería en Sistemas Computacionales</h3>
            <p data-aos="fade-up">
              Experto en el diseño, desarrollo y mantenimiento de sistemas
              informáticos. Amplio dominio de lenguajes deprogramación,
              bases de datos y tecnologías web. Capacidad para resolver
              problemas complejos y optimizar procesos. Apasionado por la
              innovación tecnológica y comprometido con lae xcelencia en el
              desarrollo de soluciones informáticas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
