import React from "react";
import * as BarStyles from "./Bar.module.scss";
import { Link } from "gatsby";

const Bar = (props) => {
    return (
        <div className={BarStyles.navbar}> 
            <div className={BarStyles.logo}>{props.heroName}</div>
            <ul>
                <li><Link to="#home">Home</Link></li>
                <li><Link to="#projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default Bar;

