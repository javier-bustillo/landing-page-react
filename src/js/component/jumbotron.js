import React from "react";

const Jumbotron = () => {
	return (
		<div
			className="bg-primary text-dark bg-light p-5"
			style={{ height: "325px" }}>
			<h1 className="h-1 fw-bolder">A Warm Welcome!</h1>
			<p className="pt-3">
				Donec sagittis nisl at enim faucibus, et sodales est vestibulum.
				Morbi suscipit nisi eget diam viverra, vel suscipit quam
				sodales. Pellentesque quis elit diam. Cras nunc enim,
				condimentum a erat in, lobortis sodales justo.
			</p>
			<button type="button" class="btn btn-primary btn-lg pt-1 mt-3 mb-5">
				Call to Action!
			</button>
		</div>
	);
};

export default Jumbotron;
