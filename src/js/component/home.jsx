import React from "react";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer";

const Home = () => {
	return (
		<>
			<Navbar />

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
			</div>

			<Footer />
		</>
	);
};

export default Home;
