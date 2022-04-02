import React, {useEffect, useState} from "react";
import {Alert, Button, Card, Form, Modal} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from "axios";
import Axios from "axios";
import moment from "moment";
import Navbar from "../navbar/Navbar_Patient";
import "./view_appointment.scss";

function View_Appointment() {
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

    //Get the patient data that had booked appointment.
    const [patItems, setPatItems] = useState([])
    useEffect(() =>{
        const fetchPostList = async () => {
            const {data} = await axios('http://localhost:3005/getPatAppointment')
            for (let i=0; i < data.length; i ++){
                data[i].patDob = moment(data[i].patDob).utc().format('DD MMM YYYY')
                data[i].appointmentDate = moment(data[i].appointmentDate).utc().format('DD MMM YYYY')
            }
            setPatItems(data)
        }
        fetchPostList()
    }, [setPatItems])

    //Declaration for every element needed
    const {SearchBar} = Search;
    const pagination = paginationFactory({
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }],
    });
    const [editModalInfo, setEditModalInfo] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const [showAlert, setShowAlert] = useState(false);

    // Modal will close when this called.
    const closeBtn =() =>{
        handleCloseEdit();
    };

    // Function for patient to cancel the appointment
    const cancelBtn =(e) =>{
        const status = e.currentTarget.getAttribute("data-value1")
        let appointmentID = document.getElementById('updateAppointmentID').value;

        Axios.put("http://localhost:3005/updateStatus",
            {
                status: status,
                appointmentID: appointmentID})
            .then((response)=> {
                setShowAlert(true);
                setTimeout(() => { window.location.href = "/view_appointment"; }, 2000);
            });
        handleCloseEdit();
    }

    // Function for patient to Join meeting
    const startMeeting = () =>{
        let appointmentID = document.getElementById('updateAppointmentID').value;
        Axios.put("http://localhost:3005/updateMeetingDetails",
            {
                appointmentID: appointmentID})
            .then((response)=> {
                setShowAlert(true);
                setTimeout(() => { window.location.href = "/join_meeting"; }, 300);   });
        handleCloseEdit();
    }

    //Modal will open when this called
    const toggleTrueFalseEdit = () => {
        setShowEditModal(handleShowEdit);
    }

    //Modal will open when this called.
    const EditModalContent = () => {
        //If status is 'Accept', it will output the code below with 'Join Meeting' button
        if (editModalInfo.status === "Accept") {
            return (
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Join Meeting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control type="hidden" id="updateAppointmentID"
                                          defaultValue={editModalInfo.appointmentID}/>
                            <Form.Group className="mb-3" controlId="formPatName">
                                <Form.Label>Join Meeting with </Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.doctorName} readOnly/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeBtn}>Close</Button>
                        <Button variant="primary" onClick={startMeeting} data-value1="Accept">Join Meeting</Button>
                    </Modal.Footer>
                </Modal>
            )
        } else if (editModalInfo.status === "Cancelled"){
            //If status is 'Cancel', it will output the cancellation msg.
            return (
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Meeting Cancelled</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>This meeting had already been cancelled by the Patient</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeBtn}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )
        }else{
            //If status is 'Pending', it will output the code below with 'Cancel' button.
            return (
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Patient Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control type="hidden" id="updateAppointmentID" defaultValue={editModalInfo.appointmentID}/>
                            <Form.Group className="mb-3" controlId="updateDoctorName">
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.doctorName} readOnly/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAppointmentType">
                                <Form.Label>Appointment Type</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.appointmentType} readOnly/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAppointmentDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.appointmentDate} readOnly/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAppointmentTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.appointmentTime} readOnly/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPurpose">
                                <Form.Label>Purpose of Visit</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.purpose} readOnly/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeBtn}>Close</Button>
                        <Button variant="danger" onClick={cancelBtn} data-value1="Cancelled">Cancelled</Button>
                    </Modal.Footer>
                </Modal>
            )
        }
    }

    //This is just a successful alert msg.
    const AlertModalContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Updating Appointment... Please Wait!</p>
            </Alert>
        )
    }

    //columns for datatable;
    const columns = [
        {
            dataField: 'appointmentID',
            text: 'ID',
        },
        {
            dataField: 'patName',
            text: 'Full Name',
        },
        {
            dataField: 'doctorName',
            text: 'Doctor Name',
        },
        {
            dataField: 'appointmentType',
            text: 'Appointment Type'
        },
        {
            dataField: 'appointmentDate',
            text: 'Date'
        },
        {
            dataField: 'appointmentTime',
            text: 'Time'
        },
        {
            dataField: 'purpose',
            text: 'Purpose'
        },
        {
            dataField: 'status',
            text: 'Status'
        },
    ];

    // when users click on the rows (datatable), this function will called
    const rowEvents = {
        onClick: (e, row) => {
            setEditModalInfo(row)
            toggleTrueFalseEdit()
        }
    };

    const pat_card = {
        width: "100%",
        padding: "2rem"
    };

    return (
        <div className="body-dashboard">
             <Navbar />
            <Card className="fixed-card-new">
                <Card.Body style={pat_card}>
                    {showAlert ? <AlertModalContent /> : null}
                    <h1 className="h1 mb-3">Appointment Table </h1>
                    <ToolkitProvider bootstrap4={true} keyField="appointmentID" data={ patItems } columns={ columns } search>
                        {
                            props => (
                                <div>
                                    <SearchBar { ...props.searchProps } />
                                    <hr />
                                    <h6>*If status is Pending, Click the row if you want to cancel Meeting. Once Meeting Accepted, click the row to Join Meeting*</h6>
                                    <BootstrapTable id="patient_appointment_table" bootstrap4={true} rowEvents={rowEvents} pagination={pagination}
                                                    { ...props.baseProps }
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </Card.Body>
            </Card>

            <div className="mb-2">&nbsp;</div>
            {showEdit ? <EditModalContent /> : null}
        </div>
    );
}

export default View_Appointment;


