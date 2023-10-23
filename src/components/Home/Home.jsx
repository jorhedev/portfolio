import style from './Home.module.css'

import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

const Home = () =>{

    return(
        <div className={style.container}>
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
        </div>
    )
}

