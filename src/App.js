import Navbar from "./Componet/Navbar";
import Home from "./Componet/Home";
import About from "./Componet/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from "./Componet/Menu";
import Footer from "./Componet/Footer";
import Contact from "./Componet/Contact";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        
        
        

      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
