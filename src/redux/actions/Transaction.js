import Swal from "sweetalert2"

export const addTransaction = (formData, history) => async () => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/transaksi/addtransaction`;
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(url, options);
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
                title: result,
                icon: "success",
            });

            setTimeout(() => {
                history.push("/");
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