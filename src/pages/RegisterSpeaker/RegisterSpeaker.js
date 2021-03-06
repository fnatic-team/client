import React, { useState } from "react";
import styled from "styled-components";
import { registerUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import ReactFilestack from "filestack-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import RegisterFacebook from "../../components/facebook/RegisterFacebook"
// import RegisterGoogle from "../../components/google/RegisterGoogle"

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

function RegisterSpeaker() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        phone: "",
        category: "",
        cv: "",
    });
    const history = useHistory();
    const dispatch = useDispatch();
     const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.username === "" ||
            formData.password === "" ||
            formData.phone === "" ||
            formData.category === "" ||
            formData.cv === ""
        ) {
            Swal.fire({
                title: "Form Registrasi dan Resume Tidak Boleh Kosong",
                text: "",
                icon: "error",
            });
        } else {
            if (formData.password.length < 6) {
                Swal.fire({
                    title: "Password harus lebih dari 6 karakter",
                    text: "",
                    icon: "error",
                    // confirmButtonText: 'Cool',
                });
            } else {
                await dispatch(registerUser(formData, history));
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
                <h2 className="text-center">Daftar sebagai Speaker</h2>
                <span>
                    Sudah punya akun? <Link to="/login">Masuk</Link>
                </span>
                <br />
                <span>
                    Ingin mendaftar sebagai audience?{" "}
                    <Link to="/registrasi/audience">Klik disini</Link>{" "}
                </span>
                <hr />
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Nama Lengkap :</Label>

                    <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
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
                            onChange={handleChange}
                            value={formData.username}
                            id="username"
                            placeholder="Masukan username"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Password :</Label>
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
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
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Masukan email"
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Speaker as :</Label>
                    <select
                        className="custom-select"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="reactjs">React JS</option>
                        <option value="angular">Angular</option>
                        <option value="nodejs">Node JS</option>
                        <option value="mysql">MySql</option>
                        <option value="magento">Magento</option>
                        <option value="codeigniter">Codeigniter</option>
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
                <FormGroup style={{ textAlign: "left", display:"flex", alignItems: "center", justifyContent:"center" }}>
                    {formData.cv !== "" && <embed width="191" height="207" name="plugin" src={formData.cv} type="application/pdf"></embed>}

                </FormGroup>

                <button className="btn btn-primary btn-block">
                    Daftar sebagai Speaker
                </button>
                <br />
                {/* <RegisterFacebook/>
                <RegisterGoogle/> */}
            </RegisterWrapper>
        </div>
    );
}

export default RegisterSpeaker;
