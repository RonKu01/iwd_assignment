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
const VIDEOSDK_API_ENDPOINT= "https://api.videosdk.live"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: ["http://localhost:3000"],
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
    password: "bdiIe3fDLc",
    database: "sql6479845",
});

let sess, sess_loginId, sess_appointmentId;

app.get('/', (req,res)=>{
    res.send("hello world");
})

app.get("/login", (req, res) => {
    if (sess === true) {
        res.send({ loggedIn: true, loginID: sess_loginId });
    } else {
        res.send({ loggedIn: false });
    }
});

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

app.get('/getPatData', (req,res)=>{
    db.query("SELECT * FROM `login` INNER JOIN `patient` ON login.loginID = patient.loginID ORDER BY login.loginID ASC",

        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

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

//Doctor
app.get('/getDocData', (req,res)=>{
    db.query("SELECT * FROM `doctor` INNER JOIN `login` ON doctor.loginID = login.loginID INNER JOIN `specialisation` ON doctor.specialisationID = specialisation.specialisationID ORDER BY doctor.doctorID ASC",
        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

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

app.get('/getSpecialism', (req,res)=>{
    db.query("SELECT * FROM `specialisation` ORDER BY specialisation.specialisationID ASC",
        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

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

app.get("/getPatListByDoc", ( req, res) =>{

    db.query("SELECT * FROM appointment INNER JOIN doctor ON doctor.doctorID = appointment.doctorID  INNER JOIN patient ON appointment.patID = patient.patID WHERE doctor.loginId = ?",
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

app.get("/getPatAppointment", ( req, res) =>{

    db.query("SELECT * FROM appointment INNER JOIN patient ON patient.patID = appointment.patID  WHERE patient.loginId = ?",
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

app.get("/patient", ( req, res) =>{

    db.query("SELECT * FROM appointment INNER JOIN patient ON patient.doctorID = appointment.doctorID  INNER JOIN patient ON appointment.patID = patient.patID WHERE doctor.loginId = ?",
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

app.put("/updateMeetingDetails",(req, res)=>{
    sess_appointmentId = req.body.appointmentID;
    res.send({message : "Success"});
})

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

app.get("/getMeetingDetails", (req, res) => {
    res.send({ appointmentId: sess_appointmentId });
});

app.post("/getMeetingDetails", ( req, res) =>{
    const appointmentId = req.body.appointmentId

    db.query("SELECT * FROM appointment WHERE appointmentID = ?",
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

app.listen(3005 , () => {
    console.log('running on port 3005')

    db.connect(function(err) {
        if (err) throw err;
    });
})
