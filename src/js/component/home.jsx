import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<Navbar />
			</div>
			<div className="container">
				<div>
					<Jumbotron />
				</div>
				<div>
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
