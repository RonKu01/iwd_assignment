import React from "react";
import Navbar from "./navbar/Navbar";

function Dashboard() {
    return (
        <div>
            <Navbar />
            <main>
                <h2>Welcome to the Dashboard Page!</h2>
                <label>User id</label> <br/>
            </main>
        </div>
    );
}

export default Dashboard;