import React from "react";
import * as BarStyles from "./Bar.module.scss";
import { Link } from "gatsby";
const Bar = () => {
    return (
        <div className={`d-flex`}>
            <ul>
                <li><Link to="#home" className={BarStyles.active}>Home</Link></li>
                <li><Link to="#projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default Bar;