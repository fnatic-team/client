import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../redux/actions";
import { Link } from "react-router-dom";

function MenuHeader() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authorization.authorization);

    useEffect(() => {
        dispatch(fetchToken());
        //eslint-disable-next-line
    }, []);

    const display = (
        <>
            {token !== null ? (
                <>
                    <div className="w-100 d-flex justify-content-end">
                        {token.role !== "AUDIENCE" ? (
                            <></>
                        ) : (
                            <>
                                {" "}
                                <Link exact="true" path="true" to="/search">
                                    <span className="font-weight-bold text-white mr-3">
                                        Find Speaker
                                    </span>
                                </Link>
                            </>
                        )}

                        <Link
                            to={
                                token.role !== "AUDIENCE"
                                    ? `/speaker/schedule/${token.id}`
                                    : `/audience/schedule/${token.id}`
                            }
                        >
                            <span className="font-weight-bold text-white mr-3">
                                Jadwal Saya
                            </span>
                        </Link>
                        <Link to="/contactus">
                            <span className="font-weight-bold text-white mr-3">
                                Hubungi Kami
                            </span>
                        </Link>
                    </div>
                </>
            ) : (
                <>
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
                </>
            )}
        </>
    );

    return <>{display}</>;
}

export default MenuHeader;
