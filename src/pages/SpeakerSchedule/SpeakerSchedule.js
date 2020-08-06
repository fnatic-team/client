import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSpeakerDetails,
    getTransactionSpeaker,
    updateStatusTransaksi,
    updateStatusSpeaker
} from "../../redux/actions";
import { useParams } from "react-router-dom";

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

    const status2 = <></>;

    const status3 = (
        <>
            <button className="btn btn-sm btn-primary">Selesai</button>
        </>
    );

    const status4 = <></>;
    const status5 = <></>;
    const status6 = <></>;

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

            <div className="container font-smaller">
                <div className="row bg-white m-3 border  pad1 shadow-lg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama Acara</th>
                                <th scope="col">Penyelengara</th>
                                <th scope="col">Status Transaksi</th>
                                <th scope="col">Aksi</th>
                                <th scope="col">Detail Acara</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTransaction !== null &&
                                dataTransaction.map((data, index) => {
                                    return (
                                        <tr key={data._id}>
                                            <td scope="row">{index + 1}</td>
                                            <td scope="row">
                                                {data.nama_acara}
                                            </td>
                                            <td scope="row">
                                                {data.penyelenggara}
                                            </td>
                                            <td scope="row">
                                                {data.status_transaksi}
                                            </td>

                                            <td scope="row">
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
                                                        <button onClick={() =>
                                                                dispatch(
                                                                    updateStatusTransaksi(
                                                                        data._id,
                                                                        "UNDANGAN DITOLAK, TRANSAKSI GAGAL"
                                                                    )
                                                                )
                                                            } className="btn btn-sm btn-danger">
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
                                                ) : <></>}
                                            </td>
                                            <td scope="row">
                                                <button className="btn btn-sm btn-primary">
                                                    Detail Acara
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SpeakerSchedule;
