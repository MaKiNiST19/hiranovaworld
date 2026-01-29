import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GreenHome from './pages/GreenHome'
import SuitsAndVillas from './pages/SuitsAndVillas'
import Contact from './pages/Contact'
import AboutHotel from './pages/AboutHotel'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/greenhome" element={<GreenHome />} />
                <Route path="/suits-and-villas" element={<SuitsAndVillas />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutHotel />} />
            </Routes>
        </Router>
    )
}

export default App

