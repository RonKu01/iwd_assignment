import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Main from "./components/main/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard_Admin from "./components/dashboard/Dashboard_Admin";
import PatientTable from "./components/admin/PatientTable";
import Dashboard_Patient from "./components/dashboard/Dashboard_Student";
import About from "./components/about";
import Psychiatrist from "./components/specialism/Psychiatrist";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard_admin" element={<Dashboard_Admin />} />
                <Route path="/dashboard_patient" element={<Dashboard_Patient />} />
                {/*<Route path="/dashboard_doctor" element={<Dashboard_Doctor />} />*/}
                <Route path="/psychiatrist" element={<Psychiatrist />} />
                <Route path="/patient" element={<PatientTable />} />
            </Routes>
        );
    }
}

export default App

