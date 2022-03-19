import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Admin";
import {Alert, Button, Card, Form, Modal} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from "axios";
import Axios from "axios";

function DoctorTable() {

    const [docItems, setDocItems] = useState([])
    useEffect(() =>{
        const fetchPostList = async () => {
            const {data} = await axios('http://localhost:3005/getDocData')
            setDocItems(data)
        }
        fetchPostList()
    }, [setDocItems])

    const [specialismItems, setSpecialismItems] = useState([])
    useEffect(() =>{
        const fetchSpecialismList = async () => {
            const {data} = await axios('http://localhost:3005/getSpecialism')
            setSpecialismItems(data)
        }
        fetchSpecialismList()
    }, [setSpecialismItems])

    const {SearchBar} = Search;
    const pagination = paginationFactory({
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }],
    });
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const [editModalInfo, setEditModalInfo] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showAlert, setShowAlert] = useState(false);
    const [showPass, setShowPass] = useState(true);

    const registerDoc =()=> {

        let docSpec = document.getElementById('addDocSpec').value;
        let docFullName = document.getElementById('addDocFullName').value;
        let docYear = document.getElementById('addDocYear').value;

        let docUsername = document.getElementById('addDocUsername').value;
        let docPassword = document.getElementById('addDocPassword').value;

        let docQualification = document.getElementById('addDocQualification').value;
        let docCondition = document.getElementById('addDocCondition').value;

        Axios.post("http://localhost:3005/docRegister",
            {
                username: docUsername,
                password: docPassword,
                specialisationID: docSpec,
                doctorName: docFullName,
                year: docYear,
                qualifications: docQualification,
                conditionConsulted: docCondition,
            }).then((response)=> {
            setShowAlert(true);
            setTimeout(() => { window.location.href = "/doctor"; }, 2000);
        });
        handleCloseAdd();
    };

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
                setTimeout(() => { window.location.href = "/doctor"; }, 2000);
            });
        handleCloseEdit();
    };

    const toggleTrueFalseAdd = () => {
        setShowAddModal(handleShowAdd);
    }
    const toggleTrueFalseEdit = () => {
        setShowEditModal(handleShowEdit);
    }

    const AddModalContent = () => {
        return (
                <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formDocSpec" >
                            <Form.Label>Specialisation</Form.Label>
                            <Form.Select aria-label="Default select example" id="addDocSpec">
                                <option>Open this select menu</option>
                                {
                                    specialismItems.map(specialism => (
                                        <option key={specialism.specialisationID} value={specialism.specialisationID}>{specialism.specialisationName}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" id="addDocFullName"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocYear" >
                            <Form.Label>Year of Experience</Form.Label>
                            <Form.Control type="text" placeholder="Enter Year of Experience" id="addDocYear"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocYear" >
                            <Form.Label>Qualifications</Form.Label>
                            <Form.Control type="text" placeholder="Enter Qualifications" id="addDocQualification"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDocYear" >
                            <Form.Label>Condition Consulted</Form.Label>
                            <Form.Control type="text" placeholder="Enter Year of Experience" id="addDocCondition"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUsername" >
                            <Form.Label>Preferred Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter your preferred Username" id="addDocUsername"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={showPass ? "password" : "text"} placeholder="Password" id="addDocPassword"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
                    <Button variant="primary" onClick={registerDoc}>Add</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const EditModalContent = () => {
        return (
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type ="hidden" id="updateDocLoginID" defaultValue={editModalInfo.loginID} />
                        <Form.Group className="mb-3" controlId="formFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" id="updateFullName" defaultValue={editModalInfo.doctorName} />
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
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                    <Button variant="primary" onClick={updateDoc}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const AlertModalContent = () =>{
        return(
            <Alert show={showAlert} variant="success">
                <Alert.Heading>Success! </Alert.Heading>
                <p>Updating Table... Please Wait!</p>
            </Alert>
        )
    }

    const columns = [
        {
            dataField: 'doctorID',
            text: 'ID',
            headerStyle: {
                whiteSpace:'nowrap',
                width: '5%',
            }
        },
        {
            dataField: 'doctorName',
            text: 'Name',
            headerStyle: {
                whiteSpace:'nowrap',
                width: '15%',
            }
        },
        {
            dataField: 'specialisationName',
            text: 'Specialisation',
            headerStyle: {
                whiteSpace:'nowrap',
                width: '20%',
            }
        },
        {
            dataField: 'year',
            text: 'Ex.Year',
            headerStyle: {
                whiteSpace:'nowrap',
                width: '10%',
            }
        },
        {
            dataField: 'qualifications',
            text: 'Qualifications',
            headerStyle: {
                whiteSpace:'nowrap',
                width: '20%',
            }
        },
        {
            dataField: 'conditionConsulted',
            text: 'Condition Consulted',
            headerStyle: {
                whiteSpace:'nowrap',
                width: '30%',
            }
        },
    ];

    const rowEvents = {
        onClick: (e, row) => {
            setEditModalInfo(row)
            toggleTrueFalseEdit()
        }
    };
    const doc_card = {
        width: "100%",
        padding: "2rem"
    };

    return (
        <div className="body-dashboard">
            <Navbar />
            <Card className="card-new" >
                <Card.Body style={doc_card}>
                    {showAlert ? <AlertModalContent /> : null}

                    <h1 className="h1 mb-3">Doctor Table</h1>
                    <button className="btn btn-primary mb-3 float-end" onClick={toggleTrueFalseAdd}>Add Doctor</button>
                    <ToolkitProvider bootstrap4={true} keyField="doctorID" data={ docItems } columns={ columns } search>
                        {
                            props => (
                                <div>
                                    <h6>Input at below input field</h6>
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

            {showEdit ? <EditModalContent /> : null}
            {showAdd ? <AddModalContent /> : null}
        </div>
    );
}

export default DoctorTable;


