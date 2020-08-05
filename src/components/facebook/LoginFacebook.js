import React,{useState} from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { useDispatch} from 'react-redux'
import {userLoginFacebook} from '../../redux/actions'






export default function LoginFacebook() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});

    


    const handleResponse = (data) => {
        dispatch(userLoginFacebook(data, history));
    };

    const handleError = (error) => {
        console.log(errors);

        setErrors({ error });
    };

   

    return (
        <FacebookProvider appId="276763010319212">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <button className="btn btn-primary btn-block" onClick={handleClick}>
                        Masuk via Facebook
                        {loading && <span>Loading...</span>}
                    </button>
                )}
            </Login>
        </FacebookProvider>
    );
}