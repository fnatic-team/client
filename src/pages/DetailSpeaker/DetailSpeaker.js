import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpeakerDetails } from "../../redux/actions";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function DetailSpeaker() {
    let { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const dataSpeaker = useSelector(
        (state) => state.browserSpeaker.selectedSpeaker
    );

    const isLoggin = localStorage.getItem("token");

    useEffect(() => {
        dispatch(getSpeakerDetails(id));

        // eslint-disable-next-line
    }, []);

    const handleClick = (event) => {
        if (isLoggin === null) {
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text: "Anda Harus Masuk Terlebih Dahulu",
            });
        } else {
            history.push("/appointment");
        }
    };

        

return <> {dataSpeaker !== null ? (
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
                                                style={{ width: "200px" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm">
                                        <div className="text-left d-flex flex-column h-100 justify-content-center">
                                            <h6 className="font-weight-bold">
                                                {dataSpeaker.name.toTitleCase()}
                                            </h6>
                                            <p>{dataSpeaker.category}</p>
                                            <div>
                                                <button
                                                    onClick={handleClick}
                                                    style={{
                                                        padding:
                                                            "10px 30px 10px 30px",
                                                    }}
                                                    className="btn rounded-pill btn-xs btn-primary"
                                                >
                                                    Hiring
                                                </button>
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
                                                <p>City</p>
                                                <span>Jakarta</span>
                                            </div>
                                            <div className="d-flex flex-row justify-content-between">
                                                <p>Available to</p>
                                                <span>Jakarta</span>
                                            </div>
                                            <div className="d-flex flex-row justify-content-between">
                                                <p>Fee</p>
                                                <span>Rp. 5.000.000 /jam</span>
                                            </div>
                                            <div className="d-flex flex-row justify-content-between">
                                                <p>Languages</p>
                                                <span>Indonesia , English</span>
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
                                    <h4 className="font-weight-bold">Bio</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </p>
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
                <div className="container-fluid">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>{" "}
                </div>
            </>
        )}</>;
}

export default DetailSpeaker;
