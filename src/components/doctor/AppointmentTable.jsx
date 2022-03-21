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
import moment from "moment";

function AppointmentTable() {

    const [patItems, setPatItems] = useState([])
    useEffect(() =>{
        const fetchPostList = async () => {
            const {data} = await axios('http://localhost:3005/getPatData')
            for (let i=0; i < data.length; i ++){
                data[i].patDob = moment(data[i].patDob).utc().format('DD MMM YYYY')
            }
            setPatItems(data)
        }
        fetchPostList()
    }, [setPatItems])

    const [dobReg, setDobReg] = useState(new Date());

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

    const register = () => {

        let patFullName = document.getElementById('addFullName').value;
        let patDOB = document.getElementById('addDOB').value;
        let patAddress = document.getElementById('addAddress').value;
        let patUsername = document.getElementById('addUsername').value;
        let patPassword = document.getElementById('addPassword').value;

        Axios.post("http://localhost:3005/patRegister",
            {username: patUsername, password: patPassword, fullName: patFullName, dob: dobReg, address: patAddress,
            }).then((response)=> {
            setShowAlert(true);
            setTimeout(() => { window.location.href = "/patient"; }, 2000);
        });
        handleCloseAdd();
    };

    const update =() =>{
        let loginId = document.getElementById('updateLoginID').value;
        let patAddress = document.getElementById('updateAddress').value;
        let patPassword = document.getElementById('updatePassword').value;

        Axios.put("http://localhost:3005/updatePat", {address: patAddress, password: patPassword, id: loginId})
            .then((response)=> {
            setShowAlert(true);
            setTimeout(() => { window.location.href = "/patient"; }, 2000);
        });
        handleCloseEdit();
    };

    const toggleTrueFalseAdd = () => {
        setShowAddModal(handleShowAdd);
    }
    const toggleTrueFalseEdit = () => {
        setShowEditModal(handleShowEdit);
    }

    const EditModalContent = () => {
        return (
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Patient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type ="hidden" id="updateLoginID" defaultValue={editModalInfo.loginID} />
                        <Form.Group className="mb-3" controlId="formFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" id="updateFullName" defaultValue={editModalInfo.patName} readOnly/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your Address" id="updateAddress" defaultValue={editModalInfo.patAddress}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={showPass ? "password" : "text"} placeholder="Password" id="updatePassword" defaultValue={editModalInfo.password}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                    <Button variant="primary" onClick={update}>Save Changes</Button>
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
            dataField: 'patName',
            text: 'Name',
        },
        {
            dataField: 'location',
            text: 'Location'
        },
        {
            dataField: 'date',
            text: 'Date'
        },
          {
            dataField: 'time',
            text: 'Time'
        },
        {
          dataField: 'status',
          text: 'Status'
      },
      {
        dataField: 'action',
        text: 'Action'
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

                    <h1 className="h1 mb-3">Appointment Table </h1>
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

            {showEdit ? <EditModalContent /> : null}
            {/* {showAdd ? <AddModalContent /> : null} */}
        </div>
    );
}

export default AppointmentTable;


