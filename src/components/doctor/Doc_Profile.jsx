import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
import "../dashboard/dashboard.scss";
import {Alert, Button,Form} from "react-bootstrap";
import axios from "axios";
import Axios from "axios";

function Doc_Profile() {

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

    //Get the (1) doctor data from database
    const [doctorDetails, setDoctorDetails] = useState([])
    useEffect(() =>{
        const getDoctorDetails = async () => {
            const {data} = await axios('http://localhost:3005/getPersonDoctorData')
            setDoctorDetails(data)
        }
            getDoctorDetails()
    }, [setDoctorDetails]);

   let doctorName, password, specialisationID, specialisationName, year, qualifications, conditionConsulted;

   //Mapping doctor data into variable
    doctorDetails.map((item, index) =>{
        doctorName = item.doctorName
        password = item.password
        specialisationID = item.specialisationID
        specialisationName = item.specialisationName
        year = item.year
        qualifications = item.qualifications
        conditionConsulted = item.conditionConsulted
    })

    //Get all specialism type from database
    const [specialismItems, setSpecialismItems] = useState([])
    useEffect(() =>{
        const fetchSpecialismList = async () => {
            const {data} = await axios('http://localhost:3005/getSpecialism')
            setSpecialismItems(data)
        }
        fetchSpecialismList()
    }, [setSpecialismItems])

    const [showAlert, setShowAlert] = useState(false);
    const [showPass, setShowPass] = useState(true);

    //This is just a successful alert msg.
    const AlertContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Updating! Please Wait!</p>
            </Alert>
        )
    };

    // Function for update doctor profile
    const updateDoc =() =>{
        let loginId = document.getElementById('updateDocLoginID').value;
        let docName = document.getElementById('updateFullName').value;
        let docSpec = document.getElementById('updateDocSpec').value;
        let docYear = document.getElementById('updateDocYear').value;
        let docQualification = document.getElementById('updateDocQualification').value;
        let docCondition = document.getElementById('updateDocCondition').value;
        let docPassword = document.getElementById('updateDocPassword').value;

        if (loginId !== "" && docName !== "" && docSpec !== "" && docYear !== "" && docQualification !== "" &&  docCondition!== "" && docPassword!== "" ) {

            Axios.put("http://localhost:3005/updateDoc",
                {
                    specialisationID: docSpec,
                    doctorName: docName,
                    year: docYear,
                    qualifications: docQualification,
                    conditionConsulted: docCondition,
                    password: docPassword,
                    id: loginId
                })
                .then((response) => {
                    setShowAlert(true);
                    setTimeout(() => {
                        window.location.href = "/doc_profile";
                    }, 2000);
                });
        }else{
            alert("Please fill in all data before update!");
        }
    };

    return (
        <div className="">
            <Navbar />
            <main className="main-container">
                {showAlert ? <AlertContent /> : null}
                <h1>Doctor Profile</h1>
                <div className="pt-1">
                    <Form>

                        <Form.Control type ="hidden" id="updateDocLoginID" defaultValue={loginID} />
                        <Form.Group className="mb-3" controlId="updateFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={doctorName} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="updateDocSpec" >
                            <Form.Label>Specialisation</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value={specialisationID}>{specialisationName} (Default)</option>
                                {
                                    specialismItems.map(specialism => (
                                        <option key={specialism.specialisationID} value={specialism.specialisationID}>{specialism.specialisationName}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="updateDocYear" >
                            <Form.Label>Year of Experience</Form.Label>
                            <Form.Control type="text" defaultValue={year} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="updateDocQualification" >
                            <Form.Label>Qualifications</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={qualifications} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="updateDocCondition" >
                            <Form.Label>Condition Consulted</Form.Label>
                            <Form.Control as="textarea" rows={5}  defaultValue={conditionConsulted} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="updateDocPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={showPass ? "password" : "text"} placeholder="Password" autoComplete="update-password" defaultValue={password} />
                        </Form.Group>
                        {/*<Form.Group className="mb-3" controlId="formCheckbox" >*/}
                        {/*    <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />*/}
                        {/*</Form.Group>*/}
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