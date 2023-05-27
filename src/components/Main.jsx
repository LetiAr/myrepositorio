import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'




const Main = ({alumno}) => {
  
  console.log(alumno)
  return (
    <>

          <main>
            
            <div className="card_main">
                  <div className="card text-center">
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{alumno.nombre} {alumno.apellido}</h1>
                      <p className="card-text"> {alumno.estudio}.Tengo {alumno.edad} y  {alumno.familia}. {alumno.hobby}. {alumno.proyecto}</p>
                      
                    </div>
                  </div>
            </div>

          </main>

          <h3>Mis Habilidades Técnicas</h3>

    <ListGroup>
   
        
        <ListGroup.Item variant="success">ApiRest</ListGroup.Item>
        <ListGroup.Item variant="success">Json Server</ListGroup.Item>
        <ListGroup.Item variant="success">Node.Js</ListGroup.Item>
        <ListGroup.Item variant="success">React.Js</ListGroup.Item>
        <ListGroup.Item variant="success">SQL server</ListGroup.Item>
        <ListGroup.Item variant="success">JavaScript</ListGroup.Item>
        <ListGroup.Item variant="success">HTML5</ListGroup.Item>
        <ListGroup.Item variant="success">CSS</ListGroup.Item>
        <ListGroup.Item variant="success">Bootstrap</ListGroup.Item>
        <ListGroup.Item variant="success">C#</ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default Main
