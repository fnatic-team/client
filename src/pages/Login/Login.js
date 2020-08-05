import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../redux/actions";
import { Link } from "react-router-dom";
import LoginFacebook from "../../components/facebook/LoginFacebook"


import { FormGroup, Label, Input } from "reactstrap";

const LoginWrapper = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    max-width: 500px;
    padding: 60px;
    margin: auto;
    height: 100%;
`;

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

    const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(formData, history));
  };

    return (
        <div style={{ margin: "80px 0px 80px 0px" }}>
            <LoginWrapper onSubmit={handleSubmit} className="shadow-lg container">
                <h2 className="text-center">Masuk</h2>
                <FormGroup className="text-left">
                    <Label>Email :</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
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
                          onChange={handleChange}
                        value={formData.password}
                        placeholder="Your password.."
                    />
                </FormGroup>

                <button className="btn btn-primary btn-block">Login</button>
                <div className="text-center pt-3 ">
                    <p>Or</p>
                </div>
                <LoginFacebook/>
               
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
