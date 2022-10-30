import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { About } from './components/content/About';
import { Portfolio } from './components/content/Portfolio';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<p>Oh NO! Page not found!</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
