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

app.post("/register", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO login (username, password) VALUES (?, ?)",
        [username, password], (err, result)=> {
        console.log(err);
    });
});

app.post("/login", ( req, res) =>{
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM login WHERE username = ? AND password = ?",
        [username, password], (err, result)=> {
            if (err){
                res.send({err:err});
            }

            if (result){
                res.send(result)
            }else{
                res.send({message: "Incorrect Username or Password !"});
            }
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

app.get('/', (req,res)=>{
    res.send("hello world");
})

