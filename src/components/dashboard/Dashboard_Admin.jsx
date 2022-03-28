import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Admin";
import "./dashboard.scss";
import {Card, CardGroup, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";
import image10 from  "./admin_doc.jpg";
import image11 from  "./admin_pat.jpg";


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
            <Row xl={2} lg={3} className="g-1">
                <Col lg={true}>
                    <Card className="card-new ">
                        <Link className="link-nostyle" to={"/doctor"}>
                            <Card.Img variant="top" src={image10} height="250"/>
                            <Card.Body>
                                <Card.Title>Doctors</Card.Title>
                                <Card.Text>
                                    Click here to view, edit and add doctors!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Link className="link-nostyle" to={"/patient"}>
                            <Card.Img variant="top" src={image11} height="250" />
                            <Card.Body>
                                <Card.Title>Patients</Card.Title>
                                <Card.Text>
                                Click here to view, edit and add patients!                                </Card.Text>
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


