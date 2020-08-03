import React from "react";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterWrapper = styled.div`
    width: 600px;
    max-width: 100%;
    padding: 50px;
    margin: auto;
    height: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    .container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

function RegisterAudience() {
    return (
        <div>
            <RegisterWrapper className="login-form shadow-lg  bg-white rounded">
                <h2 className="text-center">Daftar sebagai Audience</h2>
                <span>
                    Sudah punya akun? <Link to="/login">Masuk</Link>
                </span>
                <br />
                <span>
                    Ingin mendaftar sebagai speaker?{" "}
                    <Link to="/registrasi/speaker">Klik disini</Link>{" "}
                </span>
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
                <button className="btn btn-primary btn-block">Daftar</button>
            </RegisterWrapper>
        </div>
    );
}

export default RegisterAudience;
