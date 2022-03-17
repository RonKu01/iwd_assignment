const express = require ('express');
const mysql = require ('mysql');
const cors = require("cors");

const app = express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "iwd",
});

app.get('/', (req,res)=>{
    res.send("hello world");
})

app.get('/getPatData', (req,res)=>{
    db.query("SELECT * FROM `login` INNER JOIN `patient` ON login.loginID = patient.loginID ORDER BY login.loginID ASC",
        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})

app.post("/login", ( req, res) =>{
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM login WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {

            if (err){
                res.send({err: err})
            }

            if (result.length > 0){
                res.send(result);
            }else{
                res.send({message: "Incorrect Username or Password !"})
            }
        }
    );
});

app.post("/patRegister", (req, res)=>{
    const fullName = req.body.fullName
    const dob = req.body.dob
    const address = req.body.address

    const username = req.body.username
    const password = req.body.password
    const role = "Patient"
    let loginID = 0;

    db.query("SELECT * FROM `login` order by `loginID` DESC limit 1",
        function (err, result) {
            const data = Object.values(JSON.parse(JSON.stringify(result)));
            loginID = data[0].loginID + 1;
        }
    );

    db.query("INSERT INTO login (username, password, role) VALUES (?, ?, ?)",
        [username, password, role], (err, result)=> {

            if(err){
                res.send({message: "System: Failed to insert !"})
            }else {
                db.query("INSERT INTO patient (loginID, patName, patDob, patAddress) VALUES (?, ?, ?, ?)",
                    [loginID, fullName, dob, address], (err, result) => {

                        if (err) {
                            res.send({message: "System: Failed to insert !"})
                        } else {
                            res.send({message: "System: Patient Registered! Please Login"})
                        }
                    });
            }
    });
});

app.put("/updatePat",(req, res)=>{
    const id = req.body.id
    const address = req.body.address
    const password = req.body.password

    // console.log("id:" + id + "address: " + address + "password: " + password)

    db.query("UPDATE patient SET patAddress = ? WHERE loginID = ?",[address, id], (err, result)=>{

        if (err)
        {
            res.send({message: "System: Failed to update !"});
        }else {
                db.query("UPDATE login SET password = ? WHERE loginID = ?", [password, id], (err, result) => {

                if (err) {
                    res.send({message: "System: Failed to update !"});
                } else {
                    res.send({message: "System: Update Successfully"});
                }
            })
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
    const role = "Doctor"
    let loginID = 0;

    db.query("SELECT * FROM `login` order by `loginID` DESC limit 1",
        function (err, result) {
            const data = Object.values(JSON.parse(JSON.stringify(result)));
            loginID = data[0].loginID + 1;
        }
    );

    db.query("INSERT INTO login (username, password, role) VALUES (?, ?, ?)",
        [username, password, role], (err, result)=> {

            if(err){
                res.send({message: "System: Failed to insert !"})
            }else {
                db.query("INSERT INTO doctor (loginID, specialisationID, doctorName, year) VALUES (?, ?, ?, ?)",
                    [loginID, docSpec, docFullName, docYear], (err, result) => {

                        if (err) {
                            res.send({message: "System: Failed to insert !"})
                        } else {
                               res.send({message: "System: Doctor Registered! Please Login"})
                        }
                    });
            }
        });
});

app.put("/updateDoc",(req, res)=>{
    const id = req.body.id
    const docSpec = req.body.specialisationID
    const docYear = req.body.year
    const password = req.body.password

    console.log("id :" + id + "docSpec :" + docSpec)

    db.query("UPDATE doctor SET specialisationID = ? , year = ? WHERE loginID = ?",
        [docSpec, docYear, id], (err, result)=>{

            if (err)
            {
                res.send({message: "System: Failed to update !"});
            }else {


                db.query("UPDATE login SET password = ? WHERE loginID = ?", [password, id], (err, result) => {

                    if (err) {
                        res.send({message: "System: Failed to update !"});
                    } else {
                        res.send({message: "System: Update Successfully"});
                    }
                })
            }
        })
})

app.get('/getSpecialism', (req,res)=>{
    db.query("SELECT * FROM `specialisation` ORDER BY specialisation.specialisationID ASC",
        function (err, result) {
            let data = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(data);
        }
    );
})


app.listen(3005 , () => {
    console.log('running on port 3005')

    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
})


