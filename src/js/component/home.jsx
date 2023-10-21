import React from "react";
import Counter from "./Counter"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center text-light bg-dark">
		<Counter />
		</div>
	);
};

export default Home;
