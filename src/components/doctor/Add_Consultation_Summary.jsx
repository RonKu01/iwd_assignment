import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "../dashboard/dashboard.scss";
import {Card, Col, Row, Form, Button} from "react-bootstrap";
import "./add_consultation.scss";
import Axios from "axios";

function Add_Consultation_Summary() {
    // Check whether User Already or not. If not, redirect to login page.
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

    const [diagnosis, setDiagnosis] = useState("");
    const [medication, setMedication] = useState("");

    // Function for submitting consultation form
    const submitMedicalReport =()=> {
        if (diagnosis !== "" && medication !== ""){
            Axios.post("http://localhost:3005/addConsultation",
                {diagnosis: diagnosis, medication: medication,
                }).then((response)=> {
                alert("Submitted Successfully!");
                setTimeout(() => { window.location.href = "/dashboard_doctor"; }, 300);
            });
        } else {
            alert("Please fill in all data before submit!");
        }
    };

    return (
        <div className="body-dashboard" >
            <Navbar />
            <main className="main-container">
                <h1 className="specialList-h1-style">Consultation Summary</h1>
                <div className="pt-lg-1"/>

                <h6>Patients Information</h6>
                <h3>Medical Report</h3>
                <div className="pt-lg-3"/>

                <Form>
                    <Form.Group className="mb-3" as={Col} controlId="formGridDiagnosis">
                        <Form.Label>Diagnosis </Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Patient is diagnosed with the following medical problem" onChange={(e) =>{setDiagnosis(e.target.value);}} />
                    </Form.Group>
                    <div className="pt-3"/>
                    <Form.Group className="mb-3" as={Col} controlId="formGridMedication">
                        <Form.Label>Medication/Treatments </Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Medication/Treatment for the patients is the following" onChange={(e) =>{setMedication(e.target.value);}} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" onClick={submitMedicalReport}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </main>
        </div>
    );
}

export default Add_Consultation_Summary;