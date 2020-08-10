import { GET_NEWSLETTER } from "./types";
import Swal from "sweetalert2";

const newsLetter = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/newsletter/addnewsletter`;
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
    console.log(result);

    if (result.message === "Add Newsletter succes") {
        Swal.fire({
            title: "Thank you!",
            text: "",
            icon: "success",
            confirmButtonText: "ok",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Your email has ben subscribe",
            text: "",
        });
    }
    // dispatch(registerUser(result));
};

export { newsLetter, GET_NEWSLETTER };
