import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Click Game</a>
            </li>
            <li className={props.messageClass}>{props.message}</li>
            <li>Score: {props.score} | Top Score: {props.topscore}</li></ul>
    </nav>

);

export default Navbar;