import React, { useState } from "react";
import styled from "styled-components";
import { contactUs } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import tower from "../../assets/images/offices.jpg";

const RegisterWrapper = styled.form`
    width: 600px;
    max-width: 100%;
    padding: 50px;
    margin: auto;

    height: 100%;

    .container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Image = styled.div`
    max-width: 500px;
    height: 500px;
    border-radius: 5px;
    padding-bottom: 3px;
    position: relative;
    @media (max-width: 576px) {
        img {
            display: none;
        }
    }
`;

const Teks = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
    font-family: "Oswald", sans-serif;
    text-align: left;
    position: absolute;
    left: 40px;
    top: 120px;
    color: black;
    font-size: 30px;
`;

const RegistrationWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
    }

    .container1 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .container2 {
    }
    margin-bottom: 100px;

    .col-sm-10 {
        margin-bottom: 30px;
    }
`;

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(contactUs(formData, history));
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <RegistrationWrapper>
                <div className="container-fluid">
                    <div className="row container1">
                        <div className="col-sm-12 col-center text-center ">
                            <h2>HUBUNGI KAMI</h2>
                            <p>
                                Punya sesuatu, sesuatu yang ingin kau bicarakan,
                                tentang kami? Kirimkan email kepada kami,
                                <span>atau isi formulir bagus di bawah ini.</span>
                            </p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center container2">
                        <Image>
                            <img src={tower} alt="" />
                            <Teks>
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        textAlign: "left",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Narasumber
                                </p>
                                <p
                                    style={{
                                        fontSize: "19px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                    }}
                                >
                                    Narasumber Tower
                                </p>
                                <p
                                    style={{
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                    }}
                                >
                                    Jl. Kesuksesan Kav 54-55 <br />
                                    Kebayoran Baru, Jakarta Selatan <br />
                                    DKI Jakarta
                                </p>
                                <p
                                    style={{
                                        fontSize: "15px",
                                        textAlign: "left",
                                    }}
                                >
                                    email: info@narasumber.com <br />
                                    tel: 021-897560
                                </p>
                            </Teks>
                        </Image>

                        <div className="col-sm-10 col-md-5 col-md-offset-1">
                            <RegisterWrapper
                                onSubmit={handleSubmit}
                                className="login-form shadow-sm  bg-white rounded"
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
                                        required
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
                                        required
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
                                        required
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
                                        required
                                    />
                                </FormGroup>
                                <button className="btn btn-primary btn-block">
                                    Kirim
                                </button>
                            </RegisterWrapper>
                        </div>
                    </div>
                </div>
            </RegistrationWrapper>
        </div>
    );
}

export default ContactUs;
