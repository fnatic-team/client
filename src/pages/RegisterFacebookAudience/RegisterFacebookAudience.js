// import React, { useState } from "react";
// import styled from "styled-components";
// import { registerUser } from "../../redux/actions";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { FormGroup, Label, Input } from "reactstrap";
// import Swal from "sweetalert2"

// const RegisterWrapper = styled.form`
//     width: 600px;
//     max-width: 100%;
//     padding: 50px;
//     margin: auto;
//     margin-top: 100px;
//     height: 100%;
//     margin-bottom: 100px;
//     .container1 {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//     }
// `;

// function RegisterFacebookAudience() {

//     const dataSocial = JSON.parse(localStorage.getItem("social"))

//     const [formData, setFormData] = useState({
//         name:dataSocial.name,
//         email: dataSocial.email,
//         username: "",
//         password: dataSocial.id,
//         image:dataSocial.picture.data.url,
//         phone: "",
//     });
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         for (let key in formData) {
//             if (formData[key] === "") {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Require",
//                     text: "Form tidak boleh kosong",
//                 });
//             }else if(formData.password.length <= 5){
//                 Swal.fire({
//                     icon: "error",
//                     title: "Require",
//                     text: "Password Minimal 6 karakter",
//                 });
//             }
//         }
//         dispatch(registerUser(formData,history))
//     };

//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };


//     return (
//         <div>
//             <RegisterWrapper
//                 onSubmit={handleSubmit}
//                 className="login-form shadow-lg  bg-white rounded"
//             >
//                 <h2 className="text-center">Lengkapi Data Terlebih Dahulu</h2>
                
//                 <hr />
               
//                 <FormGroup style={{ textAlign: "left" }}>
//                     <Label>Username :</Label>
//                     <Input
//                         type="text"
//                         name="username"
//                         id="email"
//                         onChange={handleChange}
//                         value={formData.username}
//                         placeholder="Masukan username"
//                     />
//                 </FormGroup>
//                 <FormGroup style={{ textAlign: "left" }}>
//                     <Label>Nomor Telpon :</Label>
//                     <Input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         onChange={handleChange}
//                         value={formData.phone}
//                         placeholder="Masukan Nomor Telpon"
//                     />
//                 </FormGroup>
//                 <button className="btn btn-primary btn-block">Daftar Sebagai Audience</button>
//             </RegisterWrapper>
//         </div>
//     );
// }

// export default RegisterFacebookAudience;
