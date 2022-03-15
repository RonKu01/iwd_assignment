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
    res.send("hello world");

    db.query("SELECT * FROM `patient` order by `loginID` ASC",
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



app.listen(3005 , () => {
    console.log('running on port 3005')

    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
})


