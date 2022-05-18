import React from "react";
import "./listing.css"
import { useNavigate } from "react-router-dom";

export default function Listing(props) {

  let navigate = useNavigate();

  let handleClick = (e) => {
    e.preventDefault();
    navigate("/listing");
  }

  return (
    <div className="listing" onClick={handleClick}>
      listing link
    </div>
  );
}