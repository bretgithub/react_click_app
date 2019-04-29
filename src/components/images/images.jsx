import React from "react";
import "./images.css";

class Images extends React.Component {
	render() {
		return (
			<img
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