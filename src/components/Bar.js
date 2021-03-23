import React from "react";
import * as BarStyles from "./Bar.module.css";
import { Link } from "gatsby";

const Bar = () => {
    return (
        <div>
            <ul>
                <li><Link to="#home" class={BarStyles.active}>Home</Link></li>
                <li><Link to="#projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default Bar;