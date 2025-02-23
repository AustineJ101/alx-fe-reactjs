import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Layout from './Layout'


function App() {

  return (
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
