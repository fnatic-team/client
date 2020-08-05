import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import RegionSelect from "react-region-flag-select";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getSpeakerDetails } from "../../redux/actions";
import ReactFilestack from "filestack-react";
import { updateUser } from "../../redux/actions";

const EditBiodataWrapper = styled.form`
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

    .dropdown {
        width: 100%;
        button {
            width: 100%;
            border-radius: 3px;
        }
    }
`;

function EditBiodata() {
    let { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const dataSpeaker = useSelector(
        (state) => state.browserSpeaker.selectedSpeaker
    );

    const [formData, setFormData] = useState({
        name: "",
        fee: "",
        bio: "",
        image: "",
        cv:"",
    });

    useEffect(() => {
        dispatch(getSpeakerDetails(id));

        // eslint-disable-next-line
    }, []);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser(formData, id, history));
    };

    return (
        <>
            {dataSpeaker !== null && (
                <div>
                    <EditBiodataWrapper
                        onSubmit={handleSubmit}
                        className="login-form shadow-lg  bg-white rounded"
                    >
                        <h2 className="text-center">Data Diri</h2>
                        <FormGroup style={{ textAlign: "left" }}>
                            <Label>Nama Lengkap :</Label>

                            <Input
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                value={formData.name}
                                defaultValue={dataSpeaker.name}
                                placeholder="Masukan nama lengkap"
                            />
                        </FormGroup>
                        <FormGroup style={{ textAlign: "left" }}>
                            <Label>Fee :</Label>
                            <div className="container1">
                                <Input
                                    type="text"
                                    name="fee"
                                    id="fee"
                                    onChange={handleChange}
                                    value={formData.fee}
                                    defaultValue={
                                        (dataSpeaker.fee !== undefined) &
                                        dataSpeaker.fee
                                    }
                                    className="w-75"
                                    placeholder="Masukan nominal"
                                />{" "}
                                <span> / jam</span>
                            </div>
                        </FormGroup>
                        {/* <FormGroup style={{ textAlign: "left" }}>
                            <Label>Domisili :</Label>
                            <RegionSelect
                                className="custom-select"
                                name="location"
                                style={{ width: "100%" }}
                                cityOnly={true}
                                countryCode={"ID"}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup style={{ textAlign: "left" }}>
                            <Label>Bersedia di lokasi :</Label>
                            <RegionSelect
                                className="custom-select"
                                style={{ width: "100%" }}
                                cityOnly={true}
                                countryCode={"ID"}
                            />
                        </FormGroup> */}
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
                            <Label>Bio :</Label>
                            <textarea
                                className="form-control"
                                name="bio"
                                onChange={handleChange}
                                value={formData.bio}
                            />
                        </FormGroup>
                        <FormGroup style={{ textAlign: "left" }}>
                            <Label>Foto Profile :</Label>
                            <ReactFilestack
                                apikey={`${process.env.REACT_APP_API_KEY}`}
                                customRender={({ onPick }) => (
                                    <div>
                                        <button
                                            className="btn btn-primary btn-block"
                                            onClick={onPick}
                                        >
                                            Upload Foto Profile
                                        </button>
                                    </div>
                                )}
                                onSuccess={(res) =>
                                    setFormData({
                                        ...formData,
                                        image: res.filesUploaded[0].url,
                                    })
                                }
                            />
                        </FormGroup>

                        <br />
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
                        <button className="btn btn-primary btn-block">
                            Perbarui
                        </button>
                    </EditBiodataWrapper>
                    1
                </div>
            )}
        </>
    );
}

export default EditBiodata;
