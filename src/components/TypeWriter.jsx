import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('')
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex += 1;
      if (currentIndex === text.length-1) {
        clearInterval(intervalId);
        setIsComplete(true);
      }
    }, 50); // Adjust typing speed (milliseconds per character)

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isComplete ? 1 : 0.5 }}
      transition={{ duration: 1 }}
      style={{ fontFamily: 'monospace', fontSize: '16px', color:'#f9f290' }}
    >
      {displayedText}
    </motion.div>
  );
};

export default Typewriter;
