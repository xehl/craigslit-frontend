import React from "react";
import "./section.css"
import Listing from "./listing"

export default function Section(props) {
  return (
    <div className="section-container">
      <div className="section-title">
        {props.title}
      </div>
      <Listing />
      <Listing />
      { props.listings }
    </div>
  );
}