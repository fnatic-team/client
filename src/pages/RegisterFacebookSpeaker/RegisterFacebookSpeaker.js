import React, { useState,useEffect} from "react";
import styled from "styled-components";
import { registerUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import ReactFilestack from "filestack-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import RegisterFacebook from "../../components/facebook/RegisterFacebook"
import {getFacebook} from "../../redux/actions"

const RegisterWrapper = styled.form`
    width: 600px;
    max-width: 100%;
    padding: 40px;
    margin: auto;
    height: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    .container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    textarea {
        width: 100%;
        height: 200px;
    }
`;



function RegisterFacebookSpeaker() {

    
    const dataSocial = JSON.parse(localStorage.getItem("facebook"))
    
    
    const [formData, setFormData] = useState({
        name:dataSocial.name,
        email: dataSocial.email,
        username: "",
        password: dataSocial.id,
        image:dataSocial.picture.data.url,
        phone: "",
        category: "",
        cv: "",
    });

    console.log(formData)
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        for (let key in formData) {
            if (formData[key] === "") {
                Swal.fire({
                    icon: "error",
                    title: "Require",
                    text: "Upload Resume Diperlukan dan Form tidak boleh kosong",
                });
            }else if(formData.password.length <= 5){
                Swal.fire({
                    icon: "error",
                    title: "Require",
                    text: "Password Minimal 6 karakter",
                });
            }else{
                dispatch(registerUser(formData,history))
            }
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <RegisterWrapper
                onSubmit={handleSubmit}
                className="login-form shadow-lg  bg-white rounded"
            >
                <h2 className="text-center">Lengkapi Data Terlebih Dahulu</h2>
                <hr />
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Username :</Label>

                    <Input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        id="fullname"
                        placeholder="Masukan nama lengkap"
                    />
                </FormGroup>
                
                
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Speaker as :</Label>
                    <select
                        className="custom-select"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="React JS">React JS</option>
                        <option value="React Native">React Native</option>
                        <option value="Angular JS">Angular JS</option>
                    </select>
                </FormGroup>

                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Nomor Telpon :</Label>
                    <Input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        id="phone"
                        placeholder="Masukan Nomor Telpon"
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Resume :</Label>

                    <ReactFilestack
                        apikey={`${process.env.REACT_APP_API_KEY}`}
                        customRender={({ onPick }) => (
                            <div>
                                <button
                                    className="btn btn-primary btn-block"
                                    onClick={onPick}
                                >
                                    Upload Resume
                                </button>
                            </div>
                        )}
                        onSuccess={(res) =>
                            setFormData({
                                ...formData,
                                cv: res.filesUploaded[0].url,
                            })
                        }
                    />
                </FormGroup>

                <br />
                <button className="btn btn-primary btn-block">
                    Daftar sebagai Speaker
                </button>
            </RegisterWrapper>
            
        </div>
    );
}

export default RegisterFacebookSpeaker;
