import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleResponse, onFailure } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    background-color: #dd4b39;
    color: white;
`;

function LoginGoogle() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                render={(renderProps) => (
                    <Button
                        className="google"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <i class="fa fa-google fa-fw"></i> Login with Google+
                    </Button>
                )}
                buttonText="Login"
                onSuccess={googleResponse}
                onFailure={onFailure}
            />
        </div>
    );
}

export default LoginGoogle;
