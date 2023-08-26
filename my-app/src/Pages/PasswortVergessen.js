import { Link} from 'react-router-dom';

export const PasswortVergessen = () => {
    function handleLogoClick() {}

    return (
        <div className="curved" style={{minHeight: '100vh', position: 'relative' }}>
           <svg className='svg-curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path  fill="#0099ff"   d="M0,32L34.3,42.7C68.6,53,137,75,206,106.7C274.3,139,343,181,411,218.7C480,256,549,288,617,266.7C685.7,245,754,171,823,144C891.4,117,960,139,1029,165.3C1097.1,192,1166,224,1234,229.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>



            <Link to="/">
                <img
                
                    className="logo"
                    src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"
                    alt="Logo"
                />
            </Link>

            <h1 className='login-headline'>Passwort vergessen</h1>
            <form style={{alignItems:"center"}} className="Login_Form">
               
                <img
                    style={{margin:"0 auto", width: '200px'}}
                    src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"
                    alt=""
                />
             
                <a className="ErrorLogin" />
                <label>Bitte gebe deine Email-Adresse zu deinen Account ein</label>
                
                <input className="input-field" name="email" placeholder="email" type="email" />


                <button style={{marginLeft:"15%"}} className='button-87' type="submit">
                    Passwort zurücksetzen
                </button>
                <a href='/Help'>Passwort vergessen?</a>
                <a href='Signup'>Kostenlosen Account erstellen</a>
            </form>
   
            
            <div className='bottom-div' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '50px', left: '0', right: '0' }}>
    <hr className='hr-modern'></hr>
    <a >© 2023 Dreifach-Entertainment</a>
    <a>Impressum</a>
    <a >AGB</a>
    <a >Datenschutz</a>
</div>
            
            
        </div>
    );
};
