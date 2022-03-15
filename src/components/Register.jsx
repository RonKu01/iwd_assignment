import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Navbar from "./navbar/Navbar";
import Axios from "axios";

function Register() {
    const [fullNameReg, setFullNameReg] = useState("");
    const [dobReg, setDobReg] = useState(new Date());
    const [addressReg, setAddressReg] = useState("");


    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");


    const register =()=> {
        Axios.post("http://localhost:3005/patRegister",
            {username: usernameReg, password: passwordReg, fullName: fullNameReg, dob: dobReg, address: addressReg,
        }).then((response)=> {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "/login";
        });
    };

    const [showPass, setShowPass] = useState(true);

    return (
    <div className="body-container">
        <Navbar />
        <main className="main-container">
            <h1>Registration</h1>
            <div className="pt-1"/>
            <Form>
                <Form.Group className="mb-3" controlId="formFullName" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" onChange={(e) =>{setFullNameReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="forumDOB" >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Date of Birth" value={dobReg} onChange={(e) =>{setDobReg(e.target.value);}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your Address" onChange={(e) =>{setAddressReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername" >
                    <Form.Label>Preferred Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your preferred Username" onChange={(e) =>{setUsernameReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPass ? "password" : "text"} placeholder="Password" onChange={(e) =>{setPasswordReg(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheckbox" >
                    <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" onClick={register}>Register</Button>
                    <Button variant="outline-primary" className="mb-3" type="submit">Login Here</Button>
                </div>
            </Form>
        </main>
    </div>
    );
}

export default Register;