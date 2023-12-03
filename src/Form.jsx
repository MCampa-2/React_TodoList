import { useState } from "react";

function Form({addItem}){

    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newItem){
            console.log("Error, enter item to list!");
        }
        addItem(newItem);
        setNewItem("");
    }

   
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
            <h2>Todo List</h2>
            <label className="form-label" htmlFor="items"></label>
            <input onChange={(e) => setNewItem(e.target.value)} className="form-input" type="text" name="items" value={newItem}></input>
            <button className="btn" type="submit">Add</button>
            </div>
        </form>
    )
};

export default Form;