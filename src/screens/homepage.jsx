// homepage for craigslit (currently on app.js)
import { React, useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./homepage.css"
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import ListingLink from "../components/listinglink";
import axios from "axios";
import CategoryHeader from "../components/categoryHeader";
import RsvpBar from "../components/rsvpbar";

export default function Homepage(props) {

  const [listings, setListings] = useState([])
  // console.log(listings)

  console.log(`${process.env.REACT_APP_API_URL}/recent/`)

  useEffect(() => {
    // get most recent listings for each category (set to 10 for now)
    axios.get(`${process.env.REACT_APP_API_URL}/recent/`)
    .then((res) => {
      setListings(res.data.listings)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
  <Box sx={{
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    }}>
      <Sidebar />
      <div>
        <Header />
        <div className="sections-container">
          <div>
            <CategoryHeader title="free and for sale"/>
            <div>
              {listings.map((item) => {
                if (item.listingtype === "free") {
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
          <CategoryHeader title="gigs" />
            <ListingLink title="Dj listing goes here clip extra text overflow herewjad kwnajndwakindwjaidnad one more lineok this is too big" type="gigs" listingid="test" />
            <div>
              {listings.map((item) => {
                if (item.listingtype === "gigs") {
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          </div>
          <div>
          <CategoryHeader title="personals / missed connections"/>
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
      <RsvpBar />
    </Box>
  );
}