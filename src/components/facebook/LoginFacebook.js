import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { facebookResponse, onFailure } from "../../redux/actions";
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
    background-color: #3b5998;
    color: white;
`;

export default function LoginFacebook() {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_API_KEY}
                autoLoad={false}
                fields="name,email,picture"
                callback={facebookResponse}
                render={(renderProps) => (
                    <Button onClick={renderProps.onClick}>
                        <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                    </Button>
                )}
            />
        </div>
    );
}
