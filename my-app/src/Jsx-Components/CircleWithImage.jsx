import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion"


const CircleWithImage = () => {
  const pictures = [
    "https://images.unsplash.com/photo-1586498024141-1940debde48d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  ];
  useEffect(() => {
    const newIndex = generateRandomIndex(0, pictures.length - 1);
    setRandomIndex(newIndex);
  }, []); 

  const [randomIndex, setRandomIndex] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  
  const translateY = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  const generateRandomIndex = () => {
    const timestamp = new Date().getTime();
    const seed = timestamp / 1000;
    const randomValue = Math.floor(seed % 3);
    //console.log(randomValue)
    return randomValue;
  };
  
  

  const changeRandomIndex = () => {
    const newIndex = generateRandomIndex(0, pictures.length - 1);
    setRandomIndex(newIndex);
  };

  return (
    <div className="circle-container">
      <div className="circle">  
        <motion.img 
          style={{ translateY }} 
          src={pictures[randomIndex]}
          alt="Bild im Kreis"
          className="circle-image"
        />
      </div>
    </div>
  );
};

export default CircleWithImage;
