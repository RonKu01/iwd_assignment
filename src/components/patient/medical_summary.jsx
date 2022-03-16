import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, Col, Row, Form, Button} from "react-bootstrap";
import image1 from "../../assets/login_page.jpg";

function Medical_Summary() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

            <h1 style={{padding: '40px', color: 'blue'}}>Medical Summary</h1>

            <h6 style={{textAlign: 'center', color: 'black'}}>Patients Information</h6>

            <Form style={{padding: '10px 150px 10px 150px'}}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="FirstName" placeholder="Enter your first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="LastName" placeholder="Enter your last name" />
    </Form.Group>
  </Row>
 
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="age" placeholder="Enter your age" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridBirthDate">
      <Form.Label>Birth Date</Form.Label>
      <Form.Control type="BirthDate" placeholder="DD/MM/YYYY" />
    </Form.Group>

    <Form>
    <Form.Label>Gender</Form.Label>

  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Male"
        name="groupMale"
        type={type}
        id={`inline-${type}-male`}
      />
      <Form.Check
        inline
        label="Female"
        name="groupFemale"
        type={type}
        id={`inline-${type}-female`}
      />
     <Form.Check
        inline
        label="Others"
        name="groupOther"
        type={type}
        id={`inline-${type}-Others`}
      />
    </div>
  ))}
</Form>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Kuala Lumpur</option>
        <option>Penang</option>
        <option>Selangor</option>
        <option>Kedah</option>
        <option>Perak</option>
        <option>Kelantan</option>
        <option>Johor</option>
        <option>Terengganu</option>
        <option>Malacca</option>
        <option>Pahang</option>
        <option>Negeri Sembilan</option>
        <option>Sabah</option>
        <option>Perlis</option>
        <option>Sarawak</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
 
  <h6 style={{textAlign: 'center', color: 'black'}}>Medical Report</h6>

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



  <h6 style={{textAlign: 'center', color: 'black'}}>Doctors Information</h6>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="FirstName" placeholder="Enter your first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="LastName" placeholder="Enter your last name" />
    </Form.Group>
  </Row>
 
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridMedicalID">
      <Form.Label>Mediacal ID</Form.Label>
      <Form.Control type="age" placeholder="Enter your Medical ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridSpecialisation">
      <Form.Label>Specialisation</Form.Label>
      <Form.Control type="Specialisation" placeholder=" Enter your specialisation" />
    </Form.Group>
    </Row>

   


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
}

export default Medical_Summary;