import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, CardGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";



function Patient_Profile() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />
         <h1 style={{padding: '40px', color: 'blue'}}>Welcome To Your Profile</h1>
          
         <CardGroup  style={{ width: '100rem', height: '20rem', margin: '75px 150px'}}> 
  <Card style={{backgroundImage: 'none', backgroundColor: 'white'}}>
    <Card.Img variant="top" src="holder.js/100px160"/>
    <Card.Body>
      <Card.Title>View History</Card.Title>
      <Card.Text>
        View your past Medical History here.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <Button style={{width: '500px'}} href="#">View History</Button>

    </Card.Footer>

  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>View Appointments</Card.Title>
      <Card.Text>
        View your future Appointment here.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <Button style={{width: '500px'}}> <Link to={"/book_appointment"} activeStyle={{color:"white"}}>View Appointment</Link></Button>

    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Chat</Card.Title>
      <Card.Text>
     View an available Chat with your doctors here.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

   <Button style={{width: '500px'}} href="#">View Chat</Button>

    </Card.Footer>
  </Card>
</CardGroup>
             




        </div>
    );
}

export default Patient_Profile;