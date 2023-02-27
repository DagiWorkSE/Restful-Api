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
//GET ALL DATA
app.get("/get_todos", async(req,res)=>{
    try {
        const get_todos = await todo_db.query("SELECT * FROM todo");//no returning cause Select already returns
        res.json(get_todos.rows);// all rows to be returned
    } catch (err) {
        console.error(err.message);
        
    }
});

//GET Specific Item

app.get("/get_todos/:id", async(req,res)=>{
try {
    const {id} = req.params;//req.params is given parameters like 'http://localhost:5000/get_todos/2'
    const get_todos = await todo_db.query("SELECT * FROM todo WHERE id = $1",[id]);

    res.json(get_todos.rows);
} catch (err) {
    console.error(err.message);
    
}
});

//Update a todo
app.put("/update_todo/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const update_todo = await todo_db.query("UPDATE todo SET description = $1 WHERE id = $2 Returning *",[description,id]);

        res.json(update_todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//Deleting A Todo
app.delete('/remove_todo/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const remove_todo = await todo_db.query("DELETE FROM todo WHERE id = $1",[id]);
        res.json("Deleted todo with id "+id);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000,()=>{
    console.log("Server Running on port 5000");
});