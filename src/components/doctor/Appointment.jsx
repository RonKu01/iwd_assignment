import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "./../dashboard/dashboard.scss";
import AppointmentTable from "./AppointmentTable";
import Axios from "axios";

function Appointment() {

    //Check whether User Already or not. If not, redirect to login page.
    const [loginID, setLoginID] = useState("");
    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3005/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginID(response.data.loginID);
            } else {
                window.location.href = "/";
            }
        });
    }, []);

    return (

        <div>
            <Navbar />
            <main className="body-dashboard">
                < AppointmentTable />
            </main>
        </div>
    );
}

export default Appointment;


