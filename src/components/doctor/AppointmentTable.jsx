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
import StartMeeting from "./StartMeeting";

function AppointmentTable() {

    const [patItems, setPatItems] = useState([])
    useEffect(() =>{
        const fetchPostList = async () => {
            const {data} = await axios('http://localhost:3005/getPatListByDoc')
            for (let i=0; i < data.length; i ++){
                data[i].patDob = moment(data[i].patDob).utc().format('DD MMM YYYY')
                data[i].appointmentDate = moment(data[i].appointmentDate).utc().format('DD MMM YYYY')
            }
            setPatItems(data)
        }
        fetchPostList()
    }, [setPatItems])

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

    const closeBtn =() =>{
        handleCloseEdit();
    };

    const updateBtn =(e) =>{
        const status = e.currentTarget.getAttribute("data-value1")
        let appointmentID = document.getElementById('updateAppointmentID').value;

        Axios.put("http://localhost:3005/updateStatus",
            {
                status: status,
                appointmentID: appointmentID})
            .then((response)=> {
                setShowAlert(true);
                setTimeout(() => { window.location.href = "/appointment"; }, 2000);
            });
        handleCloseEdit();
    }

    const startMeeting = () =>{
        let appointmentID = document.getElementById('updateAppointmentID').value;
        Axios.put("http://localhost:3005/updateMeetingDetails",
            {
                appointmentID: appointmentID})
            .then((response)=> {
                setShowAlert(true);
                setTimeout(() => { window.location.href = "/start_meeting"; }, 300);   });
        handleCloseEdit();
    }

    const toggleTrueFalseEdit = () => {
        setShowEditModal(handleShowEdit);
    }

    const PersonalAppointment = () => {

        if (editModalInfo.status === "Accept") {
            return (
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Meeting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control type="hidden" id="updateAppointmentID"
                                          defaultValue={editModalInfo.appointmentID}/>
                            <Form.Group className="mb-3" controlId="formPatName">
                                <Form.Label>Create Meeting</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.patName} readOnly/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeBtn}>Close</Button>
                        <Button variant="primary" onClick={startMeeting} data-value1="Accept">Start Meeting</Button>
                    </Modal.Footer>
                </Modal>
            )
        } else {
            return (
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control type="hidden" id="updateAppointmentID"
                                          defaultValue={editModalInfo.appointmentID}/>
                            <Form.Group className="mb-3" controlId="formPatName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.patName} readOnly/>
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
                            <Form.Group className="mb-3" controlId="formStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" defaultValue={editModalInfo.status} readOnly/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={updateBtn} data-value1="Decline">Decline</Button>
                        <Button variant="secondary" onClick={closeBtn}>Close</Button>
                        <Button variant="primary" onClick={updateBtn} data-value1="Accept">Accept</Button>
                        {/*<Button variant="primary" onClick={updateAppt}>Save Changes</Button>*/}
                    </Modal.Footer>
                </Modal>
            )
        }
    }

    const AlertModalContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Updating Appointment... Please Wait!</p>
            </Alert>
        )
    }

    const columns = [
        {
            dataField: 'patName',
            text: 'Full Name',
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
          dataField: 'status',
          text: 'Status'
        },
    ];
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
            <Card className="fixed-card-new">
                <Card.Body style={pat_card}>
                    {showAlert ? <AlertModalContent /> : null}

                    <h1 className="h1 mb-3">Appointment Table</h1>
                    {/* <button className="btn btn-primary mb-3 float-end" onClick={toggleTrueFalseAdd}> Add Patient</button> */}
                    <ToolkitProvider bootstrap4={true} keyField="patID" data={ patItems } columns={ columns } search>
                        {
                            props => (
                                <div>
                                    <SearchBar { ...props.searchProps } />
                                    <hr />
                                    <BootstrapTable bootstrap4={true} rowEvents={rowEvents} pagination={pagination}
                                                    { ...props.baseProps }
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </Card.Body>
            </Card>

            {showEdit ? <PersonalAppointment /> : null}
        </div>
    );
}

export default AppointmentTable;

