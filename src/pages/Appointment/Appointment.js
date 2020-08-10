import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import {addTransaction} from "../../redux/actions/Transaction" 
import Swal from "sweetalert2"

const Wrapper = styled.form`
    width: 600px;
    max-width: 100%;
    padding: 50px;
    margin: auto;
    height: 100%;
    margin-bottom: 50px;
    .container1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

function Appointment() {
    const { id } = useParams();
    const history = useHistory()
    const dispatch = useDispatch()
   

    const dataAudience = jwt_decode(localStorage.getItem("token"));
    const [formData, setFormData] = useState({
        name: dataAudience.name,
        audienceID: dataAudience.id,
        speakerID: id,
        nama_acara: "",
        waktu_acara: "",
        tanggal_acara: "",
        durasi: null,
        jml_peserta:null,
        kota: "",
        alamat: "",
        deskripsi: "",
        penyelenggara: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        for (let key in formData) {
            if (formData[key] === "" || formData[key] === null  ) {
                return Swal.fire({
                    icon: "error",
                    title: "Require",
                    text: "Form tidak boleh kosong",
                });  
            }
            
        }
        dispatch(addTransaction(formData,history))
    };

    
    return (
        <div className="container ">
            <div style={{ margin: " 100px 0px 100px 0px" }}>
                <img
                    style={{ width: "200px", height: "200px" }}
                    src="https://cdn.onlinewebfonts.com/svg/img_542916.png"
                    alt=""
                />
                <h3 className="font-weight-bold">Terima Kasih</h3>
                <p>
                    Anda telah memilih Speaker ini sebagai Narasumber Anda.{" "}
                    <br />
                    Speaker berhak menerima atau menolak undangan kepada Anda.
                </p>
            </div>

            <Wrapper onSubmit={handleSubmit} className="login-form shadow-lg  bg-white rounded">
                <h2 className="text-center font-weight-bold">
                    Atur Jadwal Seminar
                </h2>
                <br />
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Penyelenggara :</Label>
                    <Input
                        type="text"
                        name="penyelenggara"
                        onChange={handleChange}
                        value={formData.penyelenggara}
                        id="penyelenggara"
                        placeholder="Masukan Nama Penyelenggara"
                    />
                </FormGroup>
                <div className="container1">
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Nama Acara :</Label>
                        <Input
                            type="text"
                            name="nama_acara"
                            id="namaAcara"
                            onChange={handleChange}
                            value={formData.nama_acara}
                            placeholder="Masukan Nama Acara"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Waktu Acara:</Label>
                        <Input
                            type="text"
                            name="waktu_acara"
                            onChange={handleChange}
                            value={formData.waktu_acara}
                            id="waktu_acara"
                            placeholder="hh:mm"
                        />
                    </FormGroup>
                </div>
                <div className="container1">
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Tanggal Acara:</Label>
                        <Input
                            type="date"
                            name="tanggal_acara"
                            onChange={handleChange}
                            value={formData.tanggal_acara}
                            id="tanggal"
                            placeholder="Masukan username"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Kota :</Label>
                        <Input
                            type="text"
                            name="kota"
                            onChange={handleChange}
                            value={formData.kota}
                            id="kota"
                            placeholder="Masukan kota"
                        />
                    </FormGroup>
                </div>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Alamat Acara :</Label>
                    <textarea
                        className="form-control"
                        style={{ width: "100%" }}
                        name="alamat"
                        type="text"
                        onChange={handleChange}
                        value={formData.alamat}
                        id="alamat"
                        placeholder="Masukan Alamat"
                    />
                </FormGroup>
                <div className="container1">
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Jumlah Peserta :</Label>

                        <Input
                            type="number"
                            onChange={handleChange}
                            name="jml_peserta"
                            value={formData.jml_peserta}
                            min="0"
                            id="jml_peserta"
                            placeholder="Masukan Jumlah Peserta"
                        />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "left" }}>
                        <Label>Durasi (jam) :</Label>
                        <Input
                            type="number"
                            name="durasi"
                            onChange={handleChange}
                            value={formData.durasi}
                            min="0"
                            id="durasi"
                            placeholder="Masukan durasi"
                        />
                    </FormGroup>
                </div>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Deskripsi Acara :</Label>
                    <textarea
                        className="form-control"
                        style={{ width: "100%" }}
                        name="deskripsi"
                        type="text"
                        onChange={handleChange}
                        value={formData.deskripsi}
                        id="desc"
                        placeholder="Masukan Deskripsi"
                    />
                </FormGroup>

                <button  className="btn btn-primary btn-block">Hiring</button>
            </Wrapper>
        </div>
    );
}

export default Appointment;
