import React from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "./dashboard.scss";
import MTable from "../dashboard/MTable";

function Dashboard_Doctor() {
    return (
        <div className="body-dashboard">

            <Navbar />
            
            <main className="main">
                <h1>Dr Lim </h1>
                <p>Urologist</p>
            < MTable />  
            </main>
        </div>
    );
}

export default Dashboard_Doctor;


