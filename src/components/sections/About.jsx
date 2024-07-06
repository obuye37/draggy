import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from '../TypeWriter'

const About = () => {
  return (
    <div className="flex flex-col ">
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      whileInView={{transition:{duration:3, ease:"easeInOut", delay:0.5}}}
      viewport={{once: true, amount: 1}}
      id='about' className='cardHeader text-[3rem] font-extrabold text-[#ffffffee]'
      >
        The Story Behind
      </motion.div>
      <Typewriter text={content} />
    </div>
  )
}

export default About


const content = `
  In Matt Furie’s book Night Riders, Draggy, along with his friends, embarks on whimsical adventures under the moonlit sky. They ride through magical landscapes, encountering various fantastical creatures and spreading joy and camaraderie wherever they go, showcasing the power of friendship and the beauty of nighttime escapades.
  Draggy exudes a chill and carefree demeanor, often depicted as easygoing and relaxed in various situations. With a laid-back attitude and a love for life’s simple pleasures, Draggy approaches challenges with nonchalance, embodying a spirit of tranquility and contentment. Associated with themes of friendship and acceptance, Draggy symbolizes inclusivity and diversity. Its unique dragon-like appearance and friendly demeanor make it instantly recognizable and beloved among fans.
`