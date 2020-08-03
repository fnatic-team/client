import React from "react";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import RegionSelect from "react-region-flag-select";

const EditBiodataWrapper = styled.div`
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
    return (
        <div>
            <EditBiodataWrapper className="login-form shadow-lg  bg-white rounded">
                <h2 className="text-center">Data Diri</h2>

                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Nama Lengkap :</Label>

                    <Input
                        type="text"
                        name="fullname"
                        id="fullname"
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
                            className="w-75"
                            placeholder="Masukan nominal"
                        />{" "}
                        <span> / jam</span>
                    </div>
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Domisili :</Label>
                    <RegionSelect
                        className="custom-select"
                        style={{ width: "100%" }}
                        cityOnly={true}
                        countryCode={"ID"}
                    />
                </FormGroup>
                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Bersedia di lokasi :</Label>
                    <select
                        className="dropdown custom-select"
                        data-placeholder="Choose a Language..."
                    >
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Albanian">Albanian</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Basque">Basque</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Catalan">Catalan</option>
                        <option value="Cambodian">Cambodian</option>
                        <option value="Chinese (Mandarin)">
                            Chinese (Mandarin)
                        </option>
                        <option value="Croatian">Croatian</option>
                        <option value="Czech">Czech</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="English">English</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finnish">Finnish</option>
                        <option value="French">French</option>
                        <option value="Georgian">Georgian</option>
                        <option value="German">German</option>
                        <option value="Greek">Greek</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Icelandic">Icelandic</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Irish">Irish</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Javanese">Javanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Latin">Latin</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Macedonian">Macedonian</option>
                        <option value="Malay">Malay</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Maltese">Maltese</option>
                        <option value="Maori">Maori</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Mongolian">Mongolian</option>
                        <option value="Nepali">Nepali</option>
                        <option value="Norwegian">Norwegian</option>
                        <option value="Persian">Persian</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Quechua">Quechua</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="Samoan">Samoan</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovenian">Slovenian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Swedish ">Swedish </option>
                        <option value="Tamil">Tamil</option>
                        <option value="Tatar">Tatar</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Thai">Thai</option>
                        <option value="Tibetan">Tibetan</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Ukrainian">Ukrainian</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Welsh">Welsh</option>
                        <option value="Xhosa">Xhosa</option>
                    </select>
                </FormGroup>

                <FormGroup style={{ textAlign: "left" }}>
                    <Label>Nomor Telpon :</Label>
                    <Input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Masukan Nomor Telpon"
                    />
                </FormGroup>
                <button className="btn btn-primary btn-block">
                    Upload Foto
                </button>
                <br />
                <button className="btn btn-primary btn-block">
                    Update Biodata
                </button>
            </EditBiodataWrapper>
            1
        </div>
    );
}

export default EditBiodata;
