import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Map from './components/Map'
import LifeModels from './components/LifeModels'
import LifeValueGrid from './components/LifeValueGrid'
import Village from './components/Village'
import TopImages from './components/TopImages'
import GenelPlan from './components/GenelPlan'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useLogoScroll } from './hooks/useLogoScroll'
import './App.css'

function App() {
  useSmoothScroll()
  useLogoScroll()

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Map />
      <LifeModels />
      <LifeValueGrid />
      <Village />
      <TopImages />
      <GenelPlan />
    </div>
  )
}

export default App

