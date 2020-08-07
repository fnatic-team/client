import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getSpeakerDetails } from "../../redux/actions";
import ReactFilestack from "filestack-react";
import { updateUser, getTransactionDetail } from "../../redux/actions";

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
    const dataTransaction = useSelector(
        (state) => state.transaction.transactionDetail
    );
    console.log(dataTransaction);

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
    return (
        <>
            {dataTransaction !== null && (
                <div>
                    <PaymentWrapper className="login-form shadow-lg  bg-white rounded">
                        <h2 className="text-center">Detail Transaksi</h2>
                        <FormGroup style={{ textAlign: "left" }}>
                            <p>
                                1. Nama Acara : {dataTransaction[0].nama_acara}{" "}
                            </p>
                            <p>
                                2. Nama Penyelenggara :{" "}
                                {dataTransaction.penyelenggara}
                            </p>
                            <p>3. Nama Audience : {dataTransaction.name} </p>
                        </FormGroup>

                        <button
                            className="btn btn-primary btn-block"
                            style={{ width: "40%", margin: "auto" }}
                        >
                            Confirm Payment
                        </button>
                    </PaymentWrapper>
                </div>
            )}
        </>
    );
}

export default PaymentPage;
