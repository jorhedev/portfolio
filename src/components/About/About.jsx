import style from './About.module.css'
import { NavLink } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import profile from '../../assets/aboutProfile.jpg'

const About = () =>{
    return(
        <div className={style.container}>
            <div className={style.about}>
                <img src={profile} alt="" />
                <h3>
                    Hola! soy un desarrollador Front-End apasionado de 23 años. <br /> Tengo experiencia en HTML, CSS, JavaScript y frameworks como React.
                    Comprometido, organizado y siempre en busca de soluciones creativas. <br /> Enfocado en crear experiencias de usuario excepcionales.
                </h3>
                <div className={style.botones}>
                    <NavLink to='https://github.com/jorhedev' target="_blank"><AiFillGithub/></NavLink>
                    <NavLink to='https://github.com/jorhedev'><button>Descargar CV</button></NavLink>
                    <NavLink to='https://www.linkedin.com/in/hijorhe/' target="_blank"><AiFillLinkedin/></NavLink>
                </div>
            </div>
        </div>
    )
}

export default About;