import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Home.css"

const Name = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = () => {
    if (inputValue.toLowerCase() === 'mikayla'.toLowerCase()) {
      navigate('/birthday'); 
    }
    else
    {
      setInputValue('');
      navigate('/tryagain')
    }
    
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    
    <>
    <div className="home-background-container">
      <div className="interact-container">
        <div>  
        <input
        className="name-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
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
  
export default Name;