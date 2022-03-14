import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import { Carousel} from "react-bootstrap";
import image1 from "../assets/doctors_background.jpg";

function Psychiatrist() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

            <h1>List of Psychiatrist Doctors</h1>
             
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
    src= {image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
          </Carousel>

        
    </div>
    );
}

export default Psychiatrist;
