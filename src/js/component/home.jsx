import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li><input 
					type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					placeholder="What do you need to do?" />
				</li>
				<li>Make the bed <i class="fa-solid fa-trash-can"></i></li>
				<li>Walk the dog <i class="fa-solid fa-trash-can"></i></li>
				<li>Pay taxes <i class="fa-solid fa-trash-can"></i></li>
			</ul>
			<div>23 tasks</div>
		</div>
	);
};

export default Home;
