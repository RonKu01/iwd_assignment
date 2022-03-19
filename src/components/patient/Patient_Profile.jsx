import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, CardGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";



function Patient_Profile() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />
         <h1 style={{padding: '40px', color: 'blue'}}>Welcome To Your Profile</h1>

        </div>
    );
}

export default Patient_Profile;