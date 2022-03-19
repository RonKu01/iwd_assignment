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

import Dashboard_Doctor from './components/dashboard/Dashboard_Doctor';
import DoctorTable from "./components/admin/DoctorTable";
import Chat from "./components/chat/Chat";

import Psychiatrist from "./components/specialism/Psychiatrist";
import Urologist from "./components/specialism/Urologist";
import Dermatologist from './components/specialism/Dermatologist';
import Gastroenterologists from './components/specialism/Gastroenterologists';
import Infectious from './components/specialism/Infectious';
import Gynecologist from "./components/specialism/Gynaecologist";
import Otolaryn from './components/specialism/Otolaryn';
import Fertality from './components/specialism/Fertality';
import Orthopedic from './components/specialism/Orthopedic';

import Patient_Profile from './components/patient/Patient_Profile';
import Medical_Summary from './components/patient/medical_summary';
import Book_Appointment from './components/patient/book_appointment';
import Doc_Profile from "./components/doctor/Doc_Profile";
import Consultation_Summary from './components/consultation/Consultation_Summary'
import Specialist_List from './components/specialism/Specialist_List';

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

                <Route path="/patient" element={<PatientTable />} />
                <Route path="/doctor" element={<DoctorTable />} />
                <Route path="/Doc_Profile" element={<Doc_Profile />} />
                <Route path="/chat" element={<Chat />} />

                <Route path="/psychiatrist" element={<Psychiatrist />} />
                <Route path="/urologist" element={<Urologist/>} />
                <Route path="/dermatologist" element={<Dermatologist/>} />
                <Route path="/Gastroenterologists" element={<Gastroenterologists />} />
                <Route path="/infectious" element={<Infectious/>} />
                <Route path="/Gynecologist" element={<Gynecologist/>} />
                <Route path="/otolaryn" element={<Otolaryn />} />
                <Route path="/fertality" element={<Fertality/>} />
                <Route path="/orthopedeic" element={<Orthopedic/>} />



                <Route path="/patient_profile" element={<Patient_Profile/>} />
                <Route path="/medical_summary" element={<Medical_Summary/>} />
                <Route path="/book_appointment" element={<Book_Appointment/>} />
                <Route path="/specialist_list" element={<Specialist_List/>} />
            </Routes>
        );
    }
}

export default App

