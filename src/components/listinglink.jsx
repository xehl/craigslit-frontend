import React from "react";
import "./listinglink.css"
import { useNavigate } from "react-router-dom";

export default function ListingLink(props) {

  let navigate = useNavigate()

  // will eventually need to pass in link ID
  let handleClick = (e) => {
    e.preventDefault();
    console.log("item number: " + props.listingnumber)
    navigate("/listing", { state: { listingnum: props.listingnumber } });
  }

  return (
    <div className="listing" onClick={handleClick}>
      { props.title } {props.listingnumber}
    </div>
  );
}