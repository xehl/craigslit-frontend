import React from "react";
import "./listingcard.css"
import { useNavigate } from "react-router-dom";

export default function ListingCard(props) {

  let navigate = useNavigate

  let handleClick = (e) => {
    e.preventDefault();
    console.log("item number: " + props.listingnumber)
    navigate("/listing/" + props.listingnumber, { state: { listingnum: props.listingnumber } });
  }

  return (
    <div className="listing-card" onClick={handleClick}>
      <img className="card-image" src={require("../media/backpack.jpeg")} alt={"backpack"}/>
      <div>
        {props.title} {props.type} {props.listingnumber}
      </div>
    </div>
  );
}