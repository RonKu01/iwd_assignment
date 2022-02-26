import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";

function Login() {
    return (
        <>
            <main>
                <h2>Welcome to the Login Page!</h2>
                <label>username</label> <br/>
                <label>password</label>
            </main>
            <nav>
                <Link to="/Dashboard">Login</Link>
            </nav>
        </>
    );
}

export default Login;