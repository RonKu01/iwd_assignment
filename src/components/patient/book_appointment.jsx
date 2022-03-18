import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import {Form, Col, Row} from "react-bootstrap";

function Book_Appointment() {
    return (
        <div className="body-dashboard">
             <Navbar /> 

            
            
            <main className="main">
                <h1 style={{padding: '40px', color: 'blue'}}>Book Your Appointment </h1>
                
                <Form style={{padding: '10px 150px 10px 150px'}}>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
            </main>
        </div>
    );
}

export default Book_Appointment;