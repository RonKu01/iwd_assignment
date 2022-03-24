import React from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "../dashboard/dashboard.scss";
import {Card, Col, Row, Form, Button} from "react-bootstrap";

function Add_Consultation_Summary() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

            <h1 style={{padding: '40px', color: 'blue'}}>Consultation Summary</h1>

            <h6 style={{textAlign: 'center', color: 'black'}}>Patients Information</h6>
            
            <Form style={{padding: '10px 150px 10px 150px'}}>
 

 
  <h3 style={{textAlign: 'center', color: 'black'}}>Medical Report</h3>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridDiagnosis">
      <Form.Label>Diagnosis </Form.Label>
      <Form.Control type="FirstName" placeholder="Patient is diagnosed with the following medical problem" style={{width: '1300px', height: '100px'}}/>
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridMedication">
      <Form.Label>Medication/Treatments </Form.Label>
      <Form.Control type="Medication" placeholder="Medication/Treatment for the patients is the following" style={{width: '1300px', height: '100px'}} />
    </Form.Group>

  </Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
}

export default Add_Consultation_Summary;