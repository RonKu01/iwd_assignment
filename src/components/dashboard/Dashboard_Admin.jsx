import React from "react";
import Navbar from "../navbar/Navbar_Admin";
import "./dashboard.scss";
import {Card, Table} from "react-bootstrap";

function Dashboard_Admin() {
    return (
        <div className="body-dashboard">

            <Navbar />
            <main className="main">
                <Card className="card-dashboard">
                    <Card.Body className="card-body-dashboard" >

                    </Card.Body>
                </Card>
            </main>
        </div>
    );
}

export default Dashboard_Admin;


