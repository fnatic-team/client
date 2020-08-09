import { GET_CONTACT_US } from "./types";
import Swal from "sweetalert2";

const contactUs = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/contact/add/`;
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
            title: "Your Your message was sent!",
            text: "",
            icon: "success",
            confirmButtonText: "ok",
        });
    }
    // dispatch(registerUser(result));
};

export { contactUs, GET_CONTACT_US };
