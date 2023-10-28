/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Ul = styled.ul`
flex-flow: column nowrap;
background-color: #000;
position: fixed;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 300px;
transition: transform 0.3s ease-in-out;
list-style: none;
margin-top: 50px;
z-index: 999;


  li {

    padding-bottom: 20px;
    margin-bottom: 40px; /* Agrega un margen inferior entre los elementos de la lista */

  }

  a{
    margin-top: 60px;
    font-size: 30px;
    font-family: MontBold;

  }





  
`;
import { useLocation } from 'react-router-dom';

const RightNav = ({ open }) => {
  const location = useLocation();

  return (
    <Ul open={open}>
      {location.pathname === '/projects' ? (
        <li><a href="/#home">Home</a></li>
      ) : (
        <div>
          <li><a href="/#home">Home</a></li>
          <li><a href="/#about">Sobre Mi</a></li>
          <li><a href="/#technologies">Tecnologías</a></li>
          <li><a href="/#education">Educación</a></li>
          <li><a href="/projects">Portafolio</a></li>
        </div>
      )}
    </Ul>
  )
}

export default RightNav