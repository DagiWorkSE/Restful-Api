const express = require("express");
const app = express();//run express used to create server
const cors = require("cors");//user to help in communication between domain like react(localhost 3000) and node(localhost 5000)
app.use(cors());
app.use(express.json());

app.listen(5000,()=>{
    console.log("Server Running on port 5000");
})