import React, {useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import Navbar from "./navbar/Navbar";
import Axios from "axios";

function Register() {
    const [fullNameReg, setFullNameReg] = useState("");
    const [dobReg, setDobReg] = useState(new Date());
    const [addressReg, setAddressReg] = useState("");

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [showPass, setShowPass] = useState(true);

    const register =()=> {
        let patFullName = document.getElementById('addFullName').value;
        let patDOB = document.getElementById('addDOB').value;
        let patAddress = document.getElementById('addAddress').value;
        let patUsername = document.getElementById('addUsername').value;
        let patPassword = document.getElementById('addPassword').value;

        if (patFullName !== "" && patDOB !== "" && patAddress !== "" && patUsername !== "" && patPassword !== "") {

            Axios.post("http://localhost:3005/patRegister",
            {
                username: usernameReg,
                password: passwordReg,
                fullName: fullNameReg,
                dob: dobReg,
                address: addressReg,
            }).then((response) => {
            setShowAlert(true);
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
            });
        }else{
            alert("Please fill in all data before register!");
        };
    }

    const AlertModalContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Redirect to Login Page...</p>
            </Alert>
        )
    }


    return (
    <div className="body-container">
        <Navbar />
        <main className="main-container">
            {showAlert ? <AlertModalContent /> : null}
            <h1>Registration</h1>
            <div className="pt-1"/>
            <Form>
                <Form.Group className="mb-3" controlId="addFullName" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" onChange={(e) =>{setFullNameReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="addDOB" >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Date of Birth" value={dobReg} onChange={(e) =>{setDobReg(e.target.value);}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="addAddress" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your Address" onChange={(e) =>{setAddressReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="addUsername" >
                    <Form.Label>Preferred Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your preferred Username" autoComplete="username" onChange={(e) =>{setUsernameReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="addPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPass ? "password" : "text"} placeholder="Password" autoComplete="new-password" onChange={(e) =>{setPasswordReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheckbox" >
                    <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" onClick={register}>Register</Button>
                </div>
            </Form>
        </main>
    </div>
    );
}

export default Register;