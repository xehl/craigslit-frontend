// homepage for craigslit (currently on app.js)
import { React, useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./homepage.css"
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import ListingLink from "../components/listinglink";
import axios from "axios";
import CategoryHeader from "../components/categoryHeader";

export default function Homepage(props) {

  const [listings, setListings] = useState([])
  console.log(listings)

  useEffect(() => {
    console.log("run useeffect")
    axios.get(`${process.env.REACT_APP_API_URL}/posts/`)
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
    </Box>
  );
}