import React, { useState } from 'react';
import Lottie from "lottie-react";
import Test from "../Json/animation_lltrwi12.json";
import Woman from "../Json/ProfileWoman.json";
import ProfileMen from "../Json/ProfileMen.json";
import ProfileOther from "../Json/ProfileOther.json";
const ErklärungsCard = (probs) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return ( 
    <div className="Erklärungscard-Div">
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
          Mrs.
        </label>
        <label className="radio">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Mr.
        </label>
        <label className="radio">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          other
        </label>
       
      </div>
      <h3 style={{marginTop:"50px"}}>Bitte trage dein Namen ein</h3>

      <input style={{width:"50%"}} onChange={handleNameChange}  placeholder='Max Mustermann' className="input-field"></input>
    </div>

    :<></>}
      
      {currentPage === 2?
      
      <div>
        <h1>Hi {name},</h1>
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
        <a href='/Signup'>Jetzt Account erstellen</a>
        <button style={{zIndex:"4",position:"absolute", right:"0px",bottom:"0px",width:"15%",minWidth:"150px"}} className='button-87'>Weiter</button>
      </div>

      
      :<></>}

      <p className='Seitenanzahl'>{currentPage} / 3 </p>        
      <Lottie style={selectedOption === 'option2' || selectedOption === ''|| selectedOption === 'option3'?{minWidth:"350px",maxWidth:"400px"}:{minWidth:"250px"}} className='Lottie-Erklärungsdiv'  animationData={selectedOption === 'option1'?Woman:selectedOption === 'option2'?ProfileMen:ProfileOther }  />

        
    


    {currentPage != 3 && name.length >= 3?
      <div className="Pfeil-Right" onClick={nextPage}>
      <img style={{width:"100px"}} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png'></img>
       
      </div>
      :<></>
      }
      {currentPage != 1?
      <div className="Pfeil-Left" onClick={previousPage}>
       
       <img style={{ width: "100px", transform: "scaleX(-1)" }} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png' alt="Spiegelbild"></img>

      </div>:<></>}
      
    </div>
  );
};

export default ErklärungsCard;
