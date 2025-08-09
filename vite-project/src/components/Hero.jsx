import React from 'react'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="hero">
      {/* Black blob background */}
      <div className="hero-blob"></div>

      {/* Navbar */}
      <Navbar />

      {/* Title over the blob */}
      <h1 className="hero-title">MAGGI</h1>

      {/* Pea image directly under MAGGI */}
      <img src="./images/pea.png" alt="pea" className="pea-under-title" />

      {/* Background floating elements */}
      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t1" />
      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t2" />
      <img src="./images/tomato.png" alt="tomato" className="bg-tomato t3" />


      <img src="./images/basil1.png" alt="basil1" className="bg-basil b1" />
      <img src="./images/basil2.png" alt="basil2" className="bg-basil b2" />

      {/* Bowl image */}
      <img src="./images/bowl.png" alt="bowl" className="bowl-img"/>
    </div>
  )
}

export default Hero
