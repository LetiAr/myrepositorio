import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import imagen from '../assets/imagen.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

  return (
    <>
        <Placeholder xs={12} bg="success" />
        <Placeholder xs={12} bg="danger" />
        <Placeholder xs={12} bg="warning" />
        <Placeholder xs={12} bg="info" />

    <img src={imagen} alt="mi_foto" />

    <br />
    <br />

    <h1>María Leticia Aráoz</h1>

    <br /> 
    <br />

    <h3>¡Bienvenidos a mi mundo!</h3>

    <br />
    <br />
    
    </>
  )
}

export default Header