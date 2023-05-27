import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact"






export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/components/Contact" element={<Contact/>} />
            
      </Routes>
    </BrowserRouter>


    
  )
}

export default App