const express = require ('express')
const app = express()

app.listen(3005 , () => {
    console.log('running on port 3005')
})

app.get('/', (req,res)=>{
    res.send("hello world");
})

