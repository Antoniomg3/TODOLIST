import React from "react";

const TodoList = (props) =>{
    return <>
        {
            props.tasks.map((task) => <li className="Tasks">{task.text} <button className="removeBTN" onClick={() => props.removeTask(task.id)}>X</button></li>)}
    </>
}

export default TodoList;