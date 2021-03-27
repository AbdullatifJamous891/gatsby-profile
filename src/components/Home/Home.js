import React from "react";
import * as homeStyles from "./Home.module.scss";

const Home = (props)=> {
  return (
      <div>
          <div className={homeStyles.home_header}>
            <div className={"p-3 text-center text-light"}>
              <h1 className={"display-3"}>{props.heroName}</h1> 
              <p className={"font-weight-light h3 text-light"}>{props.jobTitle}</p> 
              <a href="#posts" className={`my-3 ${homeStyles.el_button}`}>Latest Posts</a>
            </div>
          </div>
      </div>
  )
}


export default Home;