
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import nachdenklichAnimation from "./Json/man-thinking-something.json";
import me from "./Json/animation_llp8xi8a.json"
import {motion,useInView, useAnimation,variants} from "framer-motion";
import { useEffect, useRef , useState} from 'react';
import {BasisCurve} from "react-svg-curve";
import CircleWithImage from './Jsx-Components/CircleWithImage';
import salesman from "./Json/business-salesman.json";

function App() {
const mainControls = useAnimation();
const slideControls = useAnimation();
const ref = useRef(null);
const isInView = useInView(ref, {once:false})
const data = [
  [0, 50],
  [50, 75],
  [75, 80],
  [100, 40],
  [125, 30],
  [150, 60],
  [175, 50]
];
useEffect(() =>{
  if (isInView){
    mainControls.start("visible");
    slideControls.start("visible");
  }
},[isInView]);


  return (
    <div className="App">
   
      <div className='first-Div'>
        <a className='einloggen'>Einloggen</a>
        
        <img className='menue' src='https://www.svgrepo.com/show/520763/hamburger.svg'></img>
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"></img>
       

        <CircleWithImage></CircleWithImage>
  

        <div className='Überschrift-Div'>
          <a className='Überschrift'>Mache jetzt </a>
          <br></br>
          <TypeAnimation className='Überschrift_Animiert'sequence={['Kostenlos', 1000,'ohne Anmeldung',1000, 'Leicht verständlich',1000,'Qualifiziert',1000]} wrapper="span" speed={40} repeat={Infinity} cursor={true}/>
          <br></br>
          <a className='Überschrift'>dein Internet-Führerschein </a>
        </div>

    </div>
    <div className='untergrund-Div'>

    </div>

  
    <div className='Angebote-Div'>


      <div className='Angebot-Div'>
        <h3>Kostenlose Variante</h3>
        <nav>
        <div className='column1'>
          <a>❌Alle Themen</a>
          <a>❌Individualisierbar</a>
        </div>
        <div className='column1'>
          <a>✔️Anmeldung</a>
          <a>✔️Grundkenntnisse</a>
        </div>
        <div className='column1'>
          <a>❌Speichern</a>
          <a>❌Alle Features</a>
        </div>
        </nav>
        <button className='button-87'>Jetzt starten</button>
      </div>

      <div className='Angebot-Div'>
        <h3>Kostenpflichtige Variante</h3>
        <nav>
        <div className='column1'>
          <a>✔️Alle Themen</a>
          <a>✔️Individualisierbar</a>
        </div>
        <div className='column1'>
          <a>✔️Anmeldung</a>
          <a>✔️Grundkenntnisse</a>
        </div>
        <div className='column1'>
          <a>✔️Speichern</a>
          <a>✔️Alle Features</a>
        </div>
        </nav>

        <button className='button-87'>Jetzt starten</button>
      </div>
      <div ref={ref}  className='Erklärungs-Div'>


        <motion.div variants={{hidden:{opacity: 0, y:75}, visible: {opacity: 1, y:0},}}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay: 0.25}}
        >

      


                  <h1 className='Kategorien'>Was ist das überhaupt?</h1>
                  <div style={{ display: 'flex', alignItems: 'center', width:"90%" }}>
                    <Lottie style={{ width: '20%' }} animationData={salesman} />
                    <p style={{ marginLeft: '10px', textAlign: 'center', flex: 1 }}>Unsere Webseite bietet eine umfassende Ressource zum Thema Internet-Führerschein, konzipiert insbesondere für neue Internetnutzer, darunter ältere Erwachsene und Kinder. Unser Hauptziel ist es, Ihnen dabei zu helfen, die essenziellen Grundkenntnisse über die sichere Nutzung des Internets zu erlernen. In der heutigen digitalen Welt ist es von entscheidender Bedeutung, sich der potenziellen Gefahren bewusst zu sein und zu wissen, wie man sich davor schützen kann. Unsere gut strukturierten Lektionen vermitteln auf verständliche Weise, wie Sie Ihre persönlichen Daten schützen, vertrauenswürdige Online-Quellen identifizieren und sich vor betrügerischen Aktivitäten im Internet absichern können. Ihre neu erworbenen Kenntnisse können Sie in einem abschließenden Test unter Beweis stellen, der Ihnen die Möglichkeit gibt, Ihr Verständnis zu überprüfen. Bei erfolgreichem Abschluss des Tests erhalten Sie ein Zertifikat, das Ihre Bemühungen um die Entwicklung eines sicheren und sachkundigen Umgangs mit dem Internet würdigt. Wir laden Sie ein, unsere Webseite zu erkunden und Ihre Reise zum Internet-Führerschein zu beginnen.</p>
                  </div>


        </motion.div>


        <h1 className='Kategorien'>Über mich</h1>
                  <div style={{ display: 'flex', alignItems: 'center',}}>
                    <Lottie style={{ width: '20%' }} animationData={me} />
                    <p style={{ marginLeft: '10px', textAlign: 'center', flex: 1 }}>TestText</p>
                  </div>
      </div>

    </div>
     

    <div className="Impressum-Div">
    <img className="logo-Impressum" src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"></img>
  <nav>
    <div className="column">
      <a href="#">Impressum</a>
      <a href="#">Über uns</a>
      <a href="#">Hilfe</a>
    </div>
    <div className="column">
      <a href="#">Team</a> 
      <a href="#">AGB</a>
      <a href="#">häufig gestellte Fragen </a>
    </div>
  </nav>
</div>


    </div>
  );
}

export default App;
