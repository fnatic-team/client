import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpeakerDetails } from "../../redux/actions";


import { Link } from "react-router-dom";

// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function Profile() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const dataSpeaker = useSelector(
        (state) => state.browserSpeaker.selectedSpeaker
    );

    useEffect(() => {
        dispatch(getSpeakerDetails(id));

        // eslint-disable-next-line
    }, []);

    return (
        <>
            {" "}
            {dataSpeaker !== null ? (
                <>
                    <div style={{ margin: "100px 0px 80px 0px" }}>
                        <div
                            className="container"
                            animation="fade-down"
                            duration={1000}
                        >
                            <div className="row bg-white m-3 border  pad1 shadow-lg">
                                <div className="col m-3 modal-body text-center align-self-center">
                                    <div className="row">
                                        <div className="col-sm">
                                            <div className="col-sm">
                                                <img
                                                    className="rounded-circle"
                                                    src={dataSpeaker.image}
                                                    alt=""
                                                    style={{ width: "200px", height:"200px" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm">
                                            <div className="text-left d-flex flex-column h-100 justify-content-center">
                                                <h6 className="font-weight-bold">
                                                    {dataSpeaker.name.toTitleCase()}
                                                </h6>
                                                <p>
                                                    {dataSpeaker.category ===
                                                    "nodejs" ? (
                                                        <span className="badge badge-pill badge-success">
                                                            {dataSpeaker.category.toTitleCase()}
                                                        </span>
                                                    ) : dataSpeaker.category ===
                                                      "reactjs" ? (
                                                        <span class="badge badge-pill badge-primary">
                                                            {dataSpeaker.category.toTitleCase()}
                                                        </span>
                                                    ) : dataSpeaker.category ===
                                                      "angular" ? (
                                                        <span className="badge badge-pill badge-danger">
                                                            {dataSpeaker.category.toTitleCase()}
                                                        </span>
                                                    ) : dataSpeaker.category ===
                                                      "mysql" ? (
                                                        <span className="badge badge-pill badge-secondary">
                                                            {dataSpeaker.category.toTitleCase()}
                                                        </span>
                                                    ) : dataSpeaker.category ===
                                                      "magento" ? (
                                                        <span className="badge badge-pill badge-dark">
                                                            {dataSpeaker.category.toTitleCase()}
                                                        </span>
                                                    ) : (
                                                        <span className="badge badge-pill badge-warning">
                                                            {dataSpeaker.category.toTitleCase()}
                                                        </span>
                                                    )}
                                                </p>
                                                <div>
                                                    <Link
                                                        to={`/profile/edit/${dataSpeaker._id}`}
                                                    >
                                                        <button
                                                            style={{
                                                                padding:
                                                                    "10px 30px 10px 30px",
                                                            }}
                                                            className="btn rounded-pill btn-xs btn-primary"
                                                        >
                                                            Edit Profile
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="divider"
                                            style={{
                                                border: "1px solid",
                                                width: "1px",
                                            }}
                                        ></div>

                                        <div className="col-sm p-4">
                                            <div className="text-left d-flex flex-column h-100 justify-content-center">
                                                <div className="d-flex flex-row justify-content-between">
                                                    <p>Kota</p>
                                                    <span>
                                                        {dataSpeaker.location !==
                                                            null &&
                                                            dataSpeaker.location}{" "}
                                                    </span>
                                                </div>
                                               
                                                <div className="d-flex flex-row justify-content-between">
                                                    <p>Fee</p>
                                                    <span>
                                                        {dataSpeaker.fee !==
                                                            null &&
                                                            `${dataSpeaker.fee}`.localIDR()} /jam
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-row justify-content-between">
                                                    <p>Bahasa</p>
                                                    <span>
                                                        {dataSpeaker.language !==
                                                            null &&
                                                            dataSpeaker.language}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row bg-white m-3 p-5 border shadow-lg">
                                <div className="col-sm">
                                    <div className="text-left d-flex flex-column h-100 justify-content-center">
                                        <h4 className="font-weight-bold">
                                            Bio
                                        </h4>
                                        <p>
                                            {dataSpeaker.bio !== null &&
                                                dataSpeaker.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row bg-white m-3 p-5 border shadow-lg">
                                <div className="col-sm">
                                    <div className="text-left d-flex flex-column h-100 justify-content-center">
                                        <h4 className="font-weight-bold">
                                            Resume
                                        </h4>
                                        <br />
                                        <div>
                                            <a
                                            
                                                href={dataSpeaker.cv}
                                                // eslint-disable-next-line
                                                target="_blank"
                                                rel="noopener ofererrer"
                                            >
                                                <button className="btn rounded-pill  btn-primary">
                                                    Download resume
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row bg-white m-3 p-5 border shadow-lg">
                                <div className="col-sm">
                                    <h4 className="text-left mb-4 font-weight-bold">
                                        Social Media
                                    </h4>
                                    <div className="row d-flex w-25 justify-content-between ml-2">
                                        <i
                                            className="fa fa-2x fa-facebook-square"
                                            aria-hidden="true"
                                        ></i>

                                        <i
                                            className="fa fa-2x fa-linkedin-square"
                                            aria-hidden="true"
                                        ></i>

                                        <i
                                            className="fa fa-2x fa-instagram"
                                            aria-hidden="true"
                                        ></i>

                                        <i
                                            className="fa fa-2x fa-whatsapp"
                                            aria-hidden="true"
                                        ></i>

                                        <i
                                            className="fa fa-2x fa-youtube-play"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {" "}
                    <div
                        className="container-fluid"
                        style={{
                            width: "3rem",
                            height: "3rem",
                            marginTop: "200px",
                        }}
                    >
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>{" "}
                    </div>
                </>
            )}
        </>
    );
}

export default Profile;
