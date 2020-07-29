import React from "react";
import Facebook from "../../components/Facebook";
import {FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 60px;
  margin: auto;
  height: 100%;
  border: 1px black solid;
`;

function Login() {
  return (
    <div>
      <LoginWrapper>
        <h2 className="text-center">Sign In</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            disabled
            placeholder="Your emails.."
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            disabled
            placeholder="Your password.."
          />
        </FormGroup>
        <button className="btn btn-primary btn-block">Login</button>
        <div className="text-center pt-3 ">
          <p>Or</p>
        </div>
        <button className="btn  btn-block" style={{backgroundColor:"#3b5998", color:"white"}}>Facebook</button>
        <button className="btn  btn-success btn-block">Google</button>
        {/* <Google /> */}
        <div className="text-center">
            <br/>
         <span>Belum Punya Akun? Sign Up</span>
        </div>
      </LoginWrapper>
    </div>
  );
}

export default Login;
