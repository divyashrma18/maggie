import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Slider.css';
const slides = [
  {
    image: '/images/maggie1.png',
    name: 'Maggi 2-Minute Noodles',
    desc: `The iconic Maggi that started it all.  
Ready in just two minutes, it’s the ultimate snack for anytime hunger strikes.  
Smooth, springy noodles with that familiar taste you grew up loving.  
A quick fix that’s always a comfort.`,
    nutrition: { energy: 299, protein: 5.6, carbohydrate: 44.5, sugars: 1.5, fibre: 2.5, fat: 11, sodium: 820.6 }
  },
  {
    image: '/images/maggie2.png',
    name: 'Maggi Special Masala',
    desc: `A richer, spicier twist for the flavor adventurer.  
Packed with a secret blend of aromatic spices for a mouthwatering kick.  
Each bite bursts with bold, layered flavors that keep you coming back.  
Perfect for those who like life a little extra.`,
    nutrition: { energy: 320, protein: 6.2, carbohydrate: 48.1, sugars: 2.0, fibre: 3.0, fat: 12, sodium: 810.0 }
  },
  {
    image: '/images/maggie3.png',
    name: 'Maggi Veggie Masala',
    desc: `A wholesome twist with the goodness of vegetables in every bite.  
Bright, colorful bits of veggies blend perfectly with the signature Maggi masala.  
Light yet satisfying, this is comfort food you can feel good about.  
Ideal for a quick, hearty lunch or snack.`,
    nutrition: { energy: 280, protein: 5.0, carbohydrate: 42.0, sugars: 1.0, fibre: 2.2, fat: 10, sodium: 800.0 }
  },
  {
    image: '/images/maggie4.png',
    name: 'Maggi Chicken Noodles',
    desc: `Tender noodles infused with delicious chicken flavor.  
A rich, savory broth that warms you from the first spoonful.  
Boosted with protein to keep you energized through the day.  
A must-have for every non-veg noodle lover.`,
    nutrition: { energy: 310, protein: 5.8, carbohydrate: 46.0, sugars: 1.8, fibre: 2.7, fat: 11.5, sodium: 815.0 }
  }
];


const Slider = () => {
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const timerRef = useRef(null);

  const { ref: sliderRef, inView } = useInView({
    threshold: 0.3, // 20% visible
    triggerOnce: true
  });

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const getPositionClass = (i) => {
    if (i === index) return 'center';
    if (i === (index - 1 + slides.length) % slides.length) return 'left';
    if (i === (index + 1) % slides.length) return 'right';
    return 'hidden';
  };

  useEffect(() => {
    setShowCard(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowCard(true), 500);
    return () => clearTimeout(timerRef.current);
  }, [index]);

  const { nutrition } = slides[index];

  return (
    <div className="slider" ref={sliderRef}>
      {/* Animated heading */}
      <motion.h1
        className="range"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        OUR RANGE
      </motion.h1>

      <button className="arrow left-arrow" onClick={prevSlide}>❮</button>

   <div className="slider-data">
   <div className="slider-wrapper">
      <AnimatePresence mode="wait">
  {slides.map((slide, i) => 
    i === index && (
      <motion.img
        key={index}
        src={slide.image}
        alt={`maggie-${i}`}
        className="maggie-img"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    )
  )}
</AnimatePresence>


        <div className={`nutrition-card ${showCard ? 'visible' : ''}`}>
          <h3>Nutrition Value</h3>
          <table>
            <tbody>
              <tr><td>Energy (kcal)</td><td>{nutrition.energy}</td></tr>
              <tr><td>Protein (g)</td><td>{nutrition.protein}</td></tr>
              <tr><td>Carbohydrate (g)</td><td>{nutrition.carbohydrate}</td></tr>
              <tr><td>Total Sugars (g)</td><td>{nutrition.sugars}</td></tr>
              <tr><td>Fibre (g)</td><td>{nutrition.fibre}</td></tr>
              <tr><td>Total Fat (g)</td><td>{nutrition.fat}</td></tr>
              <tr><td>Sodium (mg)</td><td>{nutrition.sodium}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="slider-right">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1>{slides[index].name}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{slides[index].desc}</p>
      
      <motion.button
        className="try-now-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        TRY NOW
      </motion.button>
    </motion.div>
  </AnimatePresence>
</div>


   </div>

      <button className="arrow right-arrow" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
