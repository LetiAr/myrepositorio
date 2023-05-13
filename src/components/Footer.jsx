import React from 'react'
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import {FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from 'react-bootstrap/Placeholder';



const Footer = () => {

  return (
  
    <>

    <h3>Contáctame</h3>

    <BsFillTelephoneInboundFill>Phone</BsFillTelephoneInboundFill>
    <FiMail>E-mail</FiMail>
    <FaLinkedin>LinkedIn</FaLinkedin>
    <AiFillFacebook>Facebook</AiFillFacebook>
    <FaInstagramSquare>Instagram</FaInstagramSquare>


    <Placeholder xs={12} bg="success" />
        <Placeholder xs={12} bg="danger" />
        <Placeholder xs={12} bg="warning" />
        <Placeholder xs={12} bg="info" />

</>
  )
}


 


export default Footer