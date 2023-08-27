import '../App.css';
import ErklärungsCard from '../Jsx-Components/ErklärungsCard';
import { Link} from 'react-router-dom';

export const KostenloseVariante = () => {



  return (
    <div className="kostenloseVariante">
       <Link className="Link" to="/">
              <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"></img>
        </Link>
      <ErklärungsCard headline="Einführung">
 
        
      </ErklärungsCard>


    </div>
  );
}

