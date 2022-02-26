import React, {Component, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Button, Form} from "react-bootstrap";

function Login() {
    return (
        <>
            <main>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox" >
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <nav>
                            <Link to="/Dashboard">Login</Link>
                        </nav>
                    </Button>
                    <nav>
                        <Link to="/register">Register</Link>
                    </nav>
                </Form>
            </main>
        </>
    );
}

export default Login;