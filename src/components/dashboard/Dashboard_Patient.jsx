import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "./dashboard.scss";
import {Card, Container, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";

function Dashboard_Patient() {

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
            <Col lg={true}>
                    <Card className="card-new">
                        <Link to={"/specialist_list"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title allign="center">Book Appointment</Card.Title>
                            <Card.Text>
                                Click here to book your appointment!
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link to={"/"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title allign="center">View Appointment</Card.Title>
                            <Card.Text>
                                Click here to view your appointment!
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link to={"/medical_summary"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title allign="center">View History</Card.Title>
                            <Card.Text>
                                Click here to view your history!
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>
        </div>
    );
}

export default Dashboard_Patient;


