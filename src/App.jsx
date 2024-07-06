// import { useState } from 'react'
import { Navigation } from './components/Navigation'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Dragon from './assets/images/draggy.jpg'

import { Card, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import About from './components/sections/About'
import Tokenomics from './components/sections/Tokenomics'
import Socials from './components/sections/Socials'
import Footer from './components/Footer'
import { motion, useScroll } from 'framer-motion'



function App() {
const navigate = useNavigate()
  return (
    <>
      <Navigation />
      <motion.div 
      initial={{opacity:0, scale:1.2}}
      animate={{opacity:1, scale:1}}
      transition={{delay:0, duration:1, ease:"easeInOut"}}
      className='flex justify-center items-center flex-col'>
        <div className='flex p-10 overflow-x-hidden gap-2 w-full max-md:p-0 max-md:place-self-center max-md:justify-center max-md:items-center'>
          <div className='rounded-md border-2 border-orange-200 border-double'></div>
          <motion.img 
            initial={{scale:.8}}
            animate={{scale:1}}
            transition={{delay:0}}
            src={Dragon} alt='draggy dragon'
            className='w-[50%] h-[450px] max-md:absolute max-md:w-[80%] hover:grayscale rounded-xl'
          />
          <div className='px-10 text-justify w-[50%] max-md:w-full max-md:px-5 max-md:z-10 max-md:bg-slate-950 max-md:bg-opacity-70 flex flex-col'>
            <About />
          </div>
        </div>
        <Tokenomics />
        <Socials />
      </motion.div> 
      <Footer />
    </>
  )
}

export default App
