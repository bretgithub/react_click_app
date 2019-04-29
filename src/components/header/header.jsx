import React from "react";
import "./header.css";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <h1>Welcome to Westeros React Click Game</h1>
                    <h3>Click on a character once and only once to defeat the Night King, if you click twice then Winter takes the 7 Kingdoms!</h3>
                </header>
            </React.Fragment >
        )
    }
}

export default Header;