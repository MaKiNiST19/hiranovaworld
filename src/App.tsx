import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HorizontalGallery from './components/HorizontalGallery'
import WorldSelector from './components/WorldSelector'
// import Gallery from './components/Gallery'
import Map from './components/Map'
import LifeModels from './components/LifeModels'
import LifeValueGrid from './components/LifeValueGrid'
import ScrollGallery from './components/ScrollGallery'
import CallToAction from './components/CallToAction'
import Village from './components/Village'
import NatureRetreat from './components/NatureRetreat'
// import TopImages from './components/TopImages'
// import GenelPlan from './components/GenelPlan'
import Contact from './components/Contact'
import Particles from './components/Particles'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import './App.css'

function App() {
    useSmoothScroll()

    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <HorizontalGallery />
            <LifeModels />
            <WorldSelector />
            {/* <Gallery /> */}
            <Map />
            <LifeValueGrid />
            <ScrollGallery />
            <CallToAction />
            <Village />
            <NatureRetreat />
            {/* <TopImages /> */}
            {/* <GenelPlan /> */}
            <Contact />
            <Particles />
        </div>
    )
}

export default App

