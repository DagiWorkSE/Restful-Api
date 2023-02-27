import React,{Fragment,useState, useEffect} from "react";
import EditTodo from "./editTodo";
const Listtodo = ()=>{
const [todos,setTodos] = useState([]);//declared empty array

    const getTodos = async () =>{
        const response = await fetch("http://localhost:5000/get_todos");//default uses GET method
        const jsonData = await response.json();
        setTodos(jsonData);
    }
    const deleteTodo = async (id)=>{
        const deleteTodo = await fetch(`http://localhost:5000/remove_todo/${id}`,{
            method:"delete"
        });
        setTodos(todos.filter(todo => todo.id !== id));
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
                    {todos.map(t => {
                        return(
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>{t.description}</td>
                            <td>
                                <EditTodo todo={t}/>
                                <button className="btn btn-danger" onClick={()=>deleteTodo(t.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}
export default Listtodo;