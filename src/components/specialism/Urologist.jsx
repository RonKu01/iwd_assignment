import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, Col, Row} from "react-bootstrap";
import Axios from "axios";

function Urologist() {
    let specialisationID = 2;
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

    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

            <h1 className= "specialList-h1-style">List of Urologist Doctors</h1>

            {doctorList.map((item, index) =>{
                return(
                    <Card style={{ width: '100rem', height: '20rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
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
                                <button className="btn btn-primary mb-3 float-end">Book Appointment</button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>


    );
}

export default Urologist;