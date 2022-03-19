import React, {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar_Patient";
import "./Speciality_List.scss";
import {Card, Container, Col, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom"

function Specialist_List() {
    return (
        <div className="body-dashboard">
            <Navbar />
            <h1 style={{padding: '40px', color: 'blue'}}>Choose Your Specialist</h1>

            <Row xl={3} lg={3}  className="g-1">
                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/psychiatrist"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>Psychiatrist</Card.Title>
                            <Card.Text>
                                Psychiatry is the medical specialty devoted to the study, diagnosis,
                                treatment, and prevention of mental disorders, among which are affective, behavioural,
                                cognitive and perceptual abnormalities.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                        <Link to={"/urologist"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>Urologist</Card.Title>
                            <Card.Text>
                                Urology, also known as genitourinary surgery, is the branch of
                                medicine that focuses on surgical and medical diseases of the male and female
                                urinary-tract system and the male reproductive organs.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/dermatologist"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>Dermatologist</Card.Title>
                            <Card.Text>
                                A dermatologist is a doctor who specializes in conditions
                                involving the skin, hair, and nails. A dermatologist can identify and treat more than 3,000 conditions.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>
                 
                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/gastro"}>
                        <Card.Img variant="top"   height="180" />
                        <Card.Body>
                            <Card.Title>Gastroenterologist</Card.Title>
                            <Card.Text>
                                Gastroenterologists are doctors who are
                                trained to diagnose and treat problems in your gastrointestinal (GI) tract and liver.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/infectious"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>Infectious diseases</Card.Title>
                            <Card.Text>
                                An Infectious disease doctor
                                is a board-certified MD or DO physician that treats acute and chronic infections caused by bacteria, parasites,
                                fungi and viruses, including COVID-19.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/fertality"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>Gynecologist</Card.Title>
                            <Card.Text>
                                Gynecologists give reproductive and
                                sexual health services that include pelvic exams, Pap tests, cancer screenings, and testing and treatment
                                for vaginal infections.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/otolaryn"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>ENT Specialist</Card.Title>
                            <Card.Text>
                                An ENT specialist or otolaryngologist
                                is a doctor who specializes in problems and diseases of the ear, nose and throat.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/fertality"}>
                        <Card.Img variant="top"  height="180" />
                        <Card.Body>
                            <Card.Title>Fertility Specialist</Card.Title>
                            <Card.Text>
                                Fertility specialist
                                are specialist that you consult with right medical expert for your fertility issues.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col lg={true}>
                    <Card className="card-new">
                    <Link to={"/orthopedeic"}>
                        <Card.Img variant="top" height="180" />
                        <Card.Body>
                            <Card.Title>Orthopedics</Card.Title>
                            <Card.Text>
                                Orthopedic surgeons are doctors who specialize in the
                                musculoskeletal system - the bones, joints, ligaments, tendons, and muscles.
                            </Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Specialist_List;


