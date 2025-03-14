import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import HeroDetails from './pages/herodetails/HeroDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
