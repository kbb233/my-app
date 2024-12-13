import React from "react";
const Hello = (props) =>{
    return (
        <React.Fragment>
            <h2>hi</h2>
            <p>Hello from the other side.{props.name}, {props.lastName}</p>
        </React.Fragment>
);
}

export default Hello;