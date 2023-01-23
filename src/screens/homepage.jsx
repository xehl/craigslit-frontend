// homepage for craigslit (currently on app.js)
import { React, useState, useEffect } from "react";
import "./homepage.css"
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import ListingLink from "../components/listinglink";
import axios from "axios";
// import { useNavigate } from "react-router-dom"
import CategoryHeader from "../components/categoryHeader";

export default function Homepage(props) {

  // let navigate = useNavigate()

  const [listings, setListings] = useState([])
  console.log(listings)

  // let handleClick = (e) => {
  //   e.preventDefault();
  //   navigate("/category");
  // }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/`)
    .then((res) => {
      setListings(res.data.listings)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div className="homepage">
      <Sidebar />
      <div>
        <Header />
        <div className="sections-container">
          <div>
            {/* <div className="section-title" onClick={ handleClick }>
              free and for sale
            </div> */}
            <CategoryHeader title="free and for sale"/>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "free") {
                  console.log(item)
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
          <CategoryHeader title="wanted"/>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "wanted") {
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
          <CategoryHeader title="personals"/>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "personals") {
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
          <CategoryHeader title="links / discussion"/>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "links / discussion") {
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}