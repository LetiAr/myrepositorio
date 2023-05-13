import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const Main = () => {

  return (
    <>
     <div className='conteiner'>
      <div className='div_main'>
        <h2 className='h2_main'>Acerca de mi</h2>
        
        <p>Programadora joven y proactiva. Actualmente estudiando Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional-Facultad Regional Tucumán. Busco nuevos retos y formar parte de un equipo que me permita crecer y  desarrollar aún más mis conocimientos y habilidades</p>
        </div>
        </div>

    <br />
    <br />

    <h3>Mis Habilidades Técnicas</h3>

    <ListGroup>
   
        
        <ListGroup.Item variant="success">ApiRest</ListGroup.Item>
        <ListGroup.Item variant="success">Json Server</ListGroup.Item>
        <ListGroup.Item variant="success">Node.Js</ListGroup.Item>
        <ListGroup.Item variant="success">React.Js</ListGroup.Item>
        <ListGroup.Item variant="success">SQL server</ListGroup.Item>
        <ListGroup.Item variant="success">avaScript</ListGroup.Item>
        <ListGroup.Item variant="success">HTML5</ListGroup.Item>
        <ListGroup.Item variant="success">CSS</ListGroup.Item>
        <ListGroup.Item variant="success">Bootstrap</ListGroup.Item>
        <ListGroup.Item variant="success">C#</ListGroup.Item>
      </ListGroup>
    
</>

  )
}


  
export default Main
