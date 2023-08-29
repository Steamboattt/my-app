import { getAuth, signOut } from "firebase/auth";

export const StartseiteLoggedIn = () => {

    return(
        <div>
            <a onClick={() => signOut(getAuth())} style={{ backgroundColor: "red", width:"100%",height:"40px" }} id="logout-link" href="/login">
              Sign out
            </a>
        </div>
    );

    }