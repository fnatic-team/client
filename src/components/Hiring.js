import React from "react";
import Rosa from "react-on-scroll-animation";
import { Link } from "react-router-dom";

function Hiring() {
    return (
        <Rosa className="container" animation="fade-down" duration={1000}>
            <div className="row bg-white m-3 border  pad1 shadow">
                <div className="col m-3 modal-body text-center align-self-center">
                    <p
                        className="h2 font-weight-bold"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Hiring? Audience looking for you
                    </p>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <span
                                className="font-weight-bold"
                                style={{ fontSize: "30px" }}
                            >
                                150+
                            </span>
                            <p className="text-secondary">Speaker</p>
                        </div>
                        <div className="col-sm">
                            <span
                                className="font-weight-bold"
                                style={{ fontSize: "30px" }}
                            >
                                40
                            </span>
                            <p className="text-secondary">Audience</p>
                        </div>
                        <div className="col-sm">
                            <span
                                className="font-weight-bold"
                                style={{ fontSize: "30px" }}
                            >
                                20
                            </span>
                            <p className="text-secondary">
                                Average Day to hire
                            </p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <Link to="/registrasi">
                            <button className="btn btn-xs btn-primary">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Rosa>
    );
}

export default Hiring;
