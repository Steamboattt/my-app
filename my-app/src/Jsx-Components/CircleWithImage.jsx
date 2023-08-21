import React from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion"

const CircleWithImage = () => {
  const { scrollYProgress } = useViewportScroll();
  
  // Verwende useTransform, um den scrollYProgress in eine Wertebereich umzuwandeln, den wir verwenden möchten
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="circle-container">
      <div className="circle">
        <motion.img 
          style={{ translateY }} 
          src="https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt="Bild im Kreis"
          className="circle-image"
        />
      </div>
    </div>
  );
};

export default CircleWithImage;
