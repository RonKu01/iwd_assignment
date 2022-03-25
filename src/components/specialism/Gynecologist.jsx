import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Alert, Button, Card, Form, Modal} from "react-bootstrap";
import Axios from "axios";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import moment from "moment";

function Gynecologist() {
    let specialisationID = 6;
    const [doctorList, setDoctorList] = useState([])
    useEffect(() =>{
      const fetchDoctorBySpecialism = async () => {
        await Axios.post('http://localhost:3005/getDoctorBySpecialism', {specialisationID: specialisationID
        }).then((response) => {
          let data = Object.values(JSON.parse(JSON.stringify(response.data)));
          setDoctorList(data)
        })
      }
      fetchDoctorBySpecialism()
    }, [setDoctorList])

    const [showAddModal, setShowAddModal] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [doctorID, setDoctorID] = useState("")

    const toggleTrueFalseAdd = () => {
        setShowAddModal(handleShowAdd);
    }

    const AddModalContent = () => {
        const [valueDate, onChangeDate] = useState("" );
        const [value, onChange] = useState("");

        return (
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="addMode" >
                            <Form.Label>Preferred Mode</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="online">Online Consultation</option>
                                <option value="visit">Visit Clinic</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addDate" >
                            <Form.Label>Preferred Date</Form.Label>
                            <DatePicker onChange={onChangeDate} value={valueDate} />
                            <Form.Control type="hidden" defaultValue={valueDate}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addTime" >
                            <Form.Label>Preferred Time</Form.Label>
                            <TimePicker onChange={onChange} value={value} />
                            <Form.Control type="hidden" defaultValue={value}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addPurpose" >
                            <Form.Label>Purpose of Visit</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Purpose of Visit"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
                    <Button variant="primary" onClick={registerAppointment}>Proceed</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const onClick = (e) =>{
        const value1 = e.currentTarget.getAttribute("data-value1")
        setDoctorID(value1);
        toggleTrueFalseAdd();
    }

    const registerAppointment =()=> {
        let prefMode = document.getElementById('addMode').value;
        let prefDate = document.getElementById('addDate').value;
        let prefTime = document.getElementById('addTime').value;
        let purpose = document.getElementById('addPurpose').value;
        let docID = doctorID;

        prefDate = moment(prefDate).utc().format('YYYY-MM-DD')

        Axios.post("http://localhost:3005/registerAppointment",
            {
                appointmentType: prefMode,
                appointmentDate: prefDate,
                appointmentTime: prefTime,
                purpose: purpose,
                doctorID : docID,
            }).then((response)=> {
            alert(response.data.message);
        });
        handleCloseAdd();
    };

    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />
            <div className="pt-lg-5"/>
            <h1 className="specialList-h1-style" style={{marginLeft : '10%'}}>List of Gynecologist Doctors</h1>

            {doctorList.map((item, index) =>{
                return(
                    <Card key={index} style={{ width: '80%', height: 'auto'}}>
                        <Card.Body>
                            <Card.Title>{item.doctorName}</Card.Title>
                            <Card.Text>
                                <b>Specialisation: </b> {item.specialisationName} <br />
                                <b>Years of experience: </b> {item.year} years<br />
                                <b>Qualifications: </b> {item.qualifications}<br />
                                <b>Condition Consulted: </b><br />{item.conditionConsulted}
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link>
                                <button className="btn btn-primary mb-3 float-end" onClick={onClick} data-value1={item.doctorID} >Book Appointment</button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}
            {showAdd ? <AddModalContent /> : null}
        </div>
    );
}

export default Gynecologist;