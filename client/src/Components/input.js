import React,{Fragment,useState} from 'react';//fragment used to create fragment tag(?)/useState used to give input
const Inputtodo = ()=>{//component creation
const [description,setDescription] = useState("default description");

    return(
        <Fragment>
            <h1 className='text-center mt-4'>PERN Todo List</h1>
            <form className='d-flex mt-4'>
                <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
                <button className='btn btn-primary'>Add</button>
            </form>
        </Fragment>
    )
}
export default Inputtodo;