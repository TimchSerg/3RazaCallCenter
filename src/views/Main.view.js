import React, {Component} from "react";
import {Link} from "react-router-dom";

class MainView extends Component{
    render() {
        return (
            <div>
                <h1>start</h1>

                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/registration">registration</Link></li>
                    <li><Link to="/main">main</Link></li>
                </ul>
            </div>
        );
    }
}

export default MainView;