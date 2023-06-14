import React from "react";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li><input type="text" placeholder="What do you need to do?" /></li>
				<li>Make the bed</li>
				<li>Walk the dog</li>
				<li>Pay taxes</li>
			</ul>
			<div>23 tasks</div>
		</div>
	);
};

export default Home;
