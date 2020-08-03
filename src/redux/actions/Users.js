import { GET_USER_LOGIN, GET_USER_REGISTER } from "./types";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const registerUser = (formData, history) => async (dispatch) => {
    const url = `https://narasumber-backend.herokuapp.com/api/user/`;
    const options = {
        method: "POST",
        // mode : "no-cors",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json",
            
        },
    };

    const response = await fetch(url, options);
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
        const url = "https://rumahku-com.herokuapp.com/users/login";
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();
        const dataUser = jwt_decode(result.result);

        if (response.status === 200 && dataUser.status !== "ACTIVE") {
            localStorage.clear();
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text:
                    "Your Account isn't Active, please contact administration for Activation ",
            });
        } else if (response.status === 200 && dataUser.status === "ACTIVE") {
            localStorage.setItem("token", result.result);

            Swal.fire({
            title: "Berhasil Masuk",
            text: "",
            icon: "success",
            confirmButtonText: "ok",
        });
        history.push("/");
        } else {
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text: "email atau password salah",
            });
        }
    } catch (error) {
        localStorage.clear();
        Swal.fire({
            icon: "error",
            title: "Forbidden",
            text: "email atau password salah",
        });
    }
};

export { registerUser, GET_USER_LOGIN, GET_USER_REGISTER, userLogin };
