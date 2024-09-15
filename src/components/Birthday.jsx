import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Home.css"

const Birthday = () => {

  const navigate = useNavigate();
  const [birthday, setBirthday] = useState('');


  const handleSubmit = () => {
    const mikBirthday = '2003-07-06';
    if (birthday === mikBirthday) {
      navigate('/unlocked'); 
    }
    else
    {
      setBirthday('');
      navigate('/tryagain')
    }
   
  };



  return (
    
    <>
    <div className="home-background-container">
      <div className="interact-container">
        <div>  
        <input
        className="name-input"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        placeholder="Enter your name"
      />
      </div>
      <div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    
      </div>
     
   
   
    </div>
    </>
  );
  
};
  
export default Birthday;