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
				<Jumbotron />
				<div className="row d-flex justify-content-between">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
