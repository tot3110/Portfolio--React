import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900'>
      
      {/* Background Layer */}
      {/* <div className='fixed top-0 -z-10 h-full w-full'></div> */}
      <div className="w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      {/* Main Content */}
      <div className='container mx-auto px-8 '>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    </div>
  )
}


export default App



