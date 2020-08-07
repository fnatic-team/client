import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTransactionAudience,
    updateStatusAudience,
} from "../../redux/actions";
import { useParams, Link } from "react-router-dom";

function PageAudience() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const dataTransaction = useSelector((state) => state.transaction.audience);

    console.log(dataTransaction);
    useEffect(() => {
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
            <div className="container" animation="fade-down" duration={1000}>
                <div className="row bg-white m-3 border  pad1 shadow-lg">
                    <div className="col m-3 modal-body text-center align-self-center">
                        <div className="col m-3 justify-content-space-evenly">
                            <div className="col-sm">
                                <div className="col-sm">
                                    <img
                                        className="rounded-circle"
                                        src="https://via.placeholder.com/200"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="col-sm">
                                <div className="text-center d-flex flex-column h-100 justify-content-center">
                                    <h6 className="font-weight-bold">
                                        Name Audience
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                {dataTransaction !== null &&
                                    dataTransaction.map((data, index) => {
                                        return (
                                            <tr key={data._id}>
                                                <td>{index + 1}</td>
                                                <td>{data.nama_acara}</td>
                                                <td>{data.speakerID.name}</td>
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
                                                      "ACARA SEDANG BERLANGSUNG" ? (
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
                                                            <Link>
                                                                <button className="btn btn-primary btn-sm">
                                                                    Check Out
                                                                </button>
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
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
        </div>
    );
}

export default PageAudience;
