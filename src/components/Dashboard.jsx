import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
    return (
        <>
        <div className="dashboard" id="dashboard">
            <main>
                <h2>Welcome to the Dashboard Page!</h2>
                <label>User id</label> <br/>
            </main>
            <nav>
                <Link to="/">Logout</Link>
            </nav>
        </div>
        </>
    );
}

export default Dashboard;