import React, {useState} from "react";
import TodoList from "./Todolist.jsx";
import InputElem from "./InputElem.jsx";
import ButtonElem from "./ButtonElem.jsx";

//create your first component
const Home = (props) => {
	const [taskValue, setTaskValue] = useState("");
	const [counter, setCounter] = useState(1);
	const [tasks, setTasks] = useState([]);

	const addTask = () =>{
		const auxTasks = [...tasks]
		auxTasks.push({
			id: counter,
			text: taskValue,
		})
		console.log({ auxTasks })
		setTasks(auxTasks)
		setCounter(counter + 1)		
		setTaskValue("")
	}

	const removeTask = (id) => {
		const auxTasks = [...tasks]
		const result = auxTasks.filter(((tasks) => tasks.id !== id));
		setTasks(result);
		console.log({ result })
	}

	


	return (
		<div className="text-center">
			<h1>TODO LIST</h1>					
			<InputElem value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
			<ButtonElem onClick={addTask} value="Añadir"/>
			<TodoList tasks={tasks} removeTask={removeTask}/>
		</div>
	);
};

export default Home;
