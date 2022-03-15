import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Navbar from "./navbar/Navbar";
import Axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login =()=> {
        Axios.post("http://localhost3005/login", {username: setUsername, password: setPassword,
        }).then((response)=> {console.log(response);
        });
    };



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
                        <Form.Control type="text" placeholder="Enter username" onChange={(e) =>{setUsername(e.target.value);}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPass ? "password" : "text"} placeholder="Password" onChange={(e) =>{setPassword(e.target.value);}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox" >
                        <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" className="mb-3" type="submit" href="/dashboard_Admin">Admin</Button>
                        <Button variant="primary" className="mb-3" type="submit" href="/dashboard_Patient">Patient</Button>
                        <Button variant="primary" className="mb-3" type="submit" href="/dashboard_Doctor">Doctor</Button>
                        <Button variant="primary" className="mb-3" type="submit" href="" onClick={login}>Login</Button>
                        <Button variant="outline-primary" href="/register">Register Here</Button>
                    </div>
                </Form>
            </main>
        </div>
    );
}

export default Login;