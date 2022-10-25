import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Home from "./pages/Home"
import About from './pages/About'
import FicheLogement from './pages/FicheLogement'
import Error from './pages/Error'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// ==============================================================

const App = () => {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)

    }, 3000)

  }, [])

  return loader ? (<Loader />
  ) : (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="FicheLogement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
