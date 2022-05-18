import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./submitform.css"

export default function TypeSelect(props) {

  let navigate = useNavigate();

  const [type, setType] = useState(null)

  let handleHome = (e) => {
    e.preventDefault();
    navigate('/');
  }

  let handleType = (e) => {
    e.preventDefault();
    setType("weee");
    console.log(type);
    navigate('/post', {state: { listingtype: type }})
  }

  return (
    <div className="type-select-container">
      <div className="submit-header">
        <button className="home-button" onClick={handleHome}>CL</button> craigslit &gt; post
      </div>
      <div className="type-selector">
        <div><b>choose the type of listing that fits best:</b></div><br/>
        <input type="radio" onClick={handleType} id="free and for sale" value="free and for sale" />free and for sale<br/>
        <input type="radio" id="wanted" value="wanted" />wanted<br/>
        <input type="radio" id="personals" value="personals" />personals<br/>
        <input type="radio" id="links / discussion" value="links / discussion" />links / discussion
      </div>
    </div>
  );
}