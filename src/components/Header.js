import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
    const [change, setChange] = useState("transparant");

    const handleScroll = () => {
        window.scrollY > 50 ? setChange("#003648") : setChange("");
        console.log(change);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // eslint-disable-next-line
    }, [change]);

    return (
        <div
            className="navbar navbar-expand-lg fixed-top m-auto"
            style={{ backgroundColor: `${change}` }}
        >
            <div className="navbar-brand w-25">
                <img
                    src={logo}
                    alt=""
                    style={{ width: "200px", height: "30px" }}
                />
            </div>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span
                    class="navbar-toggler-icon text-white"
                    style={{ padding: "5px" }}
                >
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto text-white w-50 justify-content-around align-items-center">
                    <span>Browser All Speaker</span>
                    <span>Find Speaker</span>
                    <span>Find Location</span>
                </div>
                <div className="navbar-nav mr-auto text-white w-25 justify-content-between">
                    <button
                        className="btn btn-sm btn-highlight text-white"
                        style={{
                            background: "rgb(255, 107, 84)",
                            padding: "5px 15px 5px 15px ",
                        }}
                    >
                        {" "}
                        Log In
                    </button>
                    <button
                        className="btn btn-sm btn-highlight text-white"
                        style={{
                            background: "rgb(255, 107, 84)",
                            padding: "5px 15px 5px 15px ",
                        }}
                    >
                        {" "}
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Header;
