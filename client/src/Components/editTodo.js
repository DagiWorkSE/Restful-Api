import React,{Fragment,useState} from "react";

const EditTodo = ({todo})=>{
    const [description,setDescription] = useState(todo.description);
    const updateTodo = async e =>{
        e.preventDefault();
        const body = {description};
        const response = await fetch(`http://localhost:5000/update_todo/${todo.id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(body)
        })
        window.location = '/';
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target={`#modal${todo.id}`}>
                Edit
            </button>

            <div className="modal fade" id={`modal${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" type="text" onChange={e=>setDescription(e.target.value)} value={description}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={updateTodo}>Edit</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default EditTodo;