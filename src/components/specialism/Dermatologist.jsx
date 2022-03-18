import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, Col, Row} from "react-bootstrap";
import image1 from "../../assets/login_page.jpg";
import {Link} from "react-router-dom";

function Dermatologist() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
        <Navbar />

        <h1 style={{padding: '40px', color: 'blue'}}>List of Dermatologist Doctors</h1> 
         
        <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Nur Ashikin Ahmad</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 19 years</h6>
  <h6><b>Qualifications:</b> MD (UPM), MRCP (UK) Advance Master Dermatology (UKM)</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Puan Sri Datuk Dr Suraiya Hani Hussain</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 45 years</h6>
  <h6><b>Qualifications:</b> MBBS (UM), MRCP (UK), FRCP (UK), DIP (DERMATOLOGY) (UK)</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
    
 </Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Tan Leng Leng</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 23 years</h6>
  <h6><b>Qualifications:</b> MBBS (UM) , MRCP (UK) , FRCP (Edinburgh) , AM (Mal) , Advanced Master of Dermatology (UKM)</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Lee Yin Yin</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 25 years</h6>
  <h6><b>Qualifications:</b> Master of Medicine , University of Malaya, 2005, Advanced Masters in Dermatology, University Kebangsaan Malaysia, 2009</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Gangaram Hemandas</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 45 years</h6>
  <h6><b>Qualifications:</b> MBBS (Malaya) , MRCP (UK) , MRCP (Ireland) , FRCP (London) , M. Med (UKM) , Dip in Dermatology (London) , Dip Ven (London) , FAAD (USA) , FAMM ,</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Bong Jan Ling</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 30 years</h6>
  <h6><b>Qualifications:</b>MB ChB (Dundee), MMed Sci (Nottingham), FRCP (UK), CCST (UK)</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dato Dr Noor Zalmy Azizan</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 29 years</h6>
  <h6><b>Qualifications:</b> MB Bch (NUI) , MRCP (UK) , AdvDerm (UKM)</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Irene Lee Chew Kek</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Dermatologist </h6>
  <h6><b>Years of experience:</b> 23 years</h6>
  <h6><b>Qualifications:</b> MBBS (UM), MRCP (UK), AM (M'sia), Advanced M Dermatology (UKM), Diploma in Aesthetic Medicine AAAM (US),
   Fellowship in Dermatologic Laser Surgery (Thailand)</h6>
  <h6><b>Condition Consulted:</b>Impetigo, Dowling-Degos Disease, Palmoplantar Keratoderma, Erysipelas, Sweaty Palms, Nail Disorders, Psoriasis,
   Dull Skin, Mycosis Fungoides, Sarcoidosis, Piebaldism, Leprosy, Onchocerciasis, Seborrhea, Latex Allergy, Cutis Laxa, Fabry Disease, Varicose Veins, 
   Disseminated Superficial Actinic Porokeratosis, Broken Nails and Scarred Skin</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>
</div>
  );
}

 export default Dermatologist;