import { useState } from 'react'

import './App.css'
import { DrakModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './section/Hero'
import About from './section/About'
import PopularAreas from './section/PopularAreas'
import Properties from './section/Properties'
import Services from './section/Services'
import Contact from './section/Contact'
import Client from './section/Client'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <DrakModeProvider>
        <Header/>
        <Hero />
        <About />
        <PopularAreas/>
        <Properties />
        <Services />
        <Client />
        <Contact />
        <Footer />

      </DrakModeProvider>
    </>
  )
}
export default App
