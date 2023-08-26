import { Link } from 'react-router-dom';

export const Login = () => {
    function handleLogoClick() {}

    return (
        <div className="curved" style={{ backgroundColor: 'blue', minHeight: '100vh', position: 'relative' }}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff"  fill-opacity="1" d="M0,32L34.3,42.7C68.6,53,137,75,206,106.7C274.3,139,343,181,411,218.7C480,256,549,288,617,266.7C685.7,245,754,171,823,144C891.4,117,960,139,1029,165.3C1097.1,192,1166,224,1234,229.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>
<h1 style={{ position: "fixed", top: "0", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>Login</h1>
            <Link to="/">
                <img
                    className="logo"
                    src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"
                    alt="Logo"
                />
            </Link>

            <form className="Login_Form">
                <img
                    style={{ width: '200px' }}
                    src="https://firebasestorage.googleapis.com/v0/b/movieapp-test-83d87.appspot.com/o/Logo3.png?alt=media&token=84657e46-c9a9-4d6d-913c-518848acf254"
                    alt=""
                />
                <a>Zu Deinen Diensten</a>
                <a className="ErrorLogin" />
                <label>Email-Adress</label>
                <input name="email" placeholder="email" type="email" />
                <label>Password</label>
                <input name="password" placeholder="password" type="password" />

                <button className="login-btn" type="submit">
                    Login
                </button>
            </form>
    
            <hr className='hr-modern'></hr>
            
        </div>
    );
};
