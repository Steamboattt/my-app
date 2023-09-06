import React, { useState } from 'react';
import Lottie from "lottie-react";
import Test from "../Json/animation_lltrwi12.json";
import Woman from "../Json/ProfileWoman.json";
import ProfileMen from "../Json/ProfileMen.json";
import ProfileOther from "../Json/ProfileOther4.json";
import ProfileWoman2 from "../Json/ProfileWoman2.json";
import Divers from "../Json/Divers.json";
import {motion,useInView, useAnimation,variants} from "framer-motion";
import RangeSlider from './RangeSlider';

const ErklärungsCard = ({ onButtonClicked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [vorname, setVorname] = useState('');
  const [pfeilKlasse, setPfeilKlasse] = useState('Pfeil-Right-Diabled');
  const [animationState, setAnimationState] = useState("visible");

  const nextPage = () => {
   
    if (currentPage === 3){
      setAnimationState("thirdAnimation");
    }
    if(pfeilKlasse!= "Pfeil-Right-Diabled"){
    setCurrentPage(currentPage + 1);
  }
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
    if (event.target.value.length > 2){
      setPfeilKlasse('Pfeil-Right');
    }else{
      setPfeilKlasse('Pfeil-Right-Diabled');
    }
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

      <input style={{width:"50%"}} onChange={handleNameChange}  placeholder='Max' value={vorname} className="input-field"></input>




    </div>

    :<></>}
        {currentPage === 2?
        <div> 
          <h3>{vorname}, wie schätzt du dein Vorwissen ein?</h3>
          <br></br>
          <br></br>
          <RangeSlider></RangeSlider>
        </div>
    
 
:<></>}

      {currentPage === 3?
      
      <div>
 
        <h3>Hier schonmal ein kurzen Überblick über die Themen die behandelt werden</h3>
        <ul style={{fontWeight:"bold",paddingLeft:"10px"}} className="list">
        <li>Was sind Links</li>
        <li>Phishing und Betrug</li>
        </ul>
      
      </div>

      
      :<></>}
            {currentPage === 4?
      
      <div>
        <h1>Es kann losgehen</h1>
        
        <a>Du kannst dir übrigens kostenlos ein Account erstellen, falls du dein Fortschritt speichern möchtest...</a>
        <br></br>
        <br></br>
        <a className='modern-Link' href='/Signup'>kostenlosen Account erstellen</a>
        <motion.button onClick={onButtonClicked} initial={{scaleX:0}} animate={{scaleX:1}} style={{ zIndex: "4", position: "absolute", bottom: "0px", left: "-6px", right: "0", width: "98%", minWidth: "150px", height: "50px" }} className='button-87'>Weiter</motion.button>

      </div>

      
      :<></>}

      <p className='Seitenanzahl'>{currentPage} / 4 </p>    
      <motion.div variants={variants} style={{ position: "absolute", bottom: "0px", left: "50%" }} initial={{scaleX:0,y:0}} animate={animationState} >
        <Lottie style={selectedOption === 'option2' || selectedOption === ''|| selectedOption === 'option3'?{minWidth:"300px",maxWidth:"300px"}:{minWidth:"300px"}} className='Lottie-Erklärungsdiv'  animationData={selectedOption === 'option1'?ProfileWoman2:selectedOption === 'option2'?ProfileMen:Divers }  />
      </motion.div>   
        

    {currentPage != 4?

    <div className={pfeilKlasse} onClick={nextPage}>
      <img style={{width:"100px"}} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png'></img>
    </div>
      :<></>
      }
      {currentPage != 1 && currentPage < 4  ?
      <div className="Pfeil-Left" onClick={previousPage}>
       
       <img style={{ width: "100px", transform: "scaleX(-1)" }} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png' alt="Spiegelbild"></img>

      </div>:<></>}
      
    </div>
  );
};

export default ErklärungsCard;
