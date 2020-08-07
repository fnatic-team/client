import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpeakerDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

function SpeakerSchedule() {
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
            {dataSpeaker !== null ? (
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
                                                {dataSpeaker.name}
                                            </h6>
                                            <p>{dataSpeaker.category}</p>
                                            
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
                                                <span>{dataSpeaker.fee !== null &&  `${dataSpeaker.fee}`.localIDR()} / jam</span>
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
                        <div className="row bg-white m-3 border  pad1 shadow-lg">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Lokasi Seminar</th>
                                        <th scope="col">Nama Audiece</th>
                                        <th scope="col">Jumlah Peserta</th>
                                        <th scope="col">Durasi (Jam)</th>
                                        <th scope="col">Aksi</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Fullan</td>
                                        <td>Jakarta</td>
                                        <td>300</td>
                                        <td>5 Jam</td>
                                        <td>
                                            <button className="btn btn-sm btn-primary">
                                                Terima
                                            </button>{" "}
                                            <button className="btn btn-sm btn-danger">
                                                Tolak
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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

export default SpeakerSchedule;
