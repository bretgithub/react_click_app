// Required dependencies and imports
import React from "react";
import "./navbar.css";

// Set as a classful component
class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <ul>
                        {/* Text to user */}
                        <li><a href="https://github.com/bretgithub/react_click_app">React Click Game</a></li>
                        <li className="mobile-contact"><a href="mailto:bret.allan@gmail.com?subject=I love your work on React!&body=Hi Bret, I'd love to speak with you about..">Contact Me</a></li>
                        <li className={this.props.messageClass}>{this.props.message}</li>
                        <li>Score: {this.props.score} | Top Score: {this.props.topScore}</li>

                    </ul>
                </nav>
            </React.Fragment >
        )
    }
}

export default Navbar;