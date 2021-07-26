import {useState} from 'react';
import AuthMVP from "./AuthMVP";
import Greeting from "../site/Greeting";

const AuthLanding = () => {

    const [sessionToken, setSessionToken] = useState('');

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
      }

    return(
        <div>
            <Greeting />
            <AuthMVP updateToken={updateToken}/>
        </div>
    )
}

export default AuthLanding;