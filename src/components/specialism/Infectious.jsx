import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import {Card, Col, Row} from "react-bootstrap";
import image1 from "../../assets/login_page.jpg";
import {Link} from "react-router-dom";
function Infectious() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
        <Navbar />

        <h1 style={{padding: '40px', color: 'blue'}}>List of Infectious Illness Doctors</h1>
         
        <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Shirley Tan Lan Eng</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b> 24 years</h6>
  <h6><b>Qualifications:</b> MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH),
   FRCS  Glasgow , Fellowship in Uro Oncology (Australia)</h6>
  <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Nurul Yaqeen Mohd Esa</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  23 Years</h6>
  <h6><b>Qualifications:</b>MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Urologist (M’sia) , FRCS (Glasg) , Fellow Laparoscopic Surgery (India) ,
   Fellowship in Infection (Austria)</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Usha Rani George</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  40 Years</h6>
  <h6><b>Qualifications:</b>MBBS(Mal), FRCS(Glasgow), AM(Mal)</h6>
  <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>


      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Mohammed Fauzi Abdul Rani</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  31 Years</h6>
  <h6><b>Qualifications:</b>MBBS (UM), MS (UKM), MMed Surgery (S'pore), FRCS (UK), Board of Urology (M'sia), Fellowship in Uro-Oncology (Australia)</h6>
  <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Rosmadi Ismail</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  33 Years</h6>
  <h6><b>Qualifications:</b>MBBS, FRCS (Edin), FRCS (Glasgow), FRCS Urology (Glasgow), M.B.U. Urology (Mal), AM (Mal) Fellowship in Urology and Incontinence surgery (Bristol, U.K.),
   Certificate in Urodynamics (Bristol), Urology Board Certificate (Mal)</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Lim Boon Khaw</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  23 Years</h6>
  <h6><b>Qualifications:</b>MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Urologist (M’sia) , FRCS (Urology) (Glasg) , Fellow Laparoscopic Surgery (India) ,
   Fellowship in Urology (Austria)</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      
      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Soo Chun Ian</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  26 Years</h6>
  <h6><b>Qualifications:</b>MB BCh BAO (Ireland), FRCS (Urol) Glasgow,
   Certified Urologist (MBU)</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>

      
      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Daniel Lee Keat Chye</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  34 Years</h6>
  <h6><b>Qualifications:</b>MBBS (RGN), MASTER OF SURGERY (UM), FRCS (EDINBURGH), ADVANCED MASTER IN UROLOGY (UKM),
   MALAYSIAN BARD CERTIFIED UROLOGIST</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>
      
      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Chua Chong Beng</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  23 Years</h6>
  <h6><b>Qualifications:</b>BMBS (Nottingham), DM (Nottingham),
   FRCS(Edin), FRCSed (Urology)</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>
      
      <Card style={{ width: '100rem', height: '20rem'}}>
<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
<Card.Body>
<Card.Title>Dr Kow Ken Siong</Card.Title>
<Card.Text>
  <h6><b>Specialisation:</b> Infectious</h6>
  <h6><b>Years of experience:</b>  21 Years</h6>
  <h6><b>Qualifications:</b>MBBS (IMU), MRCS (Edinburgh), MS (UKM), FRCS(Urol) (Glasgow), Malaysian Board of Urology Certified Urologist, Fellowship in Urology (Melbourne),
   SUO Fellowship in Uro-Oncology (Toronto)</h6>
   <h6><b>Condition Consulted:</b> Non-Small Cell Lung Cancer, Bronchitis, Lung Fibrosis, General Medicine (e.g. Hypertension Diabetes Mellitus Congestive Heart Failure etc.), 
  Breathing Problems, Sleep Disorders, Sleep Disturbance, Smoking Cessation, Bronchiectasis, Tuberculosis & Pneumonia, Tuberculosis and Lung Tumor, Pulmonary Alveolar Microlithiasis,
   Birt-Hogg-Dube Syndrome, Silicosis, Small Cell Lung Cancer, Pulmonary Hypertension, Cough In Children, Hypoperfusion, Pulmonary Alveolar Proteinosis, Empyema Thoracis</h6>
</Card.Text>
</Card.Body>

<Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
</Card.Body>
      </Card>
</div>
);
}

export default Infectious;