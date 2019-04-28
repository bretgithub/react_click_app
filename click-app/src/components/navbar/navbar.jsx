import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li className="brand">
                        <a href="/">Click Game</a>
                    </li>
                    {/* <li className={props.messageClass}>{props.message}</li> */}
                    {/* <li>Score: {props.score} | Top Score: {props.topscore}</li> */}
                </ul>




            </React.Fragment >
        )
    }
}

export default Navbar;