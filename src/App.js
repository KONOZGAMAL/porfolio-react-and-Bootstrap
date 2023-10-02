import React from 'react'; 
import './App.css';
import NavBar from './Components/Header/NavBar';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/contact/Contact';
function App() {
  return (
    <div>
     <NavBar/>
     <Header/>
     <About/>
     <Skills/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
