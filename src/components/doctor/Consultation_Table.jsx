import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Doctor";
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

function Consultation_Table() {
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

    const [patItems, setPatItems] = useState([])
    useEffect(() =>{
        const fetchPostList = async () => {
            const {data} = await axios('http://localhost:3005/getConsultHistoryByDoc')
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

    const closeBtn =() =>{
        handleCloseEdit();
    };

    const toggleTrueFalseEdit = () => {
        setShowEditModal(handleShowEdit);
    }

    const EditModalContent = () => {
        return (
            <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Consultation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control type="hidden" id="updateConsultationID"
                                      defaultValue={editModalInfo.appointmentID}/>
                        <Form.Group className="mb-3" controlId="formPatName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={editModalInfo.patName} readOnly/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDignosis">
                            <Form.Label>Dignosis</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={editModalInfo.dignosis} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTreatment">
                            <Form.Label>Treatment</Form.Label>
                            <Form.Control as="textarea" rows={3}  defaultValue={editModalInfo.treatment} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFeedback">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control as="textarea" rows={3}  defaultValue={editModalInfo.feedback} readOnly />
                        </Form.Group>

                </Form>

            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeBtn}>Close</Button>
                </Modal.Footer>
            </Modal>
        )

    }

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
            dataField: 'dignosis',
            text: 'Dignosis'
          },
        {
            dataField: 'treatment',
            text: 'Treatment'
        },
        {
            dataField: 'feedback',
            text: 'Feedback'
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
            <Card className="fixed-card-new">
                <Card.Body style={pat_card}>
                    <h1 className="h1 mb-3">Consultation History</h1>
                    <ToolkitProvider bootstrap4={true} keyField="appointmentID" data={ patItems } columns={ columns } search>
                        {
                            props => (
                                <div>
                                    <SearchBar { ...props.searchProps } />
                                    <hr />
                                    <h6>*Click on the row you wish to view*</h6>
                                    <BootstrapTable id="doc_consultation_table" bootstrap4={true} rowEvents={rowEvents} pagination={pagination}
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

export default Consultation_Table;


