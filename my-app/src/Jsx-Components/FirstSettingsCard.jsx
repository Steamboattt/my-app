import React, { useState } from 'react';
import Lottie from "lottie-react";
import Test from "../Json/animation_lltrwi12.json";
import Woman from "../Json/ProfileWoman.json";
import ProfileMen from "../Json/ProfileMen.json";
import ProfileOther from "../Json/ProfileOther4.json";
import ProfileWoman2 from "../Json/ProfileWoman2.json";
import {motion,useInView, useAnimation,variants} from "framer-motion";
const ErklärungsCard = ({ onButtonClicked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [vorname, setVorname] = useState('');
  const [animationState, setAnimationState] = useState("visible");

  const nextPage = () => {
   
    if (currentPage === 2){
      setAnimationState("thirdAnimation");
    }

    setCurrentPage(currentPage + 1);
   
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };



  const variants = {
    open: { scaleX: 0 }, 
    visible: { scaleX: 1 },
    thirdAnimation: { opacity: 1, scaleX: 1,y:-35 }
  };
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNameChange = (event) => {
    setVorname(event.target.value);
  }
  return ( 
    <div  className="Erklärungscard-Div">
          {currentPage === 1?
          <div className="container">
      <h1>Über dich</h1>

      <div className="radio-group">
        <label className="radio">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Frau
        </label>
        <label className="radio">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Herr
        </label>
        <label className="radio">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Divers
        </label>
       
      </div>
      <h3 style={{marginTop:"50px"}}>Vorname</h3>

      <input style={{width:"50%"}} onChange={handleNameChange}  placeholder='Max' className="input-field"></input>

    </div>

    :<></>}
      
      {currentPage === 2?
      
      <div>
        <h1>Hi {vorname},</h1>
        <h3>Hier schonmal ein kurzen Überblick über die Themen die behandelt werden</h3>
        <ul style={{fontWeight:"bold",paddingLeft:"10px"}} className="list">
        <li>Was sind Links</li>
        <li>Phishing und Betrug</li>
        </ul>
      
      </div>

      
      :<></>}
            {currentPage === 3?
      
      <div>
        <h1>Es kann losgehen</h1>
        <h3>Du kannst dir übrigens kostenlos ein Account erstellen, falls du dein Fortschritt speichern möchtest...</h3>
        <a href='/Signup'>Jetzt kostenlos Account erstellen</a>
        <motion.button onClick={onButtonClicked} initial={{scaleX:0}} animate={{scaleX:1}} style={{ zIndex: "4", position: "absolute", bottom: "0px", left: "-6px", right: "0", width: "98%", minWidth: "150px", height: "50px" }} className='button-87'>Weiter</motion.button>

      </div>

      
      :<></>}

      <p className='Seitenanzahl'>{currentPage} / 3 </p>    
      <motion.div variants={variants} style={{ position: "absolute", bottom: "0px", left: "50%" }} initial={{scaleX:0,y:0}} animate={animationState} >
        <Lottie style={selectedOption === 'option2' || selectedOption === ''|| selectedOption === 'option3'?{minWidth:"300px",maxWidth:"300px"}:{minWidth:"300px"}} className='Lottie-Erklärungsdiv'  animationData={selectedOption === 'option1'?ProfileWoman2:selectedOption === 'option2'?ProfileMen:ProfileOther }  />
      </motion.div>   
        

    {currentPage != 3 && vorname.length >= 3?
      <div className="Pfeil-Right" onClick={nextPage}>
      <img style={{width:"100px"}} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png'></img>
       
      </div>
      :<></>
      }
      {currentPage != 1 && currentPage < 3  ?
      <div className="Pfeil-Left" onClick={previousPage}>
       
       <img style={{ width: "100px", transform: "scaleX(-1)" }} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png' alt="Spiegelbild"></img>

      </div>:<></>}
      
    </div>
  );
};

export default ErklärungsCard;
