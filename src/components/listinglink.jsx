import React from "react";
import "./listinglink.css"
import { useNavigate } from "react-router-dom";

export default function ListingLink(props) {

  let navigate = useNavigate()

  let handleClick = (e) => {
    e.preventDefault();
    console.log("item number: " + props.listingnumber)
    navigate("/listing/" + props.listingnumber, { state: { listingnum: props.listingnumber } });
  }

  return (
    <div className="listing" onClick={handleClick}>
      { props.title }
    </div>
  );
}