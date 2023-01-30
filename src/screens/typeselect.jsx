import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./submitform.css"

export default function TypeSelect(props) {

  let navigate = useNavigate();
  const [type, setType] = useState(null)

  let handleHome = () => {
    setTimeout(() => { 
      navigate('/');
    }, 200);
  }

  let handleType = (e) => {
    setType(e.target.value)
  }

  let handleContinue = (e) => {
    if (type) {
      setTimeout(() => { 
        navigate('/post', { state: { listingtype: type } });
      }, 200);
    }
  }

  return (
    <div className="type-select-container">
      <div className="submit-header">
        <button className="home-button" onClick={handleHome}>CL</button> craigslit &gt; post
      </div>
      <div className="type-selector">
        <div><b>choose the type of listing that fits best:</b></div><br />
        <input type="radio" name="type" value="free" onClick={handleType} /> free and for sale<br/>
        <input type="radio" name="type" value="gigs" onClick={handleType} /> gigs<br/>
        <input type="radio" name="type" value="personals" onClick={handleType} /> personals / missed connections<br/>
        <input type="radio" name="type" value="links / discussion" onClick={handleType} /> links / discussion<br/>
        <button className="continue-button" onClick={handleContinue}>continue</button>
      </div>
    </div>
  );
}