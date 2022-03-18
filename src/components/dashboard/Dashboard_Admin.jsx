import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Admin";
import "./dashboard.scss";
import {Card, Table} from "react-bootstrap";
import Axios from "axios";

function Dashboard_Admin() {

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
                <Card className="card-dashboard">
                    <Card.Body className="card-body-dashboard" >
                        <h1>LoginID : {loginID}</h1>
                    </Card.Body>
                </Card>
            </main>
        </div>
    );
}

export default Dashboard_Admin;


