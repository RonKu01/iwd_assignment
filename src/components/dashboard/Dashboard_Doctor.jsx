import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "./dashboard.scss";
import AppointmentTable from "../doctor/AppointmentTable";
import {Card, CardGroup, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";
import image13 from  "./doc_pro.png";
import image14 from  "./doc_appt.png";
import image15 from  "./doc_consult.jpg";
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
        <div className="centerDiv">
            <Row xl={3} lg={3} className="g-1">
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/doc_profile"}>
                            <Card.Img variant="top" src={image13} height="180" />
                            <Card.Body>
                                <Card.Title>Update Profile</Card.Title>
                                <Card.Text>
                                    Click here to update your profile!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new ">
                        <Link className="link-nostyle" to={"/appointment"}>
                            <Card.Img variant="top" src={image14} height="180" />
                            <Card.Body>
                                <Card.Title>View My Appointment</Card.Title>
                                <Card.Text>
                                    Click here to view your appointment!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/consultation_table"}>
                            <Card.Img variant="top" src={image15} height="180" />
                            <Card.Body>
                                <Card.Title>View Consultation History</Card.Title>
                                <Card.Text>
                                    Click here to view Consultation History!
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

export default Dashboard_Doctor;


