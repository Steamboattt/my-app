import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion"


const Questionmark = () => {
 
  useEffect(() => {

  }, []); 


  return (
    <div >
       <motion.div animate={{scale: [0.3, 0.6, 0.5, 0.3, 0.3],rotate: [0, 0, 270, 270, 0], borderRadius: ["20%", "20%", "50%", "50%", "20%"],}} transition={{duration: 2,ease: "easeInOut",times: [0, 0.2, 0.5, 0.8, 1],repeat: Infinity,repeatDelay: 1}} style={{width:"300px",height:"300px", backgroundColor:"black"}}>
       
       </motion.div>
    </div>
  );
};

export default Questionmark;
