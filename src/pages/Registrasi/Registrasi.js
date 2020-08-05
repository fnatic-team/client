import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import speaker from "../../assets/images/speech.svg";
import audience from "../../assets/images/customer.svg";

const RegistrationWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    .divider {
        border: 1px solid black;
        width: 1px;
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

function Registrasi() {
    return (
        <RegistrationWrapper>
            <div className="container-fluid">
                <div className="row container1">
                    <div className="col-sm-12 col-center text-center">
                        <h2>Buat akun di Narasumber</h2>
                        <p>
                            Narasumber adalah website untuk mencari para publik
                            speaker yang sudah berpengalaman.
                        </p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center container2">
                    <div className="col-sm-10 col-md-5 col-md-offset-1">
                        <img src={speaker} width="200px" alt="" />
                        <div>
                            <h4>Speaker</h4>
                            <p>
                                Apakah anda public speaker yang berpengalaman?
                                Daftar sebagai Speaker.
                            </p>
                            <p></p>
                        </div>
                        <Link to="/registrasi/speaker">
                            <button className="btn btn-xs btn-primary mt-30">
                                Daftar sebagai Speaker
                            </button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                    <div className="col-sm-10 col-md-5 col-md-offset-1">
                        <img src={audience} width="200px" alt="" />
                        <div>
                            <h4>Audience</h4>
                            <p>
                                Mencari publik speaker untuk event? Daftar
                                sebagai <br />
                                Audience.
                            </p>
                            <p></p>
                        </div>
                        <Link to="/registrasi/audience">
                            <button className="btn btn-xs btn-primary mt-30">
                                Daftar sebagai Audience
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </RegistrationWrapper>
    );
}

export default Registrasi;
