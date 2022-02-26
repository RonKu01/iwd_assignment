import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";

function Register() {
    return (
        <>
            <main>
                <h2>Welcome to the Register Page!</h2>
                <label>Enter your username</label> <br/>
                <label>Enter your password</label>
            </main>
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        </>
    );
}

export default Register;