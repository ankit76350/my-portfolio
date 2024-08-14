import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Hero/Hero';
import MoreAbout from './components/About/More';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moreAbout" element={<MoreAbout />} />

        </Routes>
        <Footer/>
      

      
      </>
    </Router>
  );
}

export default App;
