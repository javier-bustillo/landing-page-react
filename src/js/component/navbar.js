import React from "react";

const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-dark m-0 p-2">
				<div class="container-fluid">
					<a class="navbar-brand text-white ms-5 ps-5" href="#">
						Start Bootstrap
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse justify-content-end me-5 pe-5"
						id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a
									class="nav-link active text-white"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li class="nav-item text-white">
								<a
									class="nav-link active text-white-50"
									href="#">
									About
								</a>
							</li>
							<li class="nav-item text-white">
								<a
									class="nav-link active text-white-50"
									href="#">
									Services
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active text-white-50">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
