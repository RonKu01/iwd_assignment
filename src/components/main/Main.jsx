import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import "./Main.scss";

class Main extends Component{
    render() {
        return (
            <div className="body-container">
                <Navbar />
                <main>
                    <Card className="card">
                        <Card.Body class="card-body">
                            <Card.Text className="title-text">
                                Welcome to <br/>MedCare
                            </Card.Text>
                            <Button variant="primary" href="/login">Login Here!    </Button> <Button variant="primary" href="/register">Register Now!</Button>
                        </Card.Body>
                    </Card>
                </main>
            </div>
        );
    }
}

export default Main;