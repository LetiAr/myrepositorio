import { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
//import { Box } from '@mui/system'
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';


 
const Img = styled('img')({
    width: 100,
    height:'100%',
    objectFit:'cover',
    objectPosition: 'center',
});

const About = () => {
    const [num, setNum] = useState(1);
    const incremento = () => {
        num >= 3 ? setNum(1) : setNum(num + 1);
        console.log(num);
    };
    return (
        <Grid
        sx={{
            border: 8,
            p: 6,
            pb: 0,
        }}
        item
        xs={12}
        sm={6}
        md={4}
        >

        <Img sx={{ borderRadius: 30 }} src={`${num}.jpg`}
        alt='random'/>
        <Button variant='contained' color='success' 
        onClick= {incremento}>Click on me!</Button>


<div className='cv'>
    <h1>Experiencia Personal y Laboral</h1>
    <br />
    <br />
    <br />
    <br />
    <h3>Octubre 2022-Diciembre 2022</h3>
    <p>Trabajo Freelance – Proyecto: Creación de una App Web que administra el préstamo de libros de una Biblioteca Universitaria (ApiRest; JSON 
.Server; Node.Js; HTML5; CSS; BOOTSTRAP; JAVASCRIPT)</p>

<br />
<br />
<h3>Noviembre 2022-Dicimebre 2022</h3>
<p>Trabajo Freelance – Proyecto: Creación de una aplicación 
cuyo objetivo consiste en resolver un Sistema de Venta para un Drugstore con validación de usuario (SQL Server; C#; DataGridView; ComboBox; TextBox)
</p>

<br />
<br />
<h3>Actualidad</h3>
<p>Capacitación- Bootcamp 2023 en Leniolabs (Git, Html, Css, JavaScript, UI/UX, Soft Skills, Proyecto Final)</p>

</div>





        </Grid>
    );
};


export default About

