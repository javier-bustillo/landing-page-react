import React from "react";

const Card = () => {
	return (
		<div className="card mt-3">
			<img src="" className="card-img-top" alt="..." />
			<div className="card-body text-center">
				<div>
					<h5 className="card-title fs-5 p-2">Card title</h5>
				</div>

				<p className="card-text pb-1">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;
