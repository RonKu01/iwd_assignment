import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard_Admin from "./components/dashboard/Dashboard_Admin";
import Admin_PatientTable from "./components/patient/Admin_PatientTable";
import Dashboard_Patient from "./components/dashboard/Dashboard_Student";
import Specialism from "./components/Specialism";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/specialism" element={<Specialism />} />
                <Route path="/dashboard_admin" element={<Dashboard_Admin />} />
                <Route path="/dashboard_patient" element={<Dashboard_Patient />} />
                {/*<Route path="/dashboard_doctor" element={<Dashboard_Doctor />} />*/}

                <Route path="/patient" element={<Admin_PatientTable />} />
            </Routes>
        );
    }
}

export default App

