import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <ul>
                        <li><a href="/">React Click Game</a></li>
                        <li className={this.messageClass}>{this.message}</li>
                        <li>Score: {this.score} | Top Score: {this.topscore}</li>
                    </ul>
                </nav>
            </React.Fragment >
        )
    }
}

export default Navbar;