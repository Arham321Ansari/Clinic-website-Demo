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
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    {/* <Home/> */}
    </Routes>
  )
}

export default App
