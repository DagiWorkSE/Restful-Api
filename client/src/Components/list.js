import React,{Fragment,useState, useEffect} from "react";
import EditTodo from "./edit";
const Listtodo = ()=>{
const [todos,setTodos] = useState([]);//declared empty array

    const getTodos = async () =>{
        const response = await fetch("http://localhost:5000/get_todos");//default uses GET method
        const jsonData = await response.json();
        setTodos(jsonData);
    }
    const deleteTodo = async (id)=>{
        const deleteTodo = await fetch(`http://localhost:5000/remove_todo:${id}`,{
            method:"delete"
        });
        setTodos(todos.filter(todo => todo.todo_id !== id));
    }
    useEffect(()=>{
        getTodos();
    },[])
    console.log(todos);
    //use effect keeps fetching so i added an empty array to make it run only once
    return (
        <Fragment>
            <table className="table table-stripped mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>description</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo_S => {
                        <tr key={todo_S.todo_id}>
                            <td>{todo_S.todo_id}</td>
                            <td>{todo_S.description}</td>
                            <EditTodo />
                            <td>Edit <button className="btn btn-danger" onClick={()=>deleteTodo(todo_S.todo_id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}
export default Listtodo;