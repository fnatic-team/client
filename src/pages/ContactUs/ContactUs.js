import React, { useState } from "react";
import styled from "styled-components";
import { registerUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterWrapper = styled.form`
    width: 600px;
    max-width: 100%;
    padding: 50px;
    margin: auto;
    margin-top: 100px;
    height: 100%;
    margin-bottom: 100px;
    .container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    console.log(formData);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(registerUser(formData, history));
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <RegisterWrapper
                onSubmit={handleSubmit}
                className="login-form shadow  bg-white rounded"
            >
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Nama Lengkap :</Label>

                    <Input
                        type="text"
                        name="name"
                        id="fullname"
                        onChange={handleChange}
                        value={formData.fullname}
                        placeholder="Masukan nama lengkap"
                    />
                </FormGroup>

                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Email :</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Masukan email"
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Subjek :</Label>
                    <Input
                        type="text"
                        name="subject"
                        id="subject"
                        onChange={handleChange}
                        value={formData.subject}
                        placeholder="Masukan Subject"
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Pesan:</Label>
                    <Input
                        type="textarea"
                        name="message"
                        id="message"
                        onChange={handleChange}
                        value={formData.message}
                        placeholder="Masukan Pesan"
                    />
                </FormGroup>
                <button className="btn btn-primary btn-block">Daftar</button>
            </RegisterWrapper>
            <RegisterWrapper
                onSubmit={handleSubmit}
                className="login-form shadow  bg-white rounded"
            >
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Nama Lengkap :</Label>

                    <Input
                        type="text"
                        name="name"
                        id="fullname"
                        onChange={handleChange}
                        value={formData.fullname}
                        placeholder="Masukan nama lengkap"
                    />
                </FormGroup>

                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Email :</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Masukan email"
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Subjek :</Label>
                    <Input
                        type="text"
                        name="subject"
                        id="subject"
                        onChange={handleChange}
                        value={formData.subject}
                        placeholder="Masukan Subject"
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Pesan:</Label>
                    <Input
                        type="textarea"
                        name="message"
                        id="message"
                        onChange={handleChange}
                        value={formData.message}
                        placeholder="Masukan Pesan"
                    />
                </FormGroup>
                <button className="btn btn-primary btn-block">Daftar</button>
            </RegisterWrapper>
        </div>
    );
}

export default ContactUs;
