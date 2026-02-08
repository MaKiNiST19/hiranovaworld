import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GreenHome from './pages/GreenHome'
import SuitsAndVillas from './pages/SuitsAndVillas'
import Suits from './pages/Suits'
import Villas from './pages/Villas'
import Contact from './pages/Contact'
import AboutHotel from './pages/AboutHotel'
import Facility from './pages/Facility'
import LifeAtHiraNova from './pages/LifeAtHiraNova'
import Restaurant from './pages/Restaurant'
import Location from './pages/Location'
import Gallery from './pages/Gallery'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/greenhome" element={<GreenHome />} />
                <Route path="/suits-and-villas" element={<SuitsAndVillas />} />
                <Route path="/suits" element={<Suits />} />
                <Route path="/villas" element={<Villas />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutHotel />} />
                <Route path="/facility" element={<Facility />} />
                <Route path="/life-at-hiranova" element={<LifeAtHiraNova />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/location" element={<Location />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    )
}

export default App

