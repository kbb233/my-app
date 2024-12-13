import { useState } from "react";

const StateDemo = () =>{
    //let name = "victor";
    const [name, setName] = useState("victor");
    const [age, setAge] = useState(45);
    const [when, setWhen] = useState(1999);
    const changeName = (changedname) =>{
        setName(changedname)
    };
    const changeAge = (newAge) =>{
        setAge(newAge)
    };
    const changeAll = (newName,newAge,newWhen) =>{
        setName(newName)
        setAge(newAge)
        setWhen(newWhen)
    };
    return(
        <>
        <h2>{name}</h2>
        <button onClick={()=>changeName("0111")}>Change Name</button>
        <h2>{age}</h2>
        <button onClick={()=>changeAge(8789)}>Change Age</button>
        <h2>{name} is {age} years old. {when}</h2>
        <button onClick={()=>changeAll("2133",8789,1989)}>Change Age</button>
        </>
    );
}


export default StateDemo;