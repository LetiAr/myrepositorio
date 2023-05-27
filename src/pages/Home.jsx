import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Contacto from './Contacto'
import imagen from '../assets/imagen.jpg'



export const Home = () => {

  const nombre = 'María Leticia Aráoz'
  const facultad = 'Universidad Tecnológica Nacional - FRT'
  const lenguajes = "c++, sql ,js ,html ,css ,react"

  const alumno={nombre: "María Leticia", 
  apellido:"Aráoz",
  legajo:55894,
  proyecto:'En la actualidad busco nuevos retos y formar parte de un equipo que me permita crecer y desarrollar aún más mis conocimientos y habilidades',
  celular:38133433110,
  hobby:'En mi tiempo libre me gusta disfrutar la vida con mi familia y amigos', 
  edad:'34 años', 
  familia:'Además soy mamá de tres hermosos niños, Lorenzo, Lisandro y Samuel', 
  foto_carnet:imagen, 
  estudio:'Actualmente estudiando Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional-Facultad Regional Tucumán'} 
  


  return (
    <>
  <Header/>
  <Main nombre={nombre} facultad={facultad} lenguajes ={lenguajes} alumno={alumno}/>
  <Footer />
  <Contacto />
  
  
    </>
  )
}

export default Home