import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GreenHome from './pages/GreenHome'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/greenhome" element={<GreenHome />} />
            </Routes>
        </Router>
    )
}

export default App

