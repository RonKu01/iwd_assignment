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
    const username = req.body.username
    const password = req.body.password
    const role = "Patient"

    db.query("INSERT INTO login (username, password, role) VALUES (?, ?, ?)",
        [username, password, role], (err, result)=> {
        if(err){
            res.send({message: "System: Failed to insert !"})
        }else {
            res.send({message: "System: Patient Registered! Please Login"})
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


