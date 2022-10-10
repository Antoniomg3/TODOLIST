import React from "react";

const ButtonElem = (props) =>{

    return<>
        <button className="button" onClick={props.onClick}>{props.value}</button>
    </>

}

export default ButtonElem;