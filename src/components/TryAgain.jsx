import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

import "./Home.css"

const TryAgain = () => {

  return (
    
    <>
    <div className="home-background-container">
      <div className="interact-container">
        <div className="link-container">
          <Link to="/name">Try Again</Link>
        </div>
      </div>

      
   
    </div>
    </>
  );
  
};
  
export default TryAgain;