import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTransactionAudience,
    updateStatusAudience,
    getSpeakerDetails
} from "../../redux/actions";
import { useParams, Link } from "react-router-dom";

function PageAudience() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const dataTransaction = useSelector((state) => state.transaction.audience);
    const dataAudience = useSelector((state) =>state.browserSpeaker.selectedSpeaker);

    useEffect(() => {
        dispatch(getSpeakerDetails(id))
        dispatch(getTransactionAudience(id));

        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line no-extend-native
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return (
        <div style={{ margin: "100px 0px 80px 0px" }}>
            {dataAudience !== null ? (
                <div
                    className="container"
                    animation="fade-down"
                    duration={1000}
                >
                    <div  className="row bg-white m-3 border  pad1 shadow-lg">
                        <div className="col m-3 modal-body text-center align-self-center">
                            <div className="col m-3 justify-content-space-evenly">
                                <div className="col-sm">
                                    <div className="col-sm">
                                        <img
                                            className="rounded-circle"
                                            style={{ width: "200px" }}
                                            src={
                                                dataAudience.image
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-sm mt-5">
                                    <div className="text-center d-flex flex-column h-100 justify-content-center">
                                        <h6 className="font-weight-bold">
                                            {dataAudience.name.toTitleCase()}
                                        </h6>
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

            {dataTransaction !== null ? (
                <div className="container font-smaller">
                    <div className="row bg-white m-3 border  pad1 shadow-lg">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Acara</th>
                                    <th scope="col">Nama Speaker</th>
                                    <th scope="col">Status Transaksi</th>
                                    <th scope="col">Detail Acara</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataTransaction !== null ?
                                    dataTransaction.map((data, index) => {
                                        return (
                                            <tr key={data._id}>
                                                <td>{index + 1}</td>
                                                <td>{data.nama_acara}</td>
                                                <td>{data.speakerID.name}</td>
                                                <td>
                                                    {data.status_audience !==
                                                    "PENDING"
                                                        ? "Acara Sudah Selesai"
                                                        : data.status_transaksi.toTitleCase()}
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                        data-toggle="modal"
                                                        data-target={`#detail${
                                                            index + 1
                                                        }`}
                                                    >
                                                        Detail Acara
                                                    </button>
                                                </td>

                                                <td>
                                                    {data.status_transaksi ===
                                                    "UNDANGAN DITERIMA, MENUNGGU PEMBAYARAN AUDIENCE" ? (
                                                        <>
                                                            <Link
                                                                to={`/pembayaran/${data._id}`}
                                                            >
                                                                <button className="btn btn-primary btn-sm">
                                                                    Check Out
                                                                </button>
                                                            </Link>
                                                        </>
                                                    ) : data.status_transaksi ===
                                                          "ACARA SEDANG BERLANGSUNG" &&
                                                      data.status_audience ===
                                                          "PENDING" ? (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    dispatch(
                                                                        updateStatusAudience(
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
                                                    ) : data.status_transaksi ===
                                                      "MENUNGGU KONFIRMASI SPEAKER" ? (
                                                        <>
                                                            <button disabled className="btn btn-primary btn-sm">
                                                                Check Out
                                                            </button>
                                                        </>
                                                    ) : data.status_audience ===
                                                      "SELESAI" ? (
                                                        <>
                                                            <button className="btn btn-sm btn-primary">
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
                                    }) : <><h1>Belum Ada JAdwal</h1></>}
                            </tbody>
                        </table>
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

            {dataTransaction !== null &&
                dataTransaction.map((data, index) => {
                    return (
                        <>
                            <div
                                key={data._id}
                                className="modal fade"
                                id={`detail${index + 1}`}
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header text-center">
                                            <h5
                                                className="modal-title text-center"
                                                id="exampleModalLabel"
                                            >
                                                Detail Acara
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="d-flex flex-column text-left">
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        1. Nama Acara
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.nama_acara}
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        2. Nama Penyelenggara
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.penyelenggara}
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        3. Nama Audience
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.name}
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        4. Nama Speaker
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.speakerID.name}
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        5. Alamat Acara
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.alamat}
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        6. Jumlah Peserta
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.jml_peserta}
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        7. Durasi Acara
                                                    </span>
                                                    <span className="w-50">
                                                        : {data.durasi} Jam
                                                    </span>
                                                </div>
                                                <div className="w-100 d-flex">
                                                    <span className="w-50">
                                                        8. Nilai Transaksi
                                                    </span>
                                                    <span className="w-50">
                                                        :{" "}
                                                        {`${
                                                            data.durasi *
                                                            data.speakerID.fee
                                                        }`.localIDR()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
        </div>
    );
}

export default PageAudience;
