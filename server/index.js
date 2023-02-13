const express = require("express");
const app = express();//run express used to create server
const cors = require("cors");//user to help in communication between domain like react(localhost 3000) and node(localhost 5000)
const todo_db = require("./db_conn");// my databse connection

app.use(cors());
app.use(express.json());// request.body accessable by this

//Add Todo Route//
app.post("/create_todo",async(req,res)=>{
    try {
        const {description} = req.body;//Get Description from Request Body 
        const create_todo = await todo_db.query("INSERT INTO todo (description) VALUES ($1) Returning *",[description]);//basic SQL query

        res.json(create_todo.rows[0]);//to return inserted item
    } catch (err) {
        console.log(err.message)
    }
});
app.listen(5000,()=>{
    console.log("Server Running on port 5000");
});