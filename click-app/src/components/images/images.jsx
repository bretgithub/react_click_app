import React from "react";
import "./images.css";

// onClick to come later when defining game functionality 
// class Images extends React.Component {
// 	render(name, image, onClick) {
// 		return (
// 			<img
// 				className="click-image"
// 				src={image}
// 				alt={name}
// 				name={name}
// 				onClick={() => onClick(name)}

// 			/>
// 		)
// 	}
// }
const Images = ({ name, image, onClick }) =>
	<img
		className="click-image"
		src={image}
		alt={name}
		name={name}
		onClick={() => onClick(name)}
	/>;

export default Images;