import { Link } from 'react-router-dom';
export const Login = () => {

    function handleLogoClick(){

    }

    return(
        <div className="curved">
            <h1>Login</h1>
                <Link to="/">
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254" alt="Logo"/>
                </Link>
                    
                    
                
                
            <form className="Login_Form" >
            <img style={{width:"200px"}} src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"></img>
          
         <a className="ErrorLogin"/>
          <label>Email-Adress</label>
          <input name="email" placeholder="email" type="email" />
          <label>Password</label>
          <input name="password" placeholder="password" type="password" />
          
          <button className="login-btn" type="submit">Login</button>

        </form>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path fill="white" fill-opacity="1" d="M0,256L40,234.7C80,213,160,171,240,165.3C320,160,400,192,480,202.7C560,213,640,203,720,165.3C800,128,880,64,960,48C1040,32,1120,64,1200,80C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
    )

}