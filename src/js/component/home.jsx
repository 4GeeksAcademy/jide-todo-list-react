import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [todos, setTodos ] = useState([]);

	return (
		<div className="container">
			<h1>My Todos <i class="fa-solid fa-pencil"></i></h1>
			<ul>
				<li><input 
					type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat(inputValue));
							setInputValue("");
						}
					}}
					placeholder="What needs to be done?" />
				</li>
				{todos.map((t) => (
					<li>
						Make the bed <i class="fa-solid fa-trash-can"></i>
					</li>
				))}
			</ul>
			<div><p>23 tasks</p></div>
		</div>
	);
};

export default Home;
