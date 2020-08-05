import { GET_USER_LOGIN, GET_USER_REGISTER } from "./types";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const registerUser = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/`;
    
    const options = {
        method: "POST",
        // mode : "no-cors",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json",
        },
    };

    const response = await fetch(url, options);
    // eslint-disable-next-line
    const result = await response.json();
    if (response.status === 200) {
        Swal.fire({
            title: "Your Email Successfuly Register!",
            text: "",
            icon: "success",
            confirmButtonText: "ok",
        });
        history.push("/login");
    } else {
        Swal.fire({
            title: "Email already registered",
            text: "",
            icon: "error",
            confirmButtonText: "ok",
        });
    }
    // dispatch(registerUser(result));
};

const userLogin = (formData, history) => async () => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/login`;
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();
        const dataUser = jwt_decode(result.token);

        if (response.status === 200 && dataUser.status !== "ACTIVE") {
            localStorage.clear();
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text:
                    "Akun anda belum aktif , Hubungi admin untuk informasi lebih lanjut",
            });
        } else if (response.status === 200 && dataUser.status === "ACTIVE") {
            localStorage.setItem("token", result.token);

            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                title: "Signed in successfully",
                icon: "success",
            });

            setTimeout(() => {
                history.push("/");
                window.location.reload();
            }, 3000);
        } else {
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text: "wrong email or Password",
            });
        }
    } catch (error) {
        localStorage.clear();
        Swal.fire({
            icon: "error",
            title: "Forbidden",
            text: "Wrong Email or Password",
        });
    }
};

export const updateUser = (formData, id, history) => async () => {
    const token = localStorage.getItem("token")
    try {
        for (let key in formData) {
            if (formData[key] === "") {
                delete formData[key];
            }
        }

        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/${id}`;
        const options = {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Data berhasil diperbarui",
            });

            history.goBack();
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export { registerUser, GET_USER_LOGIN, GET_USER_REGISTER, userLogin };
