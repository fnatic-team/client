import React from "react";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";

const RegisterWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  margin: auto;
  height: 100%;
  border: 1px black solid;
  margin-top: 50px;
  .container1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  textarea {
    width: 100%;
    height: 200px;
  }
`;

function RegisterSpeaker() {
  return (
    <div>
      <RegisterWrapper className="login-form shadow  bg-white rounded">
        <h2 className="text-center">Daftar Sebagai Speaker</h2>
        <span>Sudah punya akun? Masuk</span>
        <br />
        <span>Ingin mendaftar sebagai audience? Klik disini </span>
        <hr />
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Nama Lengkap :</Label>

          <Input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Masukan nama lengkap"
          />
        </FormGroup>
        <div className="container1">
          <FormGroup style={{ textAlign: "left" }}>
            <Label>Username :</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Masukan username"
            />
          </FormGroup>
          <FormGroup style={{ textAlign: "left" }}>
            <Label>Password :</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Masukan password"
            />
          </FormGroup>
        </div>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Email :</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Masukan email"
          />
        </FormGroup>
        <FormGroup style={{ textAlign: "left" }}>
          <Label>Nomor Telpon :</Label>
          <Input
            type="text"
            name="phonenumber"
            id="phonenumber"
            placeholder="Masukan Nomor Telpon"
          />
        </FormGroup>
        <FormGroup>
          <textarea />
        </FormGroup>
        <button className="btn btn-primary btn-block">Daftar</button>
      </RegisterWrapper>
    </div>
  );
}

export default RegisterSpeaker;
