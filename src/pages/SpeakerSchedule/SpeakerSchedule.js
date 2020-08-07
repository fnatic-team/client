import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSpeakerDetails,
    getTransactionSpeaker,
    updateStatusTransaksi,
    updateStatusSpeaker,
} from "../../redux/actions";
import { useParams, Link } from "react-router-dom";

function SpeakerSchedule() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const dataSpeaker = useSelector(
        (state) => state.browserSpeaker.selectedSpeaker
    );

    const dataTransaction = useSelector((state) => state.transaction.speakers);

    useEffect(() => {
        dispatch(getSpeakerDetails(id));
        dispatch(getTransactionSpeaker(id));

        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line no-extend-native
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    return (
        <>
            {dataSpeaker !== null ? (
                <div style={{ margin: "100px 0px 0px 0px" }}>
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
                                                <p>Kota</p>
                                                <span>
                                                    {dataSpeaker.location}{" "}
                                                </span>
                                            </div>

                                            <div className="d-flex flex-row justify-content-between">
                                                <p>Fee</p>
                                                <span>
                                                    {dataSpeaker.fee !== null &&
                                                        `${dataSpeaker.fee}`.localIDR()}{" "}
                                                    / jam
                                                </span>
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
            

            {dataTransaction !== null ? <div className="container font-smaller" style={{marginBottom: "80px"}}>
                <div className="row bg-white m-3 border  pad1 shadow-lg" >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama Acara</th>
                                <th scope="col">Penyelengara</th>
                                <th scope="col">Status Transaksi</th>
                                <th scope="col">Detail Acara</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTransaction !== null &&
                                dataTransaction.map((data, index) => {
                                    return (
                                        <tr key={data._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {data.nama_acara}
                                            </td>
                                            <td>
                                                {data.penyelenggara}
                                            </td>
                                            <td>
                                                {data.status_transaksi.toTitleCase()}
                                            </td>

                                            <td>
                                                <Link
                                                    to={`/transaksi/detail/${data._id}`}
                                                >
                                                    <button className="btn btn-sm btn-primary">
                                                        Detail Acara
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>
                                                {data.status_transaksi ===
                                                "MENUNGGU KONFIRMASI SPEAKER" ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    updateStatusTransaksi(
                                                                        data._id,
                                                                        "UNDANGAN DITERIMA, MENUNGGU PEMBAYARAN AUDIENCE"
                                                                    )
                                                                )
                                                            }
                                                            className="btn btn-sm btn-primary"
                                                        >
                                                            Terima
                                                        </button>{" "}
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    updateStatusTransaksi(
                                                                        data._id,
                                                                        "UNDANGAN DITOLAK, TRANSAKSI GAGAL"
                                                                    )
                                                                )
                                                            }
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            Tolak
                                                        </button>
                                                    </>
                                                ) : data.status_transaksi ===
                                                  "ACARA SEDANG BERLANGSUNG" ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    updateStatusSpeaker(
                                                                        data._id,
                                                                        "SELESAI"
                                                                    )
                                                                )
                                                            }
                                                            className="btn btn-sm btn-primary"
                                                        >
                                                            Selesai
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        {" "}
                                                        <button className="btn btn-sm btn-primary">
                                                            Selesai
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div> : <>
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
                </>}
            
        </>
    );
}

export default SpeakerSchedule;
