import React from "react";
import Navbar from "../navbar/Navbar_Patient";
import "../dashboard/dashboard.scss";
import { Card} from "react-bootstrap";
import {Link} from "react-router-dom"

function Gastro() {
    return (
        <div className="body-container" style={{backgroundImage: 'none', backgroundColor: 'white'}}>
            <Navbar />

            <h1 style={{padding: '40px', color: 'blue'}}>List of Urologist Doctors</h1>
             
            <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Hemanth Kumar Ramasamy</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b> 24 years</h6>
      <h6><b>Qualifications:</b> MBBS (MAHE) , M.Surgery (UKM) , CMIA (NIOSH) , Board Certified Urologist (M’sia) ,
       FRCS (Urology) Glasgow , Fellowship in Uro Oncology (Australia)</h6>
      <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>

          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Muhilan Parameswaran</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  23 Years</h6>
      <h6><b>Qualifications:</b>MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Urologist (M’sia) , FRCS (Urology) (Glasg) , Fellow Laparoscopic Surgery (India) ,
       Fellowship in Urology (Austria)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>

          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Lim Chei Seng</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  40 Years</h6>
      <h6><b>Qualifications:</b>MBBS(Mal), FRCS(Glasgow), AM(Mal)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>


          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dato' Dr Selvalingam Sothilingam</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  31 Years</h6>
      <h6><b>Qualifications:</b>MBBS (UM), MS (UKM), MMed Surgery (S'pore), FRCS (UK), Board of Urology (M'sia), Fellowship in Uro-Oncology (Australia)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
  </Card.Body>
          </Card>

          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Rajeentheran Suntheralingam</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  33 Years</h6>
      <h6><b>Qualifications:</b>MBBS, FRCS (Edin), FRCS (Glasgow), FRCS Urology (Glasgow), M.B.U. Urology (Mal), AM (Mal) Fellowship in Urology and Incontinence surgery (Bristol, U.K.),
       Certificate in Urodynamics (Bristol), Urology Board Certificate (Mal)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>

          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Muhilan Parameswaran</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  23 Years</h6>
      <h6><b>Qualifications:</b>MBBS (India) , FAGE (Manipal) , MRCS (Edin) , M.S (Malaya) , Board Certified Urologist (M’sia) , FRCS (Urology) (Glasg) , Fellow Laparoscopic Surgery (India) ,
       Fellowship in Urology (Austria)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>

          
          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Badrulhisham Bahadzor</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  26 Years</h6>
      <h6><b>Qualifications:</b>MB BCh BAO (Ireland), FRCS (Urol) Glasgow,
       Certified Urologist (MBU)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
    <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>
  
    </Card.Body>
          </Card>

          
          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Thi Ha Htun</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  34 Years</h6>
      <h6><b>Qualifications:</b>MBBS (RGN), MASTER OF SURGERY (UM), FRCS (EDINBURGH), ADVANCED MASTER IN UROLOGY (UKM),
       MALAYSIAN BARD CERTIFIED UROLOGIST</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
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
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  23 Years</h6>
      <h6><b>Qualifications:</b>BMBS (Nottingham), DM (Nottingham),
       FRCS(Edin), FRCSed (Urology)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>
          
          <Card style={{ width: '100rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Dr Tan Guan Hee</Card.Title>
    <Card.Text>
      <h6><b>Specialisation:</b> Urologist</h6>
      <h6><b>Years of experience:</b>  21 Years</h6>
      <h6><b>Qualifications:</b>MBBS (IMU), MRCS (Edinburgh), MS (UKM), FRCS(Urol) (Glasgow), Malaysian Board of Urology Certified Urologist, Fellowship in Urology (Melbourne),
       SUO Fellowship in Uro-Oncology (Toronto)</h6>
       <h6><b>Condition Consulted:</b> Penis Pain, Vesicoureteral Reflux, Men's health and Infertility, Loss Of Libido, Blood In Urine, Hematuria, Low Sperm Count,
       Delayed Ejaculation, Urinary Tract Problems, Prostate Cancer, Urine Stone, Erection Problems, Inguinal Hernia, Urinary Bladder Cancer, Prostate Diseases, Kidney Stones,
       Chancroid, Obstruction While Urinating, Male Fertility, STD, Candidiasis, BPH and Testicular Cancer </h6>
    </Card.Text>
  </Card.Body>

  <Card.Body>
    
  <Card.Link ><Link to={"/book_appointment"} activeStyle={{color:"white"}}>Book Appointment</Link></Card.Link>

  </Card.Body>
          </Card>
    </div>
    );
}

export default Gastro;