import Swal from "sweetalert2"
import {GET_TRANSACTION_SPEAKER, GET_TRANSACTION_AUDIENCE,GET_TRANSACTION_DETAIL} from "./types"

export const addTransaction = (formData, history) => async () => {
    const token = localStorage.getItem("token")
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/addtransaction`;
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
                Authorization : `Bearer ${token}`
            },
        };

        const response = await fetch(url, options);
        // eslint-disable-next-line
        const result = await response.json();

        if (response.status === 200 ) {
            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                title: "Berhasil",
                icon: "success",
            });

            setTimeout(() => {
                window.history.back()
            }, 3000);
        } else {
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text: "Ada yang Salah",
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Forbidden",
            text: "Ada Yang Salah",
        });
    }
};


export const getTransactionSpeaker = (id) => async (dispatch) => {
  let url =
    `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/alltrans`;

  const token = localStorage.getItem("token")  
  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization : `Bearer ${token}`
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  const data =  results.data.filter( (e) => {return e.speakerID._id === id} )
  

  dispatch({
    type: GET_TRANSACTION_SPEAKER,
    payload: data,
  });
};


export const getTransactionAudience = (id) => async (dispatch) => {
  let url =
    `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/alltrans`;

  const token = localStorage.getItem("token")  
  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization : `Bearer ${token}`
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  const data =  results.data.filter( (e) => {return e.audienceID._id === id} )
  

  dispatch({
    type: GET_TRANSACTION_AUDIENCE,
    payload: data,
  });
};

export const updateStatusTransaksi = (id, status_transaksi) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/update/${id}`
        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status_transaksi : status_transaksi }),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: `Status Transaksi Berhasil diUpdate`,
            });

            window.location.reload()
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const updateStatusSpeaker = (id, status_speaker) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/update/${id}`
        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status_speaker : status_speaker }),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: `Status Transaksi Berhasil diUpdate`,
            });

            window.location.reload()
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const updateStatusAudience = (id, status_audience) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/update/${id}`
        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status_audience : status_audience }),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: `Status Transaksi Berhasil diUpdate`,
            });

            window.location.reload()
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const getTransactionDetail = (id) => async (dispatch) => {
  let url =
    `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/alltrans`;

  const token = localStorage.getItem("token")  
  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization : `Bearer ${token}`
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  const data =  results.data.filter( (e) => {return e._id === id} )
  
  console.log(data)
  dispatch({
    type: GET_TRANSACTION_DETAIL,
    payload: data,
  });
};


export const updateStatusTransaksiPembayaran = (id,formData) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/update/${id}`
        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: `Status Transaksi Berhasil diUpdate`,
            });

            window.location.reload()
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export {GET_TRANSACTION_AUDIENCE,GET_TRANSACTION_SPEAKER, GET_TRANSACTION_DETAIL}
