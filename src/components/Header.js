import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
    const [change, setChange] = useState("");
    const history = useHistory();

    const handleScroll = () => {
        window.scrollY < 1 && history.location.pathname === "/"
            ? setChange("")
            : setChange("#003648");
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
                <Link to="/">
                    <img
                        src={logo}
                        alt=""
                        style={{ width: "200px", height: "30px" }}
                    />{" "}
                </Link>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span
                    className="navbar-toggler-icon text-white"
                    style={{ padding: "5px" }}
                >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <div className="navbar-nav mr-auto text-white w-50 justify-content-around align-items-center">
                    <Link
                        to="/search"
                        style={{
                            "&:hover": {
                                background: "rgb(255, 107, 84)",
                            },
                        }}
                    >
                        <span className="text-white">Browser All Speaker</span>
                    </Link>
                    <span>Find Speaker</span>
                    <span>Find Location</span>
                </div>
                <div className="navbar-nav mr-auto text-white w-25 justify-content-between">
                    <Link to="/login">
                        <button
                            className="btn btn-sm btn-highlight text-white"
                            style={{
                                background: "rgb(255, 107, 84)",
                                padding: "5px 15px 5px 15px ",
                            }}
                        >
                            {" "}
                            Masuk
                        </button>
                    </Link>
                    <Link to="/registrasi">
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
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;
