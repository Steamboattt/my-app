
import { useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import { AuthContextProvider, useAuthState } from './firebase';
import {Startseite} from "./Pages/Startseite";
import { Login } from './Pages/Login';


function App() {


  const [urlStr,setUrlStr] = useState("/");

  
  const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()


    return (
      <Route
        {...props} 
        render={routeProps =>
          isAuthenticated ? <C {...routeProps} /> : <></>
        }
      />
    )
  }
  
  const UnauthenticatedRoute =({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
    return (
     
      <Route
        {...props}
        render={routeProps =>
          
          !isAuthenticated ? <C {...routeProps} /> : <Redirect to={urlStr} />
        }
      />
    )
  }

  return ( 
    
    <AuthContextProvider>

      <Router>
      <Switch>
        <AuthenticatedRoute path="/Test" component={Startseite}></AuthenticatedRoute>
        <UnauthenticatedRoute exact path="/" component={Startseite}></UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/Login" component={Login}></UnauthenticatedRoute>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
