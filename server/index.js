const express = require ("express");
const mysql = require ("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
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

let sess, sess_loginId;

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
    db.query("SELECT login.loginID, login.username, login.password, login.role, patient.patID, patient.patName, patient.patDob, patient.patAddress, patient.patHistory, patient.status FROM `login` INNER JOIN `patient` ON login.loginID = patient.loginID ORDER BY login.loginID ASC",

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
            res.send({message: "System: Update Successfully"});
        }
    })

    db.query("SELECT * FROM login WHERE loginID = ?", [id],
        (err, result) => {

            if (password !== result[0].password){
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    db.query("UPDATE login SET password = ? WHERE loginID = ?", [hash, id], (err, result) => {
                        if (err) {
                            res.send({message: "System: Failed to update!"});
                        } else {
                            res.send({message: "System: Update Successfully"});
                        }
                    })

                });
            }
        }
    );
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
                res.send({message: "System: Update Successfully"});
            }
        }
    )

    db.query("SELECT * FROM login WHERE loginID = ?", [id],
        (err, result) => {

            if (password !== result[0].password){
                bcrypt.hash(password, saltRounds, (err, hash) => {

                    if (err) {
                        res.send({err: err})
                    }

                    db.query("UPDATE login SET password = ? WHERE loginID = ?", [hash, id], (err, result) => {
                        if (err) {
                            res.send({message: "System: Failed to update !"});
                        } else {
                            res.send({message: "System: Update Successfully"});
                        }
                    })
                })
            }
        }
    );
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

app.listen(3005 , () => {
    console.log('running on port 3005')

    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
})
