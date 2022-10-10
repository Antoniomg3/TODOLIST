import React from "react";

const InputElem = (props) => {
    return <>
        <input ClassName="input" type="text" placeholder="¿Cual es tu tarea?" onChange={props.onChange} value={props.value}/>
    </>
}

export default InputElem;