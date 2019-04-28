import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <ul>
                        <li><a href="/">React Click Game</a></li>
                        <li>Click A Character To Begin</li>
                        <li>Score</li>
                    </ul>
                </nav>
            </React.Fragment >
        )
    }
}

export default Navbar;