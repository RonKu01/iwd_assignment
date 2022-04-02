import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "./dashboard.scss";
import {Card, CardGroup, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";
import image16 from  "./pat_profile.jpg";
import image17 from  "./pat_app.jpg";
import image18 from  "./pat_medical.jpeg";


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
        <div className="centerDiv">
            <Row xl={3} lg={3} className="g-1">
                <Col lg={true}>
                    <Card className="card-new ">
                        <Link className="link-nostyle" to={"/specialist_list"}>
                            <Card.Img variant="top" src={image16} height="180" />
                            <Card.Body>
                                <Card.Title>Book Appointment</Card.Title>
                                <Card.Text>
                                    Click here to book your appointment!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/view_appointment"}>
                            <Card.Img variant="top" src={image17} height="180" />
                            <Card.Body>
                                <Card.Title>View Appointment</Card.Title>
                                <Card.Text>
                                    Click here to view your appointment!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/medical_summary"}>
                            <Card.Img variant="top" src={image18} height="180" />
                            <Card.Body>
                                <Card.Title>View Medical History</Card.Title>
                                <Card.Text>
                                    Click here to view your medical history!
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

export default Dashboard_Patient;