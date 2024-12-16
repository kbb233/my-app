import { useState } from "react"
import ListShow from "./ListShow";
import ListCount from "./ListCount";

const ToDoList = () => {
    const[value,setValue]=useState("");
    const[list,setList]=useState([]);

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(value)
        if (value.trim()) {
          setList((prevList) => [...prevList, value.trim()]);
          console.log(list)
          setValue("")
        }
    };
    return (
        <div>
            <h3>To Do List</h3>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter a to-do item"
                />
                <button type="submit">Add</button>
            </form>
            <ListShow list={list} />
            <ListCount count={list.length} />
        </div>
    );
}
export default ToDoList;