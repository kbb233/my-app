const EvenDemo = ()=>{
    const  handleClick = () =>{
        console.log("Hello Clicker")
    };
    const  handleClickAgian = (name) =>{
        console.log("Hello Clicker again"+name)
    };

    return(
        <>
        <h2>Event Demo</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>handleClickAgian("111")}>Click Me</button>
        </>
    );
}

export default EvenDemo;