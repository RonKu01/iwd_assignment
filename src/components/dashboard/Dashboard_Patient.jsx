import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "./dashboard.scss";
import {Card, CardGroup, Col, Row, Table, Button} from "react-bootstrap";
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
<h1>hello world</h1>
        <CardGroup>
            <Card className="card-new">
                <Link to={"/book_appointment"}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Book Appointment</Card.Title>
                        <Card.Text>
                            Click here to book your appointment!
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Link>
            </Card>

            <Card className="card-new">
                <Link to={"/"}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>View Appointment</Card.Title>
                        <Card.Text>
                            Click here to view your appointment!
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
            <Card className="card-new">
                <Link to={"/medical_summary"}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>View History</Card.Title>
                        <Card.Text>
                            Click here to view your history!
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </CardGroup>
    </div>
);
}

export default Dashboard_Patient;