import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contacto from "./pages/Contacto";
import AboutPage from "./pages/AboutPage"



export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/components/Contact" element={<Contacto/>} />
            <Route path="/components/About" element ={<AboutPage/>}/>
            
      </Routes>
    </BrowserRouter>

    
  )
}

export default App