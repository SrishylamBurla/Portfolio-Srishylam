import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route, Link, Switch } from  "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <NavbarComp />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
