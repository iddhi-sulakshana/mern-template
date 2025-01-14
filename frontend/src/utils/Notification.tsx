import React from "react";
import { ToastContainer } from "react-toastify";

function Notification() {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnHover
            theme="colored"
            draggable
        />
    );
}

export default Notification;
