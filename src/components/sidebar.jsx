import React from "react";
import "./sidebar.css"
import Calendar from "./calendar";
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {

  let navigate = useNavigate();
  let handlePost = (e) => {
    e.preventDefault();
    navigate("/type");
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Craigslit<br/></div>
      <div className="sidebar-create"><span className="sidebar-create-button" onClick={handlePost}>create a post</span></div>
      {/* <div className="sidebar-search">
        <input type="text" name="search" placeholder="Search Craigslit"/>
      </div> */}
      <Calendar />
      <div className="sidebar-party-info"><br/><i>you're invited to craigslit! barter market, gift exchange, dance party, and more</i></div>
      <div className="sidebar-about"><br/><b>date:</b> january 1, 9:00pm<br/><b>location:</b> 248 mckibbin st.</div>
    </div>
  );
}