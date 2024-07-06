import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const MovingItemsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when section is 50% in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      y: custom.y,
      x: custom.x,
      transition: { duration: 1 },
    }),
  };

  return (
    <section ref={ref} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
        }}
      >
        <motion.div
          custom={{ y: -100, x: -100 }}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
        <motion.div
          custom={{ y: -100, x: 100 }}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'blue',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
        <motion.div
          custom={{ y: 100, x: -100 }}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
        <motion.div
          custom={{ y: 100, x: 100 }}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'yellow',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      </motion.div>
    </section>
  );
};

export default MovingItemsSection;
