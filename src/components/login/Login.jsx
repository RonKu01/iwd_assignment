import React, {Component, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import "./Login.scss";

function Login() {

    const [showPass, setShowPass] = useState(true);

    return (
        <div className="body-container">
            <Navbar />
            <main className="main-container">
                <h1>Login</h1>
                <div className="pt-1"/>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPass ? "password" : "text"} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox" >
                        <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" className="mb-3" type="submit" href="/dashboard">Login</Button>
                        <Button variant="outline-primary" href="/register">Register Here</Button>
                    </div>
                </Form>
            </main>
        </div>
    );
}

export default Login;