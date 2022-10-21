import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import FicheItem from './pages/FicheItem'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

// ==============================================================

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="FicheItem/:id" element={<FicheItem />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App
