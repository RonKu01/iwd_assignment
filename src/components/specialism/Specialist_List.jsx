import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "./Speciality_List.scss";
import {Card, Container, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import axios from "axios";

function Specialist_List() {

    const [specialismItems, setSpecialismItems] = useState([])
    useEffect(() =>{
        const fetchSpecialismList = async () => {
            const {data} = await axios('http://localhost:3005/getSpecialism')
            setSpecialismItems(data)
        }
        fetchSpecialismList()
    }, [setSpecialismItems])



    return (
        <div className="body-dashboard">
            <Navbar />
            <h1 className= "specialList-h1-style">Choose Your Specialist</h1>

            <Row xl={3} lg={3}  className="g-1">

                {specialismItems.map((item, index) =>{
                    return(
                        <Col lg={true} key={index}>
                            <Card className="card-new">
                                <Link className="link-nostyle" to={"/" + item.specialisationName}>
                                    <Card.Img variant="top"  height="180" />
                                    <Card.Body>
                                        <Card.Title>{item.specialisationName}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default Specialist_List;


