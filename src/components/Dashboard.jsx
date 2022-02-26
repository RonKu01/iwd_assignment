import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <main>
                <h2>Welcome to the Dashboard Page!</h2>
                <label>User id</label> <br/>
            </main>
            <nav>
                <Link to="/">Logout</Link>
            </nav>
        </>
    );
}

export default Dashboard;