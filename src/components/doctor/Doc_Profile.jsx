import React, {useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "../dashboard/dashboard.scss";
import {Alert, Button, Card, Form, Modal} from "react-bootstrap";
import axios from "axios";
import Axios from "axios";

function Doc_Profile() {
    const [docFullName, setDocFullName] = useState("");
    const [docSpecialisation, setDocSpecialisation] = useState("");
    const [docYear, setDocYear] = useState("");
    const [docPassword, setDocPassword] = useState("");

    const [showAlert, setShowAlert] = useState(false);

    const AlertModalContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Redirect to Login Page...</p>
            </Alert>
        )
    }
    // const doc_profile =()=> {
    //     Axios.post("http://localhost:3005/",
    //         {doctorName: docFullName,
    //             specialisationID: docSpecialisation,
    //             year: docYear,
    //             password: docPassword,
    //         }).then((response)=> {
    //         setShowAlert(true);
    //         setTimeout(() => { window.location.href = "/doc_profile"; }, 2000);
    //     });
    // };

    return (
        <div className="body-container">
            <Navbar />
            <main className="main-container">
                {showAlert ? <AlertModalContent /> : null}
                <h1>Doctor Profile</h1>
                <div className="pt-1">
                    <Form>
                        {/*<Form.Group className="mb-3" controlId="formFullName" >*/}
                        {/*    <Form.Label>Full Name</Form.Label>*/}
                        {/*    <Form.Control type="text" placeholder="Enter your full name" onChange={(e) =>{setFullNameReg(e.target.value);}}/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group className="mb-3" controlId="formFullName" >*/}
                        {/*    <Form.Label>Specialisation</Form.Label>*/}
                        {/*    <Form.Control type="text" placeholder="Enter your full name" onChange={(e) =>{setFullNameReg(e.target.value);}}/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group className="mb-3" controlId="formFullName" >*/}
                        {/*    <Form.Label>Year of Experience</Form.Label>*/}
                        {/*    <Form.Control type="text" placeholder="Enter your full name" onChange={(e) =>{setFullNameReg(e.target.value);}}/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group className="mb-3" controlId="formFullName" >*/}
                        {/*    <Form.Label>Username</Form.Label>*/}
                        {/*    <Form.Control type="text" placeholder="Enter your full name" onChange={(e) =>{setFullNameReg(e.target.value);}}/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group className="mb-3" controlId="formPassword" >*/}
                        {/*    <Form.Label>Password</Form.Label>*/}
                        {/*    <Form.Control type={showPass ? "password" : "text"} placeholder="Password" onChange={(e) =>{setPasswordReg(e.target.value);}}/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group className="mb-3" controlId="formCheckbox" >*/}
                        {/*    <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />*/}
                        {/*</Form.Group>*/}
                        {/*<div className="d-grid gap-2">*/}
                        {/*<div className="d-grid gap-2">*/}
                        {/*    <Button variant="primary" onClick={}>Update</Button>*/}
                        {/*</div>*/}

                    </Form>
                </div>
            </main>
        </div>
    )

}

export default Doc_Profile;