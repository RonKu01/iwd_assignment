import React, {useState} from "react";
import Navbar from "../navbar/Navbar_Admin";
import {Button, Card, Modal, Table} from "react-bootstrap";
import {patItems} from "./patItems";
import "./patient.scss";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const { SearchBar } = Search;
const pagination = paginationFactory({
    sizePerPageList: [ {
        text: '5th', value: 5
    }, {
        text: '10th', value: 10
    }],
});


function Patient() {

    const [editModalInfo, setEditModalInfo] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    const [showAddModal, setShowAddModal] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const columns = [
        {
            dataField: 'patient_ID',
            text: '#',
        },
        {
            dataField: 'patient_name',
            text: 'Full Name',
        },
        {
            dataField: 'patient_dob',
            text: 'Date of Birth'
        },
        {
            dataField: 'patient_address',
            text: 'Address'
        },
        {
            dataField: 'password',
            text: 'Password',
        },
    ];
    const rowEvents = {
        onClick: (e, row) => {
            console.log(row)
            setEditModalInfo(row)
            toggleTrueFalseEdit()
        }
    }
    const toggleTrueFalseEdit = () => {
        setShowEditModal(handleShowEdit);
    }

    const toggleTrueFalseAdd = () => {
        setShowAddModal(handleShowAdd);
    }

    const EditModalContent = () => {
        return(
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>{editModalInfo.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{editModalInfo.patient_address}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                    <Button variant="danger" onClick={handleCloseEdit}>Delete</Button>
                    <Button variant="primary" onClick={handleCloseEdit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const AddModalContent = () => {
        return(
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>test</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                    <Button variant="primary" onClick={handleCloseEdit}>Add</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <div className="body-dashboard">
            <Navbar />
            <Card >
                <Card.Body className="pat_card">
                    <h1 class="h1 mb-3">Patient Table </h1>
                    <button class="btn btn-primary mb-3 float-end" onClick={toggleTrueFalseAdd}> Add Student</button>
                    <ToolkitProvider bootstrap4={true} keyField="patient_ID" data={ patItems } columns={ columns } search>
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

export default Patient;


