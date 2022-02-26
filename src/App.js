import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        );
    }
}

export default App

