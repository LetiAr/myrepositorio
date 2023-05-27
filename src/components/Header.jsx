import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import imagen from '../assets/imagen.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <>
        <Placeholder xs={12} bg="success" />
        <Placeholder xs={12} bg="danger" />
        <Placeholder xs={12} bg="warning" />
        <Placeholder xs={12} bg="info" />

        <div className='nav'>
                  <nav className="navbar navbar-light bg-light">
                  <Link to="/componetes/Contact" className='boton_contacto'>Contacto</Link>
                  </nav>

              </div>

    <img src={imagen} alt="mi_foto" />

    <br />
    <br />

    <h1>¡Bienvenidos a mi mundo!</h1>

    <br /> 
    <br />


    <br />
    <br />
    
    </>
  )
}

export default Header