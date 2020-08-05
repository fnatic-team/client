import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../redux/actions";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ButtonHeader() {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authorization.authorization);

    const logout = () => {
        Swal.fire({
            icon: "success",
            title: "Terimakasih",
        });
        localStorage.clear();
        history.push("/");

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    // eslint-disable-next-line no-extend-native
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    useEffect(() => {
        dispatch(fetchToken());
        //eslint-disable-next-line
    }, []);

    const display = (
        <>
            {token !== null ? (
                <>
                    <div className="m-auto">
                        <Link className="text-white"  exact="true" path="true"  to={token.role !== "AUDIENCE" ? ("speaker/profile") :    ("audience/profile")}>
                            <i
                                className="fa fa-user font-weight-bold"
                                aria-hidden="true"
                            ></i>{" "}
                            <span>{token.name.toTitleCase()}</span>
                        </Link>
                    </div>

                    <button
                        className="btn btn-sm ml-3 font-weight-bold btn-danger rounded-pill text-white"
                        style={{
                            width: "100px",
                            padding: "5px 15px 5px 15px ",
                        }}
                        onClick={logout}
                    >
                        {" "}
                        Keluar
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login">
                        <button
                            className="btn btn-sm mr-2 font-weight-bold rounded-pill text-white"
                            style={{
                                width: "100px",
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
                            className="btn btn-sm font-weight-bold rounded-pill text-white"
                            style={{
                                width: "100px",
                                background: "rgb(255, 107, 84)",
                                padding: "5px 15px 5px 15px ",
                            }}
                        >
                            {" "}
                            Register
                        </button>
                    </Link>
                </>
            )}
        </>
    );

    return <>{display}</>;
}

export default ButtonHeader;
