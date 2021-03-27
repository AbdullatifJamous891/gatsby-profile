import React from "react";
import Bar from './Bar/Bar';
import Home from './Home/Home';
const Layout = ()=> {
  const identificationCard = {
    heroName: "Abdullatif Jamous",
    jobTitle: "Full Stack Software Engineer"
  }
  return (
      <div>
          <Bar
            heroName={identificationCard.heroName} />
          <Home 
            heroName={identificationCard.heroName} 
            jobTitle={identificationCard.jobTitle} />
      </div>
  )
}


export default Layout;