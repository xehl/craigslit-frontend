// homepage for craigslit (currently on app.js)
import { React, useState, useEffect } from "react";
import "./homepage.css"
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import ListingLink from "../components/listinglink";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function Homepage(props) {

  let navigate = useNavigate()

  const [listings, setListings] = useState([])

  let handleClick = (e) => {
    e.preventDefault();
    navigate("/category");
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/`)
    .then((res) => {
      setListings(res.data)
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
            <div className="section-title" onClick={ handleClick }>
              free and for sale
            </div>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "free and for sale") {
                  return <ListingLink key={item.id} title={item.title} type={item.listingtype} listingnumber={ item.id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
            <div className="section-title">
              wanted
            </div>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "wanted") {
                  return <ListingLink key={item.id} title={item.title} type={item.listingtype} listingnumber={ item.id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
            <div className="section-title">
              personals
            </div>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "personals") {
                  return <ListingLink key={item.id} title={item.title} type={item.listingtype} listingnumber={ item.id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
            <div className="section-title">
              links / discussion
            </div>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "links / discussion") {
                  return <ListingLink key={item.id} title={item.title} type={item.listingtype} listingnumber={ item.id }/>
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