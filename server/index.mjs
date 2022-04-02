import express from "express";
import mysql from "mysql";
import jwt from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcrypt";
const saltRounds = 10;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ["http://localhost:3000"],
        //Only allow to use get, post, and put method
        methods: ["GET", "POST", "PUT"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        key: "userID",
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    host: "sql6.freemysqlhosting.net", //"localhost",
    user: "sql6479845", //"root",
    password: "bdiIe3fDLc", //"",
    database: "sql6479845",
});

//Declare session variable
let sess, sess_loginId, sess_appointmentId;

// Print Hello World (testing)
app.get('/', (req,res)=>{
    res.send("hello world");
})

// API to set the session variable when users logged in.
app.get("/login", (req, res) => {
    if (sess === true) {
        res.send({ loggedIn: true, loginID: sess_loginId });
    } else {
        res.send({ loggedIn: false });
    }
});

//API to check whether user credentials is valid or not. (Login Function)
app.post("/login", ( req, res) =>{
    sess = req.session;
    sess_loginId = req.session.loginId;

    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM login WHERE username = ?",
        [username],
        (err, result) => {
            if (err){
                res.send({err: err})
            }

            if (result.length > 0){
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        sess = true;
                        sess_loginId = result[0].loginID;
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong username/password combination!" });
                    }
                })
            }else{
                res.send({message: "User doesn't exist!"})
            }
        }
    );
});

//API to clear session variable (Logout function)
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        sess = null;
        sess_loginId = null;
        res.send("Successfully Log Out !");

        if(err){
            return console.log(err);
        }
    })
})

//API to get all patient data
app.get('/getPatData', (req,res)=>{
    db.query("SELECT * FROM `login` INNER JOIN `patient` ON login.loginID = patient.loginID ORDER BY login.loginID ASC",

        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

//API to call a post request to store patient data into database (Register Patient Account Function)
app.post("/patRegister", (req, res)=>{
    const fullName = req.body.fullName
    const dob = req.body.dob
    const address = req.body.address
    const username = req.body.username
    const password = req.body.password
    const role = "Patient"
    let loginID = 0;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query("SELECT * FROM `login` order by `loginID` DESC limit 1",
            function (err, result) {
                const data = Object.values(JSON.parse(JSON.stringify(result)));
                loginID = data[0].loginID + 1;
            }
        );

        db.query("INSERT INTO login (username, password, role) VALUES (?, ?, ?)",
            [username, hash, role], (err, result) => {

                if (err) {
                    res.send({message: "System: Failed to insert !"})
                } else {
                    db.query("INSERT INTO patient (loginID, patName, patDob, patAddress) VALUES (?, ?, ?, ?)",
                        [loginID, fullName, dob, address], (err, result) => {
                            if (err) {
                                res.send({message: "Failed to register !"})
                            } else {
                                res.send({message: "Successfully Registered! Please Login!"})
                            }
                        }
                    );
                }
        });
    });
});

//API to call a put request to update patient data into database (Update Patient Profile Function)
app.put("/updatePat",(req, res)=>{
    const id = req.body.id
    const address = req.body.address
    const password = req.body.password

    db.query("UPDATE patient SET patAddress = ? WHERE loginID = ?",[address, id], (err, result)=> {
        if (err) {
            res.send({message: "System: Failed to update !"});
        } else {
            db.query("SELECT * FROM login WHERE loginID = ?", [id],
                (err, result) => {

                    if (password !== result[0].password){
                        bcrypt.hash(password, saltRounds, (err, hash) => {
                            db.query("UPDATE login SET password = ? WHERE loginID = ?", [hash, id], (err, result) => {
                                if (err) {
                                    res.send({message: "System: Failed to update!"});
                                } else {
                                    res.send({message: "System: Address & Password Update Successfully"});
                                }
                            })

                        });
                    } else {
                        res.send({message: "System: Address Update Successfully"});
                    }
                }
            );
        }
    })


})

//API to get all doctor data
app.get('/getDocData', (req,res)=>{
    db.query("SELECT * FROM `doctor` INNER JOIN `login` ON doctor.loginID = login.loginID INNER JOIN `specialisation` ON doctor.specialisationID = specialisation.specialisationID ORDER BY doctor.doctorID ASC",
        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

//API to call a post request to store Doctor data into database (Register Doctor Account Function)
app.post("/docRegister", (req, res)=>{
    const docSpec = req.body.specialisationID
    const docFullName = req.body.doctorName
    const docYear = req.body.year
    const username = req.body.username
    const password = req.body.password
    const qualifications = req.body.qualifications
    const condition = req.body.conditionConsulted
    const role = "Doctor"
    let loginID = 0;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query("SELECT * FROM `login` order by `loginID` DESC limit 1",
            function (err, result) {
                const data = Object.values(JSON.parse(JSON.stringify(result)));
                loginID = data[0].loginID + 1;
            }
        );

        db.query("INSERT INTO login (username, password, role) VALUES (?, ?, ?)",
            [username, hash, role], (err, result)=> {

                if(err){
                    res.send({message: "System: Failed to insert !"})
                }else {
                    db.query("INSERT INTO doctor (loginID, specialisationID, doctorName, year, qualifications, conditionConsulted) VALUES (?, ?, ?, ?, ?, ?)",
                        [loginID, docSpec, docFullName, docYear, qualifications, condition], (err, result) => {

                            if (err) {
                                res.send({message: "System: Failed to insert !"})
                            } else {
                                res.send({message: "System: Doctor Registered! Please Login"})
                            }
                        });
                }
            });
    });
});

//API to call a put request to update Doctor data into database (Update Doctor Profile Function)
app.put("/updateDoc",(req, res)=>{
    const id = req.body.id
    const docName = req.body.doctorName
    const docSpec = req.body.specialisationID
    const docYear = req.body.year
    const password = req.body.password
    const qualifications = req.body.qualifications
    const condition = req.body.conditionConsulted

    db.query("UPDATE doctor SET doctorName = ? , specialisationID = ? , year = ?, qualifications = ?, conditionConsulted = ? WHERE loginID = ?",
        [docName, docSpec, docYear, qualifications, condition,  id], (err, result)=>{
            if (err){
                res.send({message: "System: Failed to update !"});
            } else {
                db.query("SELECT * FROM login WHERE loginID = ?", [id],
                    (err, result) => {

                        if (password !== result[0].password){
                            bcrypt.hash(password, saltRounds, (err, hash) => {

                                if (err) {
                                    res.send({err: err})
                                }
                                db.query("UPDATE login SET password = ? WHERE loginID = ?", [hash, id],
                                    (err, result) => {
                                    if (err) {
                                        res.send({message: "System: Failed to update !"});
                                    } else {
                                        res.send({message: "System: Update Successfully"});
                                    }
                                })
                            })
                        } else {
                            res.send({message: "System: Update Successfully"});
                        }
                    }
                );


            }
        }
    )


})

//API to get all Specialism data
app.get('/getSpecialism', (req,res)=>{
    db.query("SELECT * FROM `specialisation` ORDER BY specialisation.specialisationID ASC",
        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

//API to get doctor data by filtering with doctor.loginId
app.get("/getPersonDoctorData", ( req, res) =>{
    db.query("SELECT * FROM login INNER JOIN doctor ON login.loginId = doctor.loginId INNER JOIN specialisation ON doctor.specialisationID = specialisation.specialisationID WHERE doctor.loginId = ?",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to get patient data by filtering with patient.loginId
app.get("/getPersonPatData", ( req, res) =>{
    db.query("SELECT * FROM login INNER JOIN patient ON login.loginId = patient.loginId WHERE patient.loginId = ?",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to get doctor data by filtering with doctor.SpecialismID
app.post("/getDoctorBySpecialism", ( req, res) =>{

    const specialisationID = req.body.specialisationID

    db.query("SELECT * FROM doctor INNER JOIN specialisation ON doctor.specialisationID = specialisation.specialisationID WHERE doctor.specialisationID = ?",
        [specialisationID],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to call a post request to store appointment data into database (Patient Book Appointment Function)
app.post("/registerAppointment", (req, res)=>{

    const loginID = sess_loginId
    const appointmentType = req.body.appointmentType
    const appointmentDate = req.body.appointmentDate
    const appointmentTime = req.body.appointmentTime
    const purpose = req.body.purpose
    const doctorID = req.body.doctorID
    const status = "Pending"
    let patID = ""

    db.query("SELECT * FROM patient WHERE patient.loginId = ?",
        [loginID],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }
             patID = result[0].patID

            db.query("INSERT INTO appointment (patID, doctorID, appointmentType, appointmentTime, appointmentDate, purpose, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [patID, doctorID, appointmentType, appointmentTime, appointmentDate, purpose, status], (err, result)=> {
                    if (err) {
                        res.send({message: "System Error: Failed to insert!"})
                    } else {
                        res.send({message: "Booking Successfully! Please check Appointment status at Homepage!"})
                    }
                }
            );
        }
    );
})

//API to get 'Pending' appointment data by filtering with appointment.status (status != Done And status != Canceled)
app.get("/getPatListByDoc", ( req, res) =>{
    db.query("SELECT * FROM appointment INNER JOIN doctor ON doctor.doctorID = appointment.doctorID  INNER JOIN patient ON appointment.patID = patient.patID WHERE doctor.loginId = ? AND status != 'Done' AND status != 'Cancelled' ORDER BY appointmentDate DESC",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to get Consultation history from database
app.get("/getConsultHistoryByDoc", ( req, res) =>{
    db.query("SELECT * FROM appointment INNER JOIN feedback ON feedback.appointmentID = appointment.appointmentID INNER JOIN doctor ON doctor.doctorID = appointment.doctorID  INNER JOIN patient ON appointment.patID = patient.patID INNER JOIN consultation ON consultation.appointmentID = appointment.appointmentID WHERE doctor.loginId = ? ORDER BY appointmentDate DESC",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to get 'Pending' appointment data by filtering with appointment.status (status != Done) AND patient.loginID
app.get("/getPatAppointment", ( req, res) =>{
    db.query("SELECT * FROM appointment INNER JOIN patient ON patient.patID = appointment.patID INNER JOIN doctor ON appointment.doctorID = doctor.doctorID  WHERE patient.loginId = ? AND status != 'Done' ORDER BY appointmentDate DESC",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to get meetingID (Patient Join Meeting Function)
app.get("/getPatAppointmentByAppointmentID", ( req, res) =>{

    db.query("SELECT * FROM appointment INNER JOIN patient ON patient.patID = appointment.patID  WHERE patient.loginId = ? AND appointment.appointmentID = ? ORDER BY appointmentDate DESC",
        [sess_loginId, sess_appointmentId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            res.send({ meetingID: result[0].meetingID });
        }
    );
});

//API to get patient data + appointment data for the doctor by filtering with doctor.loginID
app.get("/patient", ( req, res) =>{
    db.query("SELECT * FROM appointment INNER JOIN patient ON patient.doctorID = appointment.doctorID  INNER JOIN patient ON appointment.patID = patient.patID WHERE doctor.loginId = ? ORDER BY appointmentDate DESC",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to call a put request to update appointment status into database
app.put("/updateStatus",(req, res)=>{
    const status = req.body.status
    const appointmentID = req.body.appointmentID

    db.query("UPDATE appointment SET status = ? WHERE appointmentID = ?",
        [status, appointmentID], (err, result)=>{
            if (err){
                res.send({message: "System: Failed to update !"});
            } else {
                res.send({message: "System: Update Successfully"});
            }
        }
    )
})

//API to get the auto-generated tokenID
app.get("/get-token", (req, res) => {
    const API_KEY = "9c2d8fef-3ffd-494c-aa06-8f9d3c9ddb7a";
    const SECRET_KEY = "d618b715e8cc4d194288f8f3b4f73a33c7dc5b3b541b898a0f4802bb4ba4f59f";
    const options = { expiresIn: "10m", algorithm: "HS256" };
    const payload = {
        apikey: API_KEY,
        permissions: ["allow_join", "allow_mod", "ask_join"], // Trigger permission.
    };
    const token = jwt.sign(payload, SECRET_KEY, options);
    res.json({ token });
});

//API to set appointmentID to session.
app.put("/updateMeetingDetails",(req, res)=>{
    sess_appointmentId = req.body.appointmentID;
    res.send({message : "Success"});
})

//API to call a put request to update meetingID and token into database
app.put("/updateMeetingId",(req, res)=>{
    const token = req.body.token
    const meetingID = req.body.meetingID
    sess_appointmentId = req.body.appointmentID;

    db.query("UPDATE appointment SET meetingID = ?, token = ? WHERE appointmentID = ?",
        [meetingID, token, sess_appointmentId], (err, result)=>{
            if (err){
                res.send({message: "System: Failed to update !"});
            } else {
                res.send({message: "System: Update Successfully"});
            }
        }
    )
})

//API to get appointmentId from the session(appointmentID)
app.get("/getMeetingDetails", (req, res) => {
    res.send({ appointmentId: sess_appointmentId });
});

//API to check whether the MeetingID is exist or not
app.post("/getMeetingDetails", ( req, res) =>{
    const appointmentId = req.body.appointmentId

    db.query("SELECT * FROM appointment WHERE appointmentID = ? ORDER BY appointmentDate DESC",
        [appointmentId],
        (err, result) => {
            if (err){
                res.send({err: err})
            }

            if (result.length > 0){
                res.send(result);
            }else{
                res.send({message: "Appointment doesn't exist!"})
            }
        }
    );
});

//API to call a post request to store diagnosis and treatment data into database (Doctor Submit Consultation Form Function)
app.post("/addConsultation", ( req, res) =>{
    const appointmentId = sess_appointmentId;
    const dignosis = req.body.diagnosis;
    const treatment = req.body.medication;
    const status = "Done";

    db.query("INSERT INTO consultation (appointmentID, dignosis, treatment) VALUES (?, ?, ?)",
        [appointmentId, dignosis, treatment], (err, result)=> {
            if (err) {
                res.send({message: "System Error: Failed to insert!"})
            } else {
                db.query("UPDATE appointment SET status = ? WHERE appointmentID = ?",
                    [status, appointmentId], (err, result)=>{
                        if (err){
                            res.send({message: "System: Failed to update !"});
                        } else {
                            db.query("INSERT INTO feedback (appointmentID) VALUES (?)",
                                [appointmentId], (err, result)=> {
                                    if (err) {
                                        res.send({message: "System Error: Failed to insert!"})
                                    } else {
                                        res.send({message: "System: Submitted Successfully"});
                                    }
                                }
                            );
                        }
                    }
                )
            }
        }
    );
});

//API to get 'Done' appointment data by filtering with patient.loginID
app.get("/getPatAppointmentDone", ( req, res) =>{
    db.query("SELECT * FROM appointment INNER JOIN feedback ON feedback.appointmentID = appointment.appointmentID INNER JOIN patient ON patient.patID = appointment.patID INNER JOIN doctor ON appointment.doctorID = doctor.doctorID INNER JOIN consultation ON consultation.appointmentID = appointment.appointmentID  WHERE patient.loginId = ? AND status = 'Done' ORDER BY appointmentDate DESC",
        [sess_loginId],
        function (err, result) {
            if (err) {
                res.send({err: err})
            }

            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
});

//API to call a put request to update feedback into database
app.put("/addFeedback", ( req, res) =>{
    const appointmentId = req.body.appointmentID;
    const feedback = req.body.feedback;

    db.query("UPDATE feedback SET feedback = ? WHERE appointmentID = ?",
        [feedback, appointmentId], (err, result)=> {
            if (err) {
                res.send({message: "System Error: Failed to insert!"})
            } else {
                if (err){
                    res.send({message: "System: Failed to update !"});
                } else {
                    res.send({message: "System: Feedback Submitted Successfully"});
                }
            }
        }
    );
});

//API to check whether the server is running or not
app.listen(3005 , () => {
    console.log('running on port 3005')

    db.connect(function(err) {
        if (err) throw err;
    });
})
