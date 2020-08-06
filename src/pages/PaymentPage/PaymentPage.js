import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getSpeakerDetails } from "../../redux/actions";
import ReactFilestack from "filestack-react";
import { updateUser } from "../../redux/actions";

const PaymentWrapper = styled.form`
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
        align-items: center;
    }

    .Box {
        border: 1px solid black;
        width: auto;
        height: 100px;
        padding: 30px;
    }
`;

function PaymentPage() {
    let { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const dataSpeaker = useSelector(
        (state) => state.browserSpeaker.selectedSpeaker
    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bukti_transaksi: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            {/* {dataSpeaker !== null ? ( */}
            <div>
                <PaymentWrapper
                    onSubmit={handleSubmit}
                    className="login-form shadow-lg  bg-white rounded"
                >
                    <h2 className="text-center">Payment Form</h2>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Nama :</Label>

                        <Input
                            type="text"
                            name="nama"
                            id="nama"
                            onChange={handleChange}
                            placeholder="Masukan nama lengkap"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Email :</Label>
                        <div className="container1">
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                placeholder="Masukan Email"
                            />
                        </div>
                    </FormGroup>

                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Nomor Telpon :</Label>
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Masukan Nomor Telpon"
                        />
                    </FormGroup>

                    <FormGroup style={{ textAlign: "left" }}>
                        <ReactFilestack
                            apikey={`${process.env.REACT_APP_API_KEY}`}
                            customRender={({ onPick }) => (
                                <div>
                                    <button
                                        className="btn btn-primary btn-block"
                                        onClick={onPick}
                                    >
                                        Upload Bukti Pembayaran
                                    </button>
                                </div>
                            )}
                            onSuccess={(res) =>
                                setFormData({
                                    ...formData,
                                    bukti_transaksi: res.filesUploaded[0].url,
                                })
                            }
                        />
                    </FormGroup>

                    <FormGroup style={{ textAlign: "center" }}>
                        <div className="Box">
                            Total Pembayaran : Rp. xxx.xxx
                        </div>
                    </FormGroup>

                    <FormGroup style={{ textAlign: "left" }}>
                        <div>
                            <p>
                                <br />
                                Transfer ke:
                                <br /> Account : PT.Narasumber
                                <br /> Bank Name: BCA
                                <br /> Account No: xxxxxxx
                            </p>
                        </div>
                    </FormGroup>
                    <button
                        className="btn btn-primary btn-block"
                        style={{ width: "40%", margin: "auto" }}
                    >
                        Confirm Payment
                    </button>
                </PaymentWrapper>
            </div>
            <>
                {" "}
                <div
                    className="container-fluid"
                    style={{
                        width: "3rem",
                        height: "3rem",
                        marginTop: "200px",
                    }}
                ></div>
            </>
        </>
    );
}

export default PaymentPage;
