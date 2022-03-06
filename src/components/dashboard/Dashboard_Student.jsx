import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "./dashboard.scss";
import {Card, Container, Col, Row, Table, Button} from "react-bootstrap";
import image1 from "../../assets/login_page.jpg";

function Dashboard_Patient() {
    return (
        <div className="body-dashboard">
            <Navbar />
            <Row xl={3} className="g-1">
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1} height="180" />
                        <Card.Body>
                            <Card.Title>Psychiatrist</Card.Title>
                            <Card.Text>
                                Psychiatry is the medical specialty devoted to the study, diagnosis,
                                treatment, and prevention of mental disorders, among which are affective, behavioural,
                                cognitive and perceptual abnormalities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Urologist</Card.Title>
                            <Card.Text>
                                Urology, also known as genitourinary surgery, is the branch of
                                medicine that focuses on surgical and medical diseases of the male and female
                                urinary-tract system and the male reproductive organs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Dermatologist</Card.Title>
                            <Card.Text>
                                A dermatologist is a doctor who specializes in conditions
                                involving the skin, hair, and nails. A dermatologist can identify and treat more than 3,000 conditions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Gastroenterologist</Card.Title>
                            <Card.Text>
                                Gastroenterologists are doctors who are
                                trained to diagnose and treat problems in your gastrointestinal (GI) tract and liver.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Infectious diseases</Card.Title>
                            <Card.Text>
                                An Infectious disease doctor
                                is a board-certified MD or DO physician that treats acute and chronic infections caused by bacteria, parasites,
                                fungi and viruses, including COVID-19.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Gynecologist</Card.Title>
                            <Card.Text>
                                Gynecologists give reproductive and
                                sexual health services that include pelvic exams, Pap tests, cancer screenings, and testing and treatment
                                for vaginal infections.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>ENT Specialist</Card.Title>
                            <Card.Text>
                                An ENT specialist or otolaryngologist
                                is a doctor who specializes in problems and diseases of the ear, nose and throat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Fertility Specialist</Card.Title>
                            <Card.Text>
                                Fertility specialist
                                are specialist that you consult with right medical expert for your fertility issues.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image1}  height="180" />
                        <Card.Body>
                            <Card.Title>Orthopedics</Card.Title>
                            <Card.Text>
                                Orthopedic surgeons are doctors who specialize in the
                                musculoskeletal system - the bones, joints, ligaments, tendons, and muscles.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard_Patient;


