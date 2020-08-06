import React from 'react'
import { GoogleLogin } from "react-google-login";
import {getGoogle} from "../../redux/actions"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



function RegisterGoogle() {
   
    const history = useHistory();
    const dispatch = useDispatch();
    const responseGoogle = (data) => {
        dispatch(getGoogle(data, history));
    };
    
  
    
    return (
        <div>
            <GoogleLogin 
            className="btn btn-primary btn-block"
            clientId="906985987698-kntbrf06p25drijcr7dmc400qqj48cm4.apps.googleusercontent.com"
            buttonText="Daftar dengan Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}/>
        </div>
    )
}

export default RegisterGoogle
