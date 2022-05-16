import React from "react";

export default function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Craigslit</div>
      <div className="sidebar-create"><span className="sidebar-create-button">Create a post</span></div>
      <div className="sidebar-search">
        <input type="text" name="search" placeholder="Search Craigslit"/>
      </div>
      <div className="sidebar-calendar">Calendar</div>
      <div className="sidebar-party-info">Craigslit is a party experience</div>
      <div className="sidebar-about">About</div>
    </div>
  );
}