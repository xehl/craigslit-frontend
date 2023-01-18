// Display all posts correlated to a category of listing
import "./category.css"
import "./submitform.css"
import ListingCard from "../components/listingcard"
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
        <div>craigslit &gt; category &gt; </div>
      </div>
      <div className="category-display">
        <form className="search-bar">
          <input type="text" className="category-search" />
          <button className="search-button">search</button>
        </form>
        
        <ListingCard title={"yeadewbauidw"} type={"adw"} listingnumber={" dwad "}/>
      </div>
    </div>
  );
}