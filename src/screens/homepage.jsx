// homepage for craigslit (currently on app.js)
import React from "react";
import "./homepage.css"
import Sidebar from "../components/sidebar";
import Section from "../components/section";
import Header from "../components/header";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <Sidebar />
      <div>
        <Header />
        <div className="sections-container">
          <Section listings={23} title={"free and for sale"} />
          <Section listings={23} title={"wanted"} />
          <Section listings={23} title={"personals"} />
          <Section listings={23} title={"links / discussion"} />
        </div>
      </div>
    </div>
  );
}