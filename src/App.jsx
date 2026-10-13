
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Expereience from './Experience/Expereience';
import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Expereience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
