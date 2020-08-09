import React, { useState } from "react";
import Rosa from "react-on-scroll-animation";
import { newsLetter } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Subscribe() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(newsLetter(formData, history));
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <Rosa className="container" animation="fade-down" duration={1000}>
            <form
                onSubmit={handleSubmit}
                className="row bg-white m-3 border  pad1 shadow"
            >
                <div className="col">
                    <div className="icon-box mx-auto">
                        <i className="fa fa-3x fa-envelope-open-o m-3"></i>
                    </div>
                </div>
                <div className="col m-3 modal-body text-center align-self-center">
                    <h4>Subscribe to our newsletter</h4>
                    <p>
                        Join our subscribers list to get the latest news,
                        updates and special offers delivered directly in your
                        inbox.
                    </p>
                    <div className="col-sm-9 p-3 input-group align-self-center m-auto">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Rosa>
    );
}

export default Subscribe;
