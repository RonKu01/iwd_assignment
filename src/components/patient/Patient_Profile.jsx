import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Button, Alert, Form} from "react-bootstrap";
import Axios from "axios";
import axios from "axios";
import moment from "moment";



function Patient_Profile() {
    // Check whether User Already or not. If not, redirect to login page.
    const [loginID, setLoginID] = useState("");

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3005/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginID(response.data.loginID);
            } else {
                window.location.href = "/";
            }
        });
    }, []);

    const [patDetails, setPatDetails] = useState([])
    useEffect(() =>{
        const getPatDetails = async () => {
            const {data} = await axios('http://localhost:3005/getPersonPatData')
            for (let i=0; i < data.length; i ++){
                data[i].patDob = moment(data[i].patDob).utc().format('DD MMM YYYY')
            }
            setPatDetails(data)
        }
        getPatDetails()
    }, [setPatDetails]);

    let patName, patAddress, password;

    patDetails.map((item, index) =>{
        patName = item.patName
        patAddress = item.patAddress
        password = item.password
    })

    const [showAlert, setShowAlert] = useState(false);
    const [showPass, setShowPass] = useState(true);

    const AlertContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Updating! Please Wait!</p>
            </Alert>
        )
    };

    const updatePat =() =>{
        let loginId = document.getElementById('updateLoginID').value;
        let patAddress = document.getElementById('updateAddress').value;
        let patPassword = document.getElementById('updatePassword').value;

        Axios.put("http://localhost:3005/updatePat",
            {
                address: patAddress,
                password: patPassword,
                id: loginId})
            .then((response)=> {
                setShowAlert(true);
                setTimeout(() => { window.location.href = "/Patient_Profile"; }, 2000);
            });
    };


    return (
        <div className="">
            <Navbar />
            <main className="main-container">
                {showAlert ? <AlertContent /> : null}
                <h1>Patient Profile</h1>
                <div className="pt-1">
                    <Form>
                        <Form.Control type ="hidden" id="updateDocLoginID" defaultValue={loginID} />
                        <Form.Group className="mb-3" controlId="formFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" id="updateFullName" defaultValue={patName} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} id="updateAddress" defaultValue={patAddress} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={showPass ? "password" : "text"} placeholder="Password" id="updatePassword" defaultValue={password} />
                        </Form.Group>
                        {/*<Form.Group className="mb-3" controlId="formCheckbox" >*/}
                        {/*    <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />*/}
                        {/*</Form.Group>*/}
                        <div>
                            <Button variant="primary" onClick={updatePat}>Save Changes</Button>
                        </div>
                    </Form>
                </div>
            </main>
        </div>
    );
}

export default Patient_Profile;