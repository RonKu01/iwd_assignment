import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "../dashboard/dashboard.scss";
import {Alert, Button, Card, Form, Modal} from "react-bootstrap";
import axios from "axios";
import Axios from "axios";

function Doc_Profile() {

    //Check whether User Already or not. If not, redirect to login page.
    // const [loginID, setLoginID] = useState("");

    // Axios.defaults.withCredentials = true;
    // useEffect(() => {
    //     Axios.get("http://localhost:3005/login").then((response) => {
    //         if (response.data.loggedIn === true) {
    //             setLoginID(response.data.loginID);
    //         } else {
    //             window.location.href = "/";
    //         }
    //     });
    // }, []);


    const [docFullName, setDocFullName] = useState("");
    const [docSpecialisation, setDocSpecialisation] = useState("");
    const [docYear, setDocYear] = useState("");
    const [docPassword, setDocPassword] = useState("");

    const [specialismItems, setSpecialismItems] = useState([])
    useEffect(() =>{
        const fetchSpecialismList = async () => {
            const {data} = await axios('http://localhost:3005/getSpecialism')
            setSpecialismItems(data)
        }
        fetchSpecialismList()
    }, [setSpecialismItems])

    const [editModalInfo, setEditModalInfo] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [showPass, setShowPass] = useState(true);

    // Axios.post("http://localhost:3005/getPersonDoctorData", {
    //     loginId: loginID,
    // }).then((response)=>{
    //     setEditModalInfo(response.data);
    // });

    const AlertContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Redirect to Login Page...</p>
            </Alert>
        )
    }

    const updateDoc =() =>{
        let loginId = document.getElementById('updateDocLoginID').value;
        let docName = document.getElementById('updateFullName').value;
        let docSpec = document.getElementById('updateDocSpec').value;
        let docYear = document.getElementById('updateDocYear').value;
        let docQualification = document.getElementById('updateDocQualification').value;
        let docCondition = document.getElementById('updateDocCondition').value;
        let docPassword = document.getElementById('updateDocPassword').value;

        Axios.put("http://localhost:3005/updateDoc",
            {
                specialisationID: docSpec,
                doctorName : docName,
                year: docYear,
                qualifications : docQualification,
                conditionConsulted : docCondition,
                password: docPassword,
                id: loginId})
            .then((response)=> {
                setShowAlert(true);
                setTimeout(() => { window.location.href = "/doc_profile"; }, 2000);
            });
    };

    return (
        <div className="">
            <Navbar />
            <main className="main-container">
                {showAlert ? <AlertContent /> : null}
                <h1>Doctor Profile</h1>
                <div className="pt-1">
                    <Form>
                        <Form.Control type ="hidden" id="updateDocLoginID" defaultValue={editModalInfo.loginID} />
                        <Form.Group className="mb-3" controlId="formFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" id="updateFullName" defaultValue={editModalInfo.doctorName} readonly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocSpec" >
                            <Form.Label>Specialisation</Form.Label>
                            <Form.Select aria-label="Default select example" id="updateDocSpec">
                                <option value={editModalInfo.specialisationID}>{editModalInfo.specialisationName} (Default)</option>
                                {
                                    specialismItems.map(specialism => (
                                        <option key={specialism.specialisationID} value={specialism.specialisationID}>{specialism.specialisationName}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocYear" >
                            <Form.Label>Year of Experience</Form.Label>
                            <Form.Control type="text" id="updateDocYear" defaultValue={editModalInfo.year} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocYear" >
                            <Form.Label>Qualifications</Form.Label>
                            <Form.Control type="text" id="updateDocQualification" defaultValue={editModalInfo.qualifications} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocYear" >
                            <Form.Label>Condition Consulted</Form.Label>
                            <Form.Control type="text" id="updateDocCondition" defaultValue={editModalInfo.conditionConsulted} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={showPass ? "password" : "text"} placeholder="Password" id="updateDocPassword" defaultValue={editModalInfo.password} />
                        </Form.Group>
                        <div>
                            <Button variant="primary" onClick={updateDoc}>Save Changes</Button>
                        </div>
                    </Form>
                </div>
            </main>
        </div>
    )

}

export default Doc_Profile;