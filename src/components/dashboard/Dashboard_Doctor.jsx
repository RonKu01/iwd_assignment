import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "./dashboard.scss";
import AppointmentTable from "../dashboard/AppointmentTable";
import Axios from "axios";

function Dashboard_Doctor() {

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

        <div className="body-dashboard">
            <Navbar />
            <main className="main">
                <h1>Dr Lim : LoginID = {loginID}</h1>
                <p>Urologist</p>
            < AppointmentTable />  
            </main>
        </div>
    );
}

export default Dashboard_Doctor;


