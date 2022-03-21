import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Admin";
import "./dashboard.scss";
import {Card, CardGroup, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
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
        <div className="centerDiv">
            <Row xl={3} lg={3} className="g-1">
                <Col lg={true}>
                    <Card className="card-new ">
                        <Link className="link-nostyle" to={"/doctor"}>
                            <Card.Img variant="top" height="180" />
                            <Card.Body>
                                <Card.Title>Doctors</Card.Title>
                                <Card.Text>
                                    Click here to view, edit, add and delete doctors!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/patient"}>
                            <Card.Img variant="top"  height="180" />
                            <Card.Body>
                                <Card.Title>Patients</Card.Title>
                                <Card.Text>
                                Click here to view, edit, add and delete patients!                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/feedback"}>
                            <Card.Img variant="top"  height="180" />
                            <Card.Body>
                                <Card.Title>Patient Feedbacks</Card.Title>
                                <Card.Text>
                                    Click here to view patient feedbacks!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
    );
}

export default Dashboard_Admin;


