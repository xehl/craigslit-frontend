import React from "react";
import "./listinglink.css"
import { useNavigate } from "react-router-dom";

export default function ListingLink(props) {

  let navigate = useNavigate()

  // will eventually need to pass in link ID
  let handleClick = (e) => {
    e.preventDefault();
    navigate("/listing");
  }

  return (
    <div className="listing" onClick={handleClick}>
      { props.title }
    </div>
  );
}