import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Services from './components/Services/Services'
// import About from './components/About/About'
// import WhyChoose from './components/WhyChoose/WhyChoose'
import Home from './pages/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    {/* <Home/> */}
    </Routes>
  )
}

export default App
