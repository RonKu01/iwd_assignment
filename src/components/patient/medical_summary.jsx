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
import "./medical_summary.scss";

function Medical_Summary() {

  const [patItems, setPatItems] = useState([])
  useEffect(() =>{
    const fetchPostList = async () => {
      const {data} = await axios('http://localhost:3005/getPatAppointmentDone')
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

  const updateFeedback = () =>{
    let patFeedbackID = document.getElementById('addFeedbackID').value;
    let patFeedback = document.getElementById('addFeedback').value;

    Axios.post("http://localhost:3005/patFeedback",
        {
          comment: patFeedback,
          feedbackID: patFeedbackID,
        }).then((response)=> {
      setShowAlert(true);
      setTimeout(() => { window.location.href = "/doctor"; }, 2000);
    });
    handleCloseEdit();
  }

  const toggleTrueFalseEdit = () => {
    setShowEditModal(handleShowEdit);
  }

  const EditModalContent = () => {
      return (
          <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
              <Modal.Title>Medical History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Control type="hidden" id="updateConsultID" defaultValue={editModalInfo.consultID}/>
                <Form.Group className="mb-3" controlId="updateDoctorName">
                  <Form.Label>Doctor Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" defaultValue={editModalInfo.doctorName} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDiagnosis">
                  <Form.Label>Diagnosis</Form.Label>
                  <Form.Control as="textarea" rows={3} defaultValue={editModalInfo.dignosis} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTreatment">
                  <Form.Label>Treatment</Form.Label>
                  <Form.Control as="textarea" rows={3} defaultValue={editModalInfo.treatment} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFeedback">
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control as="textarea" rows={3} palceholder = "Insert Feedback" defaultValue={editModalInfo.treatment} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={updateFeedback}>Save Changes</Button>
              <Button variant="secondary" onClick={closeBtn}>Close</Button>
            </Modal.Footer>
          </Modal>
      )
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
      dataField: 'consultID',
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
      dataField: 'dignosis',
      text: 'Diagnosis'
    },
    {
      dataField: 'treatment',
      text: 'Treatment'
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
            {showAlert ? <AlertModalContent /> : null}

            <h1 className="h1 mb-3">Medical History </h1>
            <ToolkitProvider bootstrap4={true} keyField="appointmentID" data={ patItems } columns={ columns } search>
              {
                props => (
                    <div>
                      <SearchBar { ...props.searchProps } />
                      <hr />
                      <h6>*click on the row you wish to view*</h6>
                      <BootstrapTable id="medical_summary_table" bootstrap4={true} rowEvents={rowEvents} pagination={pagination}
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

export default Medical_Summary;