import React,{useState} from "react";
import { FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import {useHistory} from "react-router-dom"

const Wrapper = styled.div`
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

function Appointment() {





    return (
        <div style={{ margin: " 100px 0px 100px 0px" }}>
            <div className="container ">
                <img
                    style={{ width: "200px", height: "200px" }}
                    src="https://cdn.onlinewebfonts.com/svg/img_542916.png"
                    alt=""
                />
                <h3 className="font-weight-bold">Terima Kasih</h3>
                <p>
                    Anda telah memilih Nama Speaker sebagai Narasumber Anda.{" "}
                    <br />
                    Speaker berhak menerima atau menolak undangan kepada Anda.
                </p>
            </div>

            <Wrapper className="login-form shadow-lg  bg-white rounded">
                <h2 className="text-center font-weight-bold">
                    Atur Jadwal Seminar
                </h2>
                <br />
                <div className="container1">
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Nama Acara :</Label>
                        <Input
                            type="text"
                            name="namaacara"
                            id="namaacara"
                            placeholder="Masukan username"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Waktu Acara:</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Masukan password"
                        />
                    </FormGroup>
                </div>
                <div className="container1">
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Tanggal :</Label>
                        <Input
                            type="date"
                            name="tanggal"
                            id="tanggal"
                            placeholder="Masukan username"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Kota :</Label>
                        <Input
                            type="text"
                            name="kota"
                            id="kota"
                            placeholder="Masukan password"
                        />
                    </FormGroup>
                </div>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Alamat Acara :</Label>
                    <textarea
                        className="form-control"
                        style={{ width: "100%" }}
                        name="address"
                        type="text"
                        id="address"
                        placeholder="Masukan Alamat "
                    />
                </FormGroup>
                <div className="container1">
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Jumlah Peserta :</Label>
                        <Input
                            type="text"
                            name="jumlahpeserta"
                            id="tanggal"
                            placeholder="Masukan Jumlah Peserta"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Kota :</Label>
                        <Input
                            type="text"
                            name="kota"
                            id="kota"
                            placeholder="Masukan password"
                        />
                    </FormGroup>
                </div>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Deskripsi Acara :</Label>
                    <textarea
                        className="form-control"
                        style={{ width: "100%" }}
                        name="desc"
                        type="text"
                        id="desc"
                        placeholder="Masukan Alamat "
                    />
                </FormGroup>

                <button className="btn btn-primary btn-block">Hiring</button>
            </Wrapper>
        </div>
    );
}

export default Appointment;
