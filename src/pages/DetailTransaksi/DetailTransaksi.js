import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormGroup} from "reactstrap";
import {getTransactionDetail } from "../../redux/actions";

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
        text-align:left;
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

    useEffect(() => {
        dispatch(getTransactionDetail(id));

        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line no-extend-native
    String.prototype.localIDR = function () {
        return Number(this).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 2,
        });
    };

      // eslint-disable-next-line no-extend-native
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return (
        <>
            {dataTransaction !== null && (
                <div>
                    <PaymentWrapper className="login-form shadow-lg  bg-white rounded">
                        <h2 className="text-center">Detail Transaksi</h2>
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
                    </PaymentWrapper>
                </div>
            )}
        </>
    );
}

export default PaymentPage;
