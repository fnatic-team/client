import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    max-width: 500px;
    padding: 60px;
    margin: auto;
    height: 100%;
`;
function Login() {
    return (
        <div style={{ margin: "80px 0px 80px 0px" }}>
            <LoginWrapper className="shadow-lg container">
                <h2 className="text-center">Masuk</h2>
                <FormGroup className="text-left">
                    <Label>Email :</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your emails.."
                    />
                </FormGroup>
                <FormGroup className="text-left">
                    <Label>Password :</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password.."
                    />
                </FormGroup>

                <button className="btn btn-primary btn-block">Login</button>
                <div className="text-center pt-3 ">
                    <p>Or</p>
                </div>
                <button
                    className="btn  btn-block"
                    style={{ backgroundColor: "#3b5998", color: "white" }}
                >
                    Facebook
                </button>
                <button className="btn  btn-success btn-block">Google</button>
                {/* <Google /> */}
                <div className="text-center">
                    <br />
                    <span>
                        Belum Punya Akun? <Link to="/registrasi">Daftar</Link>
                    </span>
                </div>
            </LoginWrapper>
        </div>
    );
}
export default Login;
