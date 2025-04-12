import style from "./Jobs.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS


const Jobs = () => {

    useEffect(() => {
        AOS.init({
            offset: 50, // Desplazamiento después del cual se activará la animación (en píxeles)
            duration: 1000, // Duración de la animación (en milisegundos)
            once: false, // Si se debe animar solo una vez
            easing: "ease-in-out", // Tipo de interpolación para la animación
        });
    }, []);

    return (
        <div className={style.container} id="experiencia">
            <div className={style.info}>
                <h1 data-aos="fade-up">Experiencia</h1>
                <div className={style.dato}>
                    <div className={style.datoName}>
                        <h2 data-aos="fade-up">Experiencia</h2>
                    </div>

                    <div className={style.datoInfo}>

                        <h2 data-aos="fade-up">Empresa Privada</h2>
                        <h4 data-aos="fade-up">2024 - Actualmente</h4>
                        <h3 data-aos="fade-up">Mid Full Stack Developer</h3>
                        <p data-aos="fade-up">
                        Desarrollo de aplicaciones web con enfoque full stack utilizando tecnologías como Node.js para el backend y React para el frontend. Manejo de bases de datos relacionales (MySQL) y no relacionales (MongoDB). Implementación de autenticación y autorización (JWT, OAuth), manejo de sesiones y seguridad de la información. Uso de AWS para despliegue y servicios en la nube. Aplicación de buenas prácticas en estructura de código, pruebas y control de versiones con Git. Integración de APIs, manejo eficiente de datos y trabajo colaborativo en entornos ágiles.
                        </p>

                        <br />
                        <br />


                        <h2 data-aos="fade-up">Freelance</h2>
                        <h4 data-aos="fade-up">Desde el 2018</h4>
                        <h3 data-aos="fade-up">Full Stack Developer</h3>
                        <p data-aos="fade-up">
                        Desarrollo de soluciones web a medida, desde landing pages hasta sistemas completos con backend y bases de datos. Experiencia en diseño responsivo, optimización de rendimiento y atención personalizada a clientes. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
