import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, Col, Row} from "react-bootstrap";
import image1 from "../../assets/login_page.jpg";

function Otolaryn() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

        </div>
    );
}

export default Otolaryn;