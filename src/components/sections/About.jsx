import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      whileInView={{transition:{duration:3, ease:"easeInOut", delay:0.5}}}
      viewport={{once: true, amount: 1}}
      id='about' className='cardHeader text-[3rem] font-extrabold text-[#ffffffaa]'
      >
        The Story Behind
      </motion.div>
      <motion.div 
        initial={{clipPath:'inset(0 0 100% 0)'}}
        animate={{clipPath:'inset(0 0 0 0'}}
        transition={{duration:9.5, ease:'easeInOut', delay:0.5}}
        style={{overflow:'hidden', fontWeight:'thin'}}
        // onAnimationEnd={{fontWeight:'normal'}}
      className='cardBody text-slate-300'>
        In Matt Furie’s book Night Riders, Draggy, along with his friends, embarks on whimsical adventures under the moonlit sky. They ride through magical landscapes, encountering various fantastical creatures and spreading joy and camaraderie wherever they go, showcasing the power of friendship and the beauty of nighttime escapades.
        Draggy exudes a chill and carefree demeanor, often depicted as easygoing and relaxed in various situations. With a laid-back attitude and a love for life’s simple pleasures, Draggy approaches challenges with nonchalance, embodying a spirit of tranquility and contentment. Associated with themes of friendship and acceptance, Draggy symbolizes inclusivity and diversity. Its unique dragon-like appearance and friendly demeanor make it instantly recognizable and beloved among fans.
      </motion.div>
    </>
  )
}

export default About
