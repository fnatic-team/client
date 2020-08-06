import React from 'react'
import { GoogleLogin } from "react-google-login";
import {userLoginGoogle} from "../../redux/actions"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



function LoginGoogle() {
   
    const history = useHistory();
    const dispatch = useDispatch();
    const responseGoogle = (data) => {
        dispatch(userLoginGoogle(data, history));
    };
    
  
    
    return (
        <div>
            <GoogleLogin 
            className="btn btn-primary btn-block"
            clientId="906985987698-kntbrf06p25drijcr7dmc400qqj48cm4.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}/>
        </div>
    )
}

export default LoginGoogle
