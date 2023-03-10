import React,{Fragment,useState} from 'react';//fragment used to create fragment tag(?)/useState used to give input
const Inputtodo = ()=>{//component creation
const [description,setDescription] = useState("default description");//used to declare and set(encapsulated)

const onFormSubmit = async e =>{
    e.preventDefault();//so page dont refresh on submit
    try {
        const body = {description};//get description variable to json body
        const response = await fetch("http://localhost:5000/create_todo",{//fetch inserts goto,properties
            method:"POST",
            headers:{"Content-type":"application/json"}, 
            body:JSON.stringify(body)//convert text to json
        });
        window.location='/';
    } catch (err) {
        console.error(err.message);
    }
}
    return(
        <Fragment>
            <h1 className='text-center mt-4'>PERN Todo List</h1>
            <form className='d-flex mt-4' onSubmit={onFormSubmit}>
                <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}
export default Inputtodo;