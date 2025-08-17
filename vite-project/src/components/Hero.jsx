import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import Navbar from './Navbar'

const textVariant = {
  hidden: { x: -80, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.8 + i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-blob"></div>
<motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: 'spring',
    stiffness: 120,
    damping: 8,
    delay: 0.1
  }}
>
  <Navbar />
</motion.div>

<motion.h1
  className="hero-title"
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: 'spring',
    stiffness: 120,
    damping: 8,
    delay: 0.3
  }}
>
  MAGGI
</motion.h1>


      <img src="./images/pea.png" alt="pea" className="pea-under-title" />

      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t1" />
      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t2" />
      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t3" />
      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t4" />

      <img src="./images/basil1.png" alt="basil1" className="bg-basil b1" />
      <img src="./images/basil1.png" alt="basil2" className="bg-basil b2" />

      <div className="bowl-container">
        <motion.img
          src="./images/bowl.png"
          alt="bowl"
          className="bowl-img"
          style={{ zIndex: 5, position: 'relative' }}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        />

        <div className="bowl-text">
          <motion.p
            custom={0}
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Hot, tasty, and ready in minutes — your quick fix for hunger without compromising on taste.
          </motion.p>
          <motion.p
            className="one-p"
            custom={1}
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Made with love, fresh ingredients, and the perfect blend of spices for that homemade touch.
          </motion.p>
          <motion.button
            className="cta-btn"
            custom={2}
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Order Now
          </motion.button>
        </div>

        <motion.div
          className="highlight-card"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        >
          <h3>Cook in Just 2 Minutes ⏱</h3>
          <p>Quick, easy, and delicious — perfect for any time of the day!</p>
          <button className="highlight-btn">Try Now</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
