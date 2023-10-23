import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1>Experiencia</h1>
        <div className={style.dato}>
          <div className={style.datoName}>
            <h2>Estudios</h2>
          </div>

          <div className={style.datoInfo}>

          <h2>Henry</h2>
            <h4>2023</h4>
            <h3>Full Stack Developer</h3>
            <p>
              Adquirí conocimientos en React, JavaScript, Redux,Node.js y
              Express para el desarrollo de aplicaciones web. Además, tengo
              experiencia en SQL y habilidades tanto en el backend como en el
              frontend.
            </p>

            <br />
            <br />

             
            <h2>Instituto Tecnológico de Pachuca</h2>
            <h4>2018 - 2022</h4>
            <h3>Ingeniería en Sistemas Computacionales</h3>
            <p>
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
