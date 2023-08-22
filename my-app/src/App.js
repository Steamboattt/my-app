
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import CircleWithImage from './Jsx-Components/CircleWithImage';
import {motion,useInView, useAnimation,variants} from "framer-motion";
import { useEffect, useRef } from 'react';


function App() {
const mainControls = useAnimation();
const ref = useRef(null);
const isInView = useInView(ref, {once:true})

useEffect(() =>{
  if (isInView){
    mainControls.start("visible");
  
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

          <a>TEST</a>

        </motion.div>
        <h1 className='Kategorien'>Über uns</h1>

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
