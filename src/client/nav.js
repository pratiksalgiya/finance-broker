import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navi extends Component {
    render = () => (
        <div>
            <Link to="/">Group Master Add</Link> <br />
            <Link to="/about">Go to About</Link> <br />
            <Link to="/any-route">404 page</Link>
        </div>
    );
}

export default Navi;
