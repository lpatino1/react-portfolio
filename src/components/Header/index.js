import React from "react";
import "./style.css";

export default function Header(){
    return(
        <div className="header">
            <h1>Lesli Patino</h1>
            <div>
                <ul className="titles">
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
}

