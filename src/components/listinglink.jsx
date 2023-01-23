import React from "react";
import "./listinglink.css"
import { useNavigate } from "react-router-dom";

export default function ListingLink(props) {

  console.log(props)

  let navigate = useNavigate()

  let handleClick = (e) => {
    e.preventDefault();
    console.log("item number: " + props.listingid)
    navigate("/listing/" + props.listingid, { state: { listingnum: props.listingid } });
  }

  return (
    <div className="listing" onClick={handleClick}>
      { props.title }
    </div>
  );
}