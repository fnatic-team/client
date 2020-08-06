import React,{useState} from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { useDispatch} from 'react-redux'
import {getFacebook} from '../../redux/actions'






export default function RegisterFacebook() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});

    


    const handleResponse = (data) => {
        dispatch(getFacebook(data, history));
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
                        Daftar via Facebook
                        {loading && <span>Loading...</span>}
                    </button>
                )}
            </Login>
        </FacebookProvider>
    );
}