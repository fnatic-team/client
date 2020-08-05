import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader";

function Header() {
    return (
        <div
            className="navbar m-auto navbar-expand-lg fixed-top m-auto"
            style={{
                backgroundImage:
                    "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%)",
            }}
        >
            <div className="navbar-brand" style={{ width: "40%" }}>
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
                <div className="navbar-nav w-50 nav-menu text-white">
                    <div className="w-100 d-flex justify-content-end">
                        <Link to="/search">
                            <span className="font-weight-bold text-white mr-3">
                                Find Speaker
                            </span>
                        </Link>
                        <Link to="/contactus">
                            <span className="font-weight-bold text-white mr-3">
                                Hubungi Kami
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-nav mr-auto text-white justify-content-around">
                    <ButtonHeader />
                </div>
            </div>
        </div>
    );
}
export default Header;
