import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import ProfessionalSkills from './sections/ProfessionalSkills';
import Experience from './sections/Experience';
import Curriculum from './sections/Curriculum';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="container" id="teste">
      {/* <img src={logo} alt="AirCnC"/> */}
        <Navbar />
        <Home />
        <ProfessionalSkills />
        <Experience />
        <Curriculum />
        <Contact />
    </div>
  );
}

export default App;
