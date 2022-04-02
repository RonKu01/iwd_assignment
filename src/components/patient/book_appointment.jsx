import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import {Form, Col, Row, Button} from "react-bootstrap";
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

//This page is for patient to book appointment
function Book_Appointment() {
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

  const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="body-dashboard">
             <Navbar /> 

            <main className="main">

                <Form style={{padding: '10px 250px 10px 250px'}}>
                    <h1 style={{padding: '15px', color: 'blue'}}>Book Your Appointment </h1>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Choose the specialism</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Dermatologist</option>
                        <option>Fertality</option>
                        <option>Gynaecologist</option>
                        <option>Infectious Illness</option>
                        <option>Urologist</option>
                        <option>Psychiatrist</option>
                        <option>Gastroenterologists</option>
                        <option>Orthopedic</option>
                        <option>Otolaryngologist</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Doctors Name</Form.Label>
                      <Form.Control type="LastName" placeholder="Enter the Doctors name." />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDiagnosis">
                      <Form.Label>Describe your problem </Form.Label>
                      <Form.Control type="FirstName" placeholder="Medical problem" style={{width: '1300px', height: '100px'}}/>
                    </Form.Group>
                  </Row>

                  <Form.Group as={Col} controlId="formGridBirthDate">
                      <Form.Label>Please Select a Date</Form.Label>
                      {/* <Form.Control type="BirthDate" placeholder="DD/MM/YYYY" style={{width: '300px', height: '35px'}} /> */}
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Please Select Estimated Time</Form.Label>
                      <Form.Select defaultValue="Choose..." style={{width: '300px', height: '35px'}} >
                        <option>Choose...</option>
                        <option>9am-10am</option>
                        <option>10am-11am</option>
                        <option>11am-12pm</option>
                        <option>12pm-1pm</option>
                        <option>1pm-2pm</option>
                        <option>2pm-3pm</option>
                        <option>3pm-4pm</option>
                        <option>4pm-5pm</option>
                        <option>5pm-6pm</option>
                        <option>6pm-7pm</option>
                        <option>7pm-8pm</option>
                        <option>8pm-9pm</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                   <>
                        <Button type="submit">Submit</Button>{' '}
                   </>
                </Form>
            </main>
        </div>
    );
}

export default Book_Appointment;