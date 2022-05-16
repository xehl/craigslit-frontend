import React from "react";
import Listing from "./listing"

export default function Section(props) {
  return (
    <div>
      Section Title
      { props.listings }
      <Listing />
      <Listing />
    </div>
  );
}