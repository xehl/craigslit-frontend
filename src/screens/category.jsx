// Display all posts correlated to a category of listing
import React from "react";
import "./category.css"
import "./submitform.css"
// import ListingLink from "../components/listinglink"
import { useNavigate } from "react-router-dom";

export default function Category(props) {

  let navigate = useNavigate();

  let handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="category-container">
      <div className="category-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; category</div>
      </div>
      <div className="category-display">
        <form className="search-bar">
          <input type="text" className="category-search" />
          <button className="search-button">search</button>
        </form>
        {/* 
          // pasted from homepage
              {listings.map((item) => {
                if (item.listingtype === "personals") {
                  return <ListingLink key={item.id} title={item.title} type={item.listingtype} listingnumber={ item.id }/>
                }
              return null
        })} */}
      </div>
    </div>
  );
}