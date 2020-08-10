import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import ReactFilestack from "filestack-react";
import {
    updateStatusTransaksiPembayaran,
    getTransactionDetail,
} from "../../redux/actions";

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
        text-align: left;
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
    const dispatch = useDispatch();
    const dataTransaction = useSelector(
        (state) => state.transaction.transactionDetail
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateStatusTransaksiPembayaran(id, formData));
    };

    useEffect(() => {
        dispatch(getTransactionDetail(id));
        // eslint-disable-next-line
    }, []);

    const [formData, setFormData] = useState({
        bukti_transaksi: "",
        jumlah_bayar: 0,
        status_transaksi: "ACARA SEDANG BERLANGSUNG",
    });

    // eslint-disable-next-line no-extend-native
    String.prototype.localIDR = function () {
        return Number(this).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 2,
        });
    };
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            {dataTransaction !== null && (
                <div>
                    <PaymentWrapper
                        onSubmit={handleSubmit}
                        className="login-form shadow-lg  bg-white rounded"
                    >
                        <h2 className="text-center mb-3">Payment Form</h2>

                        <FormGroup style={{ textAlign: "left" }}>
                            <div className="container1">
                                <span className="w-50">1. Nama Acara :</span>
                                <span>{dataTransaction[0].nama_acara}</span>
                            </div>
                            <div className="container1">
                                <span className="w-50">
                                    2. Nama Penyelenggara :
                                </span>
                                <span>{dataTransaction[0].penyelenggara}</span>
                            </div>
                            <div className="container1">
                                <span className="w-50">3. Nama Audience :</span>
                                <span>{dataTransaction[0].name} </span>
                            </div>
                            <div className="container1">
                                <span className="w-50">4. Nama Speaker : </span>
                                <span>{dataTransaction[0].speakerID.name}</span>
                            </div>

                            <div className="container1">
                                <span className="w-50">5. Alamat Acara :</span>
                                <span>{dataTransaction[0].alamat} </span>
                            </div>
                        </FormGroup>
                        <FormGroup style={{ textAlign: "left" }}>
                            <Label>Jumlah yang Dibayarkan :</Label>
                            <Input
                                type="number"
                                name="jumlah_bayar"
                                id="jumlah_bayar"
                                onChange={handleChange}
                                value={formData.jumlah_bayar}
                                placeholder="Masukan Jumlah Yang Dibayarkan"
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
                                        bukti_transaksi:
                                            res.filesUploaded[0].url,
                                    })
                                }
                            />
                        </FormGroup>
                        <FormGroup
                            style={{
                                textAlign: "left",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {formData.bukti_transaksi !== "" && (
                                <img
                                    style={{ width: "150px", height: "150px" }}
                                    src={formData.bukti_transaksi}
                                    alt={formData.image}
                                />
                            )}
                        </FormGroup>

                        <FormGroup style={{ textAlign: "center" }}>
                            <div className="Box">
                                {dataTransaction !== null &&
                                    `Total Yang Harus Dibayarkan ${`${
                                        dataTransaction[0].durasi *
                                        dataTransaction[0].speakerID.fee
                                    }
                                        `.localIDR()}`}
                            </div>
                        </FormGroup>

                        <FormGroup style={{ textAlign: "left" }}>
                            <span>Transfer ke:</span>
                            <div className="d-flex w-100 justify-content-between">
                                <div>
                                    <div>
                                        <span>Account : PT.Narasumber</span>
                                        <br />
                                        <span>Bank Name: BCA</span>
                                        <br />
                                        <span>Account No: 8574452432</span>
                                        <br />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>Account : PT.Narasumber</span>
                                        <br />
                                        <span>Bank Name: Mandiri</span>
                                        <br />
                                        <span>Account No: 2584562523</span>
                                        <br />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>Account : PT.Narasumber</span>
                                        <br />
                                        <span>Bank Name: BTPN</span>
                                        <br />
                                        <span>Account No: 2545285858</span>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </FormGroup>
                        <button
                            className="btn btn-primary btn-block"
                            style={{ width: "40%", margin: "auto" }}
                        >
                            Konfirmasi Pembayaran
                        </button>
                    </PaymentWrapper>
                </div>
            )}
        </>
    );
}

export default PaymentPage;
