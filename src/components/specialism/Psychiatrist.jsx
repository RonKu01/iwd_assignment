import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Alert, Button, Card, Form, Modal} from "react-bootstrap";
import Axios from "axios";
import axios from "axios";
import DatePicker from 'react-date-picker';


function Psychiatrist() {

  let specialisationID = 1;
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

    const [specialismItems, setSpecialismItems] = useState([])
    useEffect(() =>{
        const fetchSpecialismList = async () => {
            const {data} = await axios('http://localhost:3005/getSpecialism')
            setSpecialismItems(data)
        }
        fetchSpecialismList()
    }, [setSpecialismItems])

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


    const registerAppointment =()=> {

      // let docSpec = document.getElementById('addDocSpec').value;
      // let docFullName = document.getElementById('addDocFullName').value;
      // let docYear = document.getElementById('addDocYear').value;
      
      let patName = document.getElementById('addPatName').value;
      let prefMode = document.getElementById('addMode').value;
      let prefDate = document.getElementById('addDate').value;
      let prefTime = document.getElementById('addTime').value;
      let purpose = document.getElementById('addPurpose').value;

      // let docUsername = document.getElementById('addDocUsername').value;
      // let docPassword = document.getElementById('addDocPassword').value;

      // let docQualification = document.getElementById('addDocQualification').value;
      // let docCondition = document.getElementById('addDocCondition').value;

      Axios.post("http://localhost:3005/docRegister",
          {
              // username: docUsername,
              // password: docPassword,
              // specialisationID: docSpec,
              // doctorName: docFullName,
              // year: docYear,
              // qualifications: docQualification,
              // conditionConsulted: docCondition,
              //book appointment
              patName: patName,
              appointmentType: prefMode,
              appointmentDate: prefDate,
              appointmentTime: prefTime,
              purpose: purpose,
          }).then((response)=> {
          setShowAlert(true);
          setTimeout(() => { window.location.href = "/doctor"; }, 2000);
      });
      handleCloseAdd();
  };

  // const updateDoc =() =>{
  //     let loginId = document.getElementById('updateDocLoginID').value;
  //     let docName = document.getElementById('updateFullName').value;
  //     let docSpec = document.getElementById('updateDocSpec').value;
  //     let docYear = document.getElementById('updateDocYear').value;
  //     let docQualification = document.getElementById('updateDocQualification').value;
  //     let docCondition = document.getElementById('updateDocCondition').value;
  //     let docPassword = document.getElementById('updateDocPassword').value;

  //     Axios.put("http://localhost:3005/updateDoc",
  //         {
  //             specialisationID: docSpec,
  //             doctorName : docName,
  //             year: docYear,
  //             qualifications : docQualification,
  //             conditionConsulted : docCondition,
  //             password: docPassword,
  //             id: loginId})
  //         .then((response)=> {
  //             setShowAlert(true);
  //             setTimeout(() => { window.location.href = "/doctor"; }, 2000);
  //         });
  //     handleCloseEdit();
  // };
  


    const toggleTrueFalseAdd = () => {
      setShowAddModal(handleShowAdd);
  }
  const toggleTrueFalseEdit = () => {
      setShowEditModal(handleShowEdit);
  }

  const AddModalContent = () => {
    const [value, onChange] = useState(new Date());
    return (
            <Modal show={showAdd} onHide={handleCloseAdd}>
            <Modal.Header closeButton>
                <Modal.Title>Book Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="formPatName" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" id="addPatName"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMode" >
                        <Form.Label>Prefered Mode</Form.Label>
                        <Form.Select aria-label="Default select example" id="addMode">
                        {/* <option>Open this select menu</option>    */}
                              <option value="online">Online Consultation</option>
                              <option value="visit">Visit Clinic</option>                          
                          </Form.Select>
                    </Form.Group>
                <Form>
                    <Form.Group className="mb-3" controlId="formDate" >
                        <Form.Label>Prefered Date</Form.Label>
                        {/* <Form.Select aria-label="Default select example" id="addDate"> */}
                        <DatePicker onChange={onChange} value={value} />
                          {/* <HelpBlock>Help</HelpBlock> */}
                        {/* </Form.Select> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTime" >
                        <Form.Label>Prefered Time</Form.Label>
                        <Form.Select aria-label="Default select example" id="addTime">
                        <option>Open this select menu</option>
                            {
                              
                            }
                          </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPurpose" >
                        <Form.Label>Purpose of Visit</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Purpose of Visit" id="addPurpose"/>
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

// const EditModalContent = () => {
//     return (
//         <Modal show={showEdit} onHide={handleCloseEdit}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Update Doctor</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Control type ="hidden" id="updateDocLoginID" defaultValue={editModalInfo.loginID} />
//                     <Form.Group className="mb-3" controlId="formFullName" >
//                         <Form.Label>Full Name</Form.Label>
//                         <Form.Control type="text" id="updateFullName" defaultValue={editModalInfo.doctorName} />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formDocSpec" >
//                         <Form.Label>Specialisation</Form.Label>
//                         <Form.Select aria-label="Default select example" id="updateDocSpec">
//                             <option value={editModalInfo.specialisationID}>{editModalInfo.specialisationName} (Default)</option>
//                             {
//                                 specialismItems.map(specialism => (
//                                     <option key={specialism.specialisationID} value={specialism.specialisationID}>{specialism.specialisationName}</option>
//                                 ))
//                             }
//                         </Form.Select>
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formDocYear" >
//                         <Form.Label>Year of Experience</Form.Label>
//                         <Form.Control type="text" id="updateDocYear" defaultValue={editModalInfo.year} />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formDocYear" >
//                         <Form.Label>Qualifications</Form.Label>
//                         <Form.Control as="textarea" rows={3} id="updateDocQualification" defaultValue={editModalInfo.qualifications} />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formDocYear" >
//                         <Form.Label>Condition Consulted</Form.Label>
//                         <Form.Control as="textarea" rows={7} id="updateDocCondition" defaultValue={editModalInfo.conditionConsulted} />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formPassword" >
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type={showPass ? "password" : "text"} placeholder="Password" id="updateDocPassword" defaultValue={editModalInfo.password} />
//                     </Form.Group>
//                 </Form>

//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
//                 {/* <Button variant="primary" onClick={updateDoc}>Save Changes</Button> */}
//             </Modal.Footer>
//         </Modal>
//     )
// }

const AlertModalContent = () =>{
    return(
        <Alert show={showAlert} variant="success">
            <Alert.Heading>Success! </Alert.Heading>
            <p>Updating Table... Please Wait!</p>
        </Alert>
    )
}

    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

            <h1 className= "specialList-h1-style">List of Psychiatrist Doctors</h1>

            {doctorList.map((item, index) =>{
                return(
                    <Card style={{ width: '100rem', height: '20rem'}}>
                      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                      <Card.Body>
                      {showAlert ? <AlertModalContent /> : null}
                        <Card.Title>{item.doctorName}</Card.Title>
                        <Card.Text>
                          <h6><b>Specialisation: </b> {item.specialisationName}</h6>
                          <h6><b>Years of experience: </b> {item.year} years</h6>
                          <h6><b>Qualifications: </b> {item.qualifications}</h6>
                          <h6><b>Condition Consulted: </b>{item.conditionConsulted}</h6>
                          </Card.Text>
                      </Card.Body>

                      <Card.Body>
                        <Card.Link >
                          <button className="btn btn-primary mb-3 float-end" onClick={toggleTrueFalseAdd}>Book Appointment</button>
                          
                        </Card.Link>
                      </Card.Body>
                    </Card>
                )
            })}
            {/* {showEdit ? <EditModalContent /> : null} */}
            {showAdd ? <AddModalContent /> : null}
    </div>


    );
}

export default Psychiatrist;
