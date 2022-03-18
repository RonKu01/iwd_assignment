import React, {useEffect, useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import Navbar from "./navbar/Navbar";
import Axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showPass, setShowPass] = useState(true);

    const login = () => {
        Axios.post("http://localhost:3005/login", {
            username: username,
            password: password,
        }).then((response)=>{
            if (response.data.message){
                setShowAlert(true);
            } else {
                if(response.data[0].role === "Patient"){
                    window.location.href = "/dashboard_patient";
                } else if (response.data[0].role === "Doctor"){
                    window.location.href = "/dashboard_doctor";
                }else{
                    window.location.href = "/dashboard_admin";
                }
            }
        });
    };

    return (
        <div className="body-container">
            <Navbar />
            <main className="main-container">
                <Alert show={showAlert} variant="danger">
                    <h5>Incorrect Username and Password !</h5>
                </Alert>
                <h1>Login</h1>
                <div className="pt-1"/>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" autoComplete="current-password" onChange={(e) =>{setUsername(e.target.value); setShowAlert(false)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPass ? "password" : "text"} autoComplete="current-password" placeholder="Password" onChange={(e) =>{setPassword(e.target.value);setShowAlert(false)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox" >
                        <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" className="mb-3" onClick={login}>Login</Button>
                        <Button variant="outline-primary" href="/register">Register Here</Button>
                    </div>
                </Form>
            </main>
        </div>
    );
}

export default Login;