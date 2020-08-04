import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

const Icon = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
`;

function Footer() {
    return (
        <div
            className="container-fluid text-white"
            style={{
                backgroundImage:
                    "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%)"
            }}
        >
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-sm">
                    <div>
                        {" "}
                        <img
                            src={logo}
                            alt=""
                            style={{
                                width: "200px",
                            }}
                        />
                    </div>
                    <br />
                    <p>An amazing solution for find experienced speaker</p>
                    <Icon>
                        <i
                            className="fa fa-2x fa-facebook"
                            aria-hidden="true"
                        ></i>
                        <i
                            className="fa fa-2x fa-instagram"
                            aria-hidden="true"
                        ></i>
                        <i
                            className="fa fa-2x fa-youtube-play"
                            aria-hidden="true"
                        ></i>{" "}
                    </Icon>
                </div>
                <div className="col-sm">
                    <h6 style={{ fontWeight: "bold" }}>Speaker Seeker</h6>
                    <p>Home</p>
                    <p>Sign In</p>
                    <p>Register</p>
                </div>
                <div className="col-sm">
                    <h6 style={{ fontWeight: "bold" }}>About</h6>
                    <p>Team</p>
                </div>
                <div className="col-sm">
                    <h6 style={{ fontWeight: "bold" }}>General</h6>
                    <p>News</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Term & Conditions</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
