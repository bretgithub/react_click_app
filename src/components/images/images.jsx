// Required dependencies and imports
import React from "react";
import "./images.css";

// Set as a classful component
class Images extends React.Component {
	render() {
		return (
			<img
				// Image properties 
				className="click-image"
				src={this.props.image}
				alt={this.props.name}
				name={this.props.name}
				onClick={() => this.props.onClick(this.props.name)}

			/>
		)
	}
}

export default Images;