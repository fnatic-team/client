import { GET_USER_LOGIN, GET_USER_REGISTER, GET_FACEBOOK } from "./types";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export const registerUser = (formData, history) => async (dispatch) => {
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
    if (result.message === "Registration success") {
        Swal.fire({
            title: "Pendaftaran Berhasil",
            text: "",
            icon: "success",
            confirmButtonText: "ok",
        });
        localStorage.removeItem("social");
        history.push("/login");
    } else {
        Swal.fire({
            title: "Email Sudah Terdaftar",
            text: "",
            icon: "error",
            confirmButtonText: "ok",
        });
    }
    // dispatch(registerUser(result));
};

export const userLogin = (formData, history) => async () => {
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
    const token = localStorage.getItem("token");
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
                authorization: `Bearer ${token}`,
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

export const getFacebook = (data, history) => async (dispatch) => {
    const { profile } = data;

    if (profile.name !== undefined) {
        localStorage.setItem("social", JSON.stringify(data.profile));
        history.push(
            `${
                history.location.pathname !== "/registrasi/audience"
                    ? "/registrasi/speaker/facebook"
                    : "/registrasi/audience/facebook"
            }`
        );
    }
    dispatch({
        type: GET_FACEBOOK,
        payload: data,
    });
};

export const userLoginFacebook = (data, history) => async () => {
    const formData = {
        email: data.profile.email,
        password: data.profile.id,
    };

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
            localStorage.removeItem("social");
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

export const getGoogle = (data, history) => {
    const profile = {
        ...data,
    };

    if (profile.profileObj !== undefined) {
        localStorage.setItem("social", JSON.stringify(profile.profileObj));
        history.push(
            `${
                history.location.pathname !== "/registrasi/audience"
                    ? "/registrasi/speaker/google"
                    : "/registrasi/audience/google"
            }`
        );
    }
};

export const userLoginGoogle = (data, history) => async () => {
    const profile = {
        ...data,
    };

    const formData = {
        email: profile.profileObj.email,
        password: profile.profileObj.googleId,
    };

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
            localStorage.removeItem("social");
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

export const onFailure = (error) => {
    alert(error);
};

export const googleResponse = async (response) => {
    const tokenBlob = new Blob(
        [JSON.stringify({ access_token: response.accessToken }, null, 2)],
        { type: "application/json" }
    );
    const options = {
        method: "POST",
        body: tokenBlob,
        mode: "cors",
        cache: "default",
    };

    const res = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/auth/google`,
        options
    );
    const result = await res.json();
    console.log("Google", result);
    localStorage.setItem("token", result.token);
};

export const facebookResponse = async (response) => {
    const tokenBlob = new Blob(
        [JSON.stringify({ access_token: response.accessToken }, null, 2)],
        { type: "application/json" }
    );
    const options = {
        method: "POST",
        body: tokenBlob,
        mode: "cors",
        cache: "default",
    };

    const res = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/auth/facebook`,
        options
    );
    const result = await res.json();
    localStorage.setItem("token", result.token);
    console.log("Facebook", result);
};

export { GET_USER_LOGIN, GET_USER_REGISTER, GET_FACEBOOK };
