import React from "react";

const Card = () => {
	return (
		<div className="row d-flex flex-flow"><div className="col">
			<div className="card " style={{ width: "18rem" }}>
				<img
					src="https://picsum.photos/seed/picsum/325/500"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body text-center">
					<div>
						<h5 className="card-title">Card title</h5>
					</div>

					<p className="card-text">
						Some quick example text to build on the card title and make
						up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Card;
