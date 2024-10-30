import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {
  return (
    <div className='complete-project'>
    <div className='app'>
      <Navbar></Navbar>

    </div>
          <Hero></Hero>
          <AboutUs></AboutUs>
  </div>
  )
}

export default App
