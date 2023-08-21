
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import CircleWithImage from './Jsx-Components/CircleWithImage';

function App() {
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
          <TypeAnimation className='Überschrift_Animiert'sequence={['Kostenlos', 1000, 'Leicht verständlich',1000,'Qualifiziert',1000]} wrapper="span" speed={40} repeat={Infinity} cursor={true}/>
          <br></br>
       
          
        </div>

    </div>

    </div>
  );
}

export default App;
