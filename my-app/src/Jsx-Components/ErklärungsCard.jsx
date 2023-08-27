import React, { useState } from 'react';
import Lottie from "lottie-react";
import Test from "../Json/animation_lltrwi12.json";
import Einführung from "../Json/Einführung.json";
const ErklärungsCard = (probs) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="Erklärungscard-Div">
      <h2>{probs.headline}</h2>
      <h3>Inhalte</h3>
      <p className='Seitenanzahl'>{currentPage} / {Einführung.length}</p>        
        <div style={{ display: 'flex', alignItems: 'center', width:"100%" }}>
            <Lottie className='Lottie-Erklärungsdiv'  animationData={require(`../Json/${Einführung[currentPage-1].svg}`)}  />
            <p  style={{width:'100%', textAlign: 'justify', flex: 1 }}>{Einführung[currentPage-1].Text}</p>
        </div>



    {currentPage != Einführung.length?
      <div className="Pfeil-Right" onClick={nextPage}>
      <img style={{width:"100px"}} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png'></img>
       
      </div>
      :<button style={{position:"absolute", right:"0px",bottom:"0px",width:"20%",minWidth:"200px"}} className='button-87'>Weiter</button>
      }
      {currentPage != 1?
      <div className="Pfeil-Left" onClick={previousPage}>
       
       <img style={{ width: "100px", transform: "scaleX(-1)" }} src='https://www.pngmart.com/files/15/Arrow-PNG-Free-Download.png' alt="Spiegelbild"></img>

      </div>:<></>}
      
    </div>
  );
};

export default ErklärungsCard;
