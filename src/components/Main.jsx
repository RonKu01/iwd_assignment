import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";

function Main() {
    return (
        <>
            <main>
                <h1>hello world</h1>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        </>
    );
}

export default Main;