import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Topbar from "./components/Topbar";

class App extends Component {
    render() {
        return (
            <div className="App">
                 <Topbar />
                 <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
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

function Main() {
    return (
        <>
            <main>
            <p>hi everyone</p>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                
            </nav>
           
        </>
    );
}

export default App

