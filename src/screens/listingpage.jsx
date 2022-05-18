import React from "react";
import { useNavigate } from "react-router-dom";
import "./listingpage.css"

export default function ListingPage(props) {

  let navigate = useNavigate();

  let handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="listing-page-container">
      <div className="listing-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; listing &gt; TITLE</div> 
      </div>
      <div className="listing-container">
        <div className="listing-title">
          Title <span className="listing-price">Price</span>
        </div>
        <div className="listing-details">
          <div>
            <img src={require("../media/backpack.jpeg")} alt="backpack" />
          </div>
          <div>
            <div className="detail">location: HERE</div><br/>
            <div className="detail">size: BIG</div><br/>
            <div className="detail">condition: GOOD</div>
          </div>
        </div>
        <div className="listing-description">
          Description
        </div>
        <div>
          Posted by: AUTHOR at TIMESTAMP
        </div>
      </div>
    </div>
  );
}