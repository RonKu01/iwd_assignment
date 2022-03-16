import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Admin";
import {Button, Card, Form, Modal} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from "axios";
import Axios from "axios";

function PatientTable() {

    const [patItems, setPatItems] = useState([])
    useEffect(() =>{
        const fetchPostList = async () => {
            const {data} = await axios('http://localhost:3005/getPatData')
            setPatItems(data)
        }
        fetchPostList()
    }, [setPatItems])

    const [fullNameReg, setFullNameReg] = useState('');
    const [dobReg, setDobReg] = useState(new Date());
    const [addressReg, setAddressReg] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

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

    const register =()=> {

        let patFullName = document.getElementById('addFullName').value;
        let patDOB = document.getElementById('addDOB').value;

        console.log("New Patient :" + patFullName);
        console.log("New Patient DOB:" + patDOB);

        // Axios.post("http://localhost:3005/patRegister",
        //     {username: usernameReg, password: passwordReg, fullName: patFullName, dob: dobReg, address: addressReg,
        //     }).then((response)=> {
        //     console.log(response.data.message);
        //     alert(response.data.message);
        //     window.location.href = "/patient";
        // });
        handleCloseAdd();
    };

    const [showPass, setShowPass] = useState(true);

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
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="addDOB" >
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date of Birth" id="addDOB" value={dobReg} onChange={(e) =>{setDobReg(e.target.value);}} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" id="addFullName"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your Address" onChange={(e) =>{setAddressReg(e.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUsername" >
                            <Form.Label>Preferred Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter your preferred Username" onChange={(e) =>{setUsernameReg(e.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={showPass ? "password" : "text"} placeholder="Password" onChange={(e) =>{setPasswordReg(e.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCheckbox" >
                            <Form.Check type="checkbox" label="Show Password" onChange={() => setShowPass(!showPass)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
                    <Button variant="primary" onClick={register}>Add</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const EditModalContent = () => {
        return (
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>{editModalInfo.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>PatID : {editModalInfo.patID}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                    <Button variant="danger" onClick={handleCloseEdit}>Delete</Button>
                    <Button variant="primary" onClick={handleCloseEdit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const columns = [
        {
            dataField: 'patID',
            text: 'patID',
        },
        {
            dataField: 'patName',
            text: 'Full Name',
        },
        {
            dataField: 'patDob',
            text: 'Date of Birth'
        },
        {
            dataField: 'patAddress',
            text: 'Address'
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
            <Navbar />
            <Card >
                <Card.Body style={pat_card}>
                    <h1 className="h1 mb-3">Patient Table </h1>
                    <button className="btn btn-primary mb-3 float-end" onClick={toggleTrueFalseAdd}> Add Student</button>
                    <ToolkitProvider bootstrap4={true} keyField="patID" data={ patItems } columns={ columns } search>
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

export default PatientTable;


