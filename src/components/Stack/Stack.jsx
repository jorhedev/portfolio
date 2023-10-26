import style from "./Stack.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS

import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BiLogoJava, BiLogoFirebase, BiLogoFlutter, BiLogoPhp, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoNodejs, BiLogoJquery} from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress, SiPostgresql, SiSequelize, SiMysql } from "react-icons/si";
import { BsGit } from "react-icons/bs";


const Stack = () => {
  useEffect(() => {
    AOS.init({
      offset: 50, // Desplazamiento después del cual se activará la animación (en píxeles)
      duration: 1000, // Duración de la animación (en milisegundos)
      once: false, // Si se debe animar solo una vez
      easing: "ease-in-out", // Tipo de interpolación para la animación
    });
  }, []);

  return (
    <div className={style.container} id="technologies">
      <div className={style.textStack }data-aos="fade-up" >
        <h1>Tecnologías</h1>
        <p>
          Estas son algunas de las tecnologías que manejo, y estoy continuamente
          ampliando mi conocimiento. Permitiéndome diseñar y desarrollar una
          variedad de proyectos web dinámicos. Siempre estoy emocionado por
          aprender más y adoptar nuevas tecnologías en mi stack.
        </p>
      </div>
      <div className={style.stackIcons} data-aos="fade-up">
        <div className={style.iconCard}>
          <h4><AiOutlineHtml5/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><DiCss3/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoJava/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><IoLogoJavascript/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><SiTypescript/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoReact/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoRedux/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoNodejs/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><SiExpress/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><SiPostgresql/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><SiSequelize/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><SiMysql/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoJquery/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoMongodb/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BsGit/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoPhp/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoFlutter/></h4>
        </div>
        <div className={style.iconCard}>
          <h4><BiLogoFirebase/></h4>
        </div>
        
      </div>
    </div>
  );
};

export default Stack;
