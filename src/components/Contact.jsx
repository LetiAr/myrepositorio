import { useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  

  const consultas = [
    {id: 1, nombre: 'María Leticia', apellido: "Aráoz", email: 'araoz.leticia@gmail.com', telefono: '3813343310', mensaje: 'Deseo hacer mi Portfolio'},
  ]
  
  // const handlerChange = (e) => {
  //   setEmail(e.target.value) /*e.target.value se utiliza para acceder al valor actual del elemento del DOM que generó el evento. Por ejemplo, si tienes un campo de entrada de texto y el usuario escribe "Hola" en ese campo, e.target.value te daría la cadena de texto "Hola".*/
  // }



  const deleteConsulta = (id) => {
    const resultado = pedidos.filter(pedido=> pedido.id !== id) /* hace la constante de resultado y le da igual al array pero que no tenga el id que se le pasa*/  
    setPedidos(resultado)
  }

  const handlersubmit = (e)=>{
    e.preventDefault()
    setPedidos([...pedidos, {id, nombre, apellido, email, mensaje, telefono}]) /*el ""..."" es el operador spread sirve para copiar el array, hace una copia, en este caso copia el array de pedidos*/
    alert('Te contactaremos a la brevedad')
    setId(id + 1)
    (e.target.reset)
  }
  
  const [nombre, setNombre] = useState ("")
  const [apellido, setApellido] = useState ("")
  const [email, setEmail] = useState ("")
  const [telefono, setTelefono] = useState("")
  const [pedidos, setPedidos] = useState (consultas) 
  const [mensaje, setmensaje] = useState("")
  const [id, setId] = useState(1)



  return (
                  <body className="body_form">
                  <div className='nav2'>
                      <nav className="navbar navbar-light bg-light"></nav>
                  </div>
                  <div className="form2">
                        <h1 className='h1_form'>Contáctame:</h1>
                        <form  className="form1" onSubmit={handlersubmit}>
                               
                                
                               
                                <label htmlFor="name" className="label_form">Nombre:</label>
                                <input type="text" onChange={(e)=> setNombre(e.target.value)} required placeholder="Ingrese su Nombre"/><br />
                                <label htmlFor="Ape" className="label_form">Apellido:</label>
                                <input type="text" onChange={(e)=> setApellido(e.target.value)} placeholder="Ingrese su Apellido"/><br />
                                <label htmlFor="Mail" className="label_form">Email:</label>
                                <input type="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Ingrese su Email"/><br />
                                <label htmlFor="Tel" className="label_form">Teléfono:</label>
                                <input type="text" onChange={(e)=> setTelefono(e.target.value)} required placeholder="Ingrese su Teléfono"/><br />
                                <label htmlFor="descr" className="label_form">Mensaje:</label>
                                <input type="text"onChange={(e)=> setmensaje(e.target.value)}required /> <br />
                                <Button variant="dark" type="submit">Enviar</Button>
                        </form> 
                        <br />
                        <br />

                        <Table striped bordered hover variant="dark">
                                  <thead>
                                          <tr>
                                                <th>Id</th>
                                                <th>Nombre </th>
                                                <th>Apellido </th>
                                                <th>Email</th>
                                                <th>Mensaje</th>
                                                <th>Teléfono</th>
                                          </tr>
                                  </thead>

                                  <tbody>
                                          {pedidos.map(pedido=>
                                            <tr key={pedido.id}>
                                              <td>{pedido.id}</td>
                                              <td>{pedido.nombre}</td>
                                              <td>{pedido.apellido}</td>
                                              <td>{pedido.email}</td>
                                              <td>{pedido.mensaje}</td>
                                              <td>{pedido.telefono}</td>
                                              <td>
                                                  <Button variant="danger" onClick={()=>deleteConsulta(pedido.id)}>Eliminar</Button>
                                              </td>


                                            </tr>
                                            
                                            )}
                                  </tbody>
                        </Table>
                         
                  </div>  



                  </body>

  
  )
}

export default Contact