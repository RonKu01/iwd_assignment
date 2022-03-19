import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Main from "./components/main/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard_Admin from "./components/dashboard/Dashboard_Admin";
import PatientTable from "./components/admin/PatientTable";
import Dashboard_Patient from "./components/dashboard/Dashboard_Patient";
import About from "./components/about";
import Psychiatrist from "./components/specialism/Psychiatrist";
import Dashboard_Doctor from './components/dashboard/Dashboard_Doctor';
import DoctorTable from "./components/admin/DoctorTable";
import Chat from "./components/chat/Chat";
import Urologist from "./components/specialism/Urologist";
import Dermatologist from './components/specialism/Dermatologist';
import Fertality from './components/specialism/Fertality';
import Gastro from './components/specialism/Gastro';
import Infectious from './components/specialism/Infectious';
import Orthopedic from './components/specialism/Orthopedic';
import Otolaryn from './components/specialism/Otolaryn';
import Patient_Profile from './components/patient/Patient_Profile';
import Medical_Summary from './components/patient/medical_summary';
import Book_Appointment from './components/patient/book_appointment';
import Doc_Profile from "./components/doctor/Doc_Profile";
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
                <Route path="/dashboard_doctor" element={<Dashboard_Doctor />} />
                <Route path="/Doc_Profile" element={<Doc_Profile />} />
                <Route path="/psychiatrist" element={<Psychiatrist />} />
                <Route path="/patient" element={<PatientTable />} />
                <Route path="/doctor" element={<DoctorTable />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/urologist" element={<Urologist/>} />
                <Route path="/dermatologist" element={<Dermatologist/>} />
                <Route path="/fertality" element={<Fertality/>} />
                <Route path="/gastro" element={<Gastro/>} />
                <Route path="/infectious" element={<Infectious/>} />
                <Route path="/orthopedeic" element={<Orthopedic/>} />
                <Route path="/otolaryn" element={<Otolaryn />} />
                <Route path="/patient_profile" element={<Patient_Profile/>} />
                <Route path="/medical_summary" element={<Medical_Summary/>} />
                <Route path="/book_appointment" element={<Book_Appointment/>} />
            </Routes>
        );
    }
}

export default App

