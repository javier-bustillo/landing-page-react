import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

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
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
