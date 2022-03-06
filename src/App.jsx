import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard_Admin from "./components/dashboard/Dashboard_Admin";
import Patient from "./components/patient/patient";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard_admin" element={<Dashboard_Admin />} />
                <Route path="/patient" element={<Patient />} />
            </Routes>
        );
    }
}

export default App

