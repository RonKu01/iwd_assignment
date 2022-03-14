import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/main/Main.scss";
import {Card, Col, Row} from "react-bootstrap";
import image2 from "../assets/psychiatrist.jpg";
import image3 from "../assets/Urologist.jpg";
import image4 from "../assets/Dermatologist.jpg";
import image5 from "../assets/gastro.jpg";
import image6 from "../assets/Infectious.jpg";
import image7 from "../assets/gynaecologist.jpg"
import image8 from "../assets/Otolaryngologist (ENT).jpg";
import image9 from "../assets/ferality.jpg";
import image10 from "../assets/orthopedic.jpg";


function About() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />
            <Row xl={3} className="g-1">
                <Col lg={true}>
                    <Card className="card-new">
                        <Card.Img variant="top" src={image2} height="180" />
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
                        <Card.Img variant="top" src={image3}  height="180" />
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
                        <Card.Img variant="top" src={image4}  height="180" />
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
                        <Card.Img variant="top" src={image5}  height="180" />
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
                        <Card.Img variant="top" src={image6}  height="180" />
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
                        <Card.Img variant="top" src={image7}  height="180" />
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
                        <Card.Img variant="top" src={image8}  height="180" />
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
                        <Card.Img variant="top" src={image9}  height="180" />
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
                        <Card.Img variant="top" src={image10}  height="180" />
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

export default About;


