import { React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./submitform.css"

export default function TypeSelect(props) {

  let navigate = useNavigate();
  const [type, setType] = useState(null)

  useEffect(() => {
  //  navigate('/post', { state: { listingtype: type } });
    console.log(type)
  });

  let handleHome = () => {
    navigate('/');
  }

  let handleType = (e) => {
    setType(e.target.value);
  }

  return (
    <div className="type-select-container">
      <div className="submit-header">
        <button className="home-button" onClick={handleHome}>CL</button> craigslit &gt; post
      </div>
      <div className="type-selector">
        <div><b>choose the type of listing that fits best:</b></div><br/>
        <input type="radio" value="free and for sale" onClick={handleType} />free and for sale<br/>
        <input type="radio" value="wanted" onClick={handleType} />wanted<br/>
        <input type="radio" value="personals" onClick={handleType} />personals<br/>
        <input type="radio" value="links / discussion" onClick={handleType} />links / discussion
      </div>
    </div>
  );
}