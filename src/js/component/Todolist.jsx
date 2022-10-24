import React, { useState, useEffect } from "react";
import shortid from "shortid";
const Todolist = () => {
	let [tarea, setTarea] = useState({
		label: "",
		done: false
	});
	let [listaTareas, setListaTareas] = useState([]);
	let restantes;
	if (listaTareas.length === 0) {
		restantes = "No hay tareas pendientes.";
	} else {
		restantes = `Hay ${listaTareas.length} tareas pendientes.`;
	}
	const obtenerValor = e => {
		if (e.key.toLowerCase() === "enter") {
			let valor = e.target.value;
			console.log(valor);
			setTarea(
				(tarea = {
					label: valor,
					done: false,
					id: shortid.generate()
				})
			);
			setListaTareas([...listaTareas, tarea]);
		}
		setTarea("");
	};
	function EliminarTareas(id) {
		const newList = listaTareas.filter(item => item.id !== id);
		setListaTareas(newList);
	}
	return (
		<div className="container">
			<h1>Todo List</h1>
			<div className="input-group input-group-lg">
				<input
					placeholder="Agrega una tarea"
					onKeyPress={obtenerValor}
					type="text"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-lg"
				/>
			</div>

			<ul className="list-group d-flex">
				{listaTareas.map((item, i) => (
					<li className="list-group-item" key={item.id}>
						<div className="task">
							<div className>
								<span className="lead">{item.label}</span>
							</div>
							<div>
								<button
									className="btn btn-danger"
									type="button"
									onClick={() => EliminarTareas(item.id)}>
									<i className="far fa-trash-alt"></i>
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			<strong>{restantes}</strong>
		</div>
	);
};

export default Todolist;