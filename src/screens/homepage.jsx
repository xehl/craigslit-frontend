// homepage for craigslit (currently on app.js)
import { React, useState, useEffect } from "react";
import "./homepage.css"
import Sidebar from "../components/sidebar";
import Section from "../components/section";
import Header from "../components/header";
import axios from "axios";

export default function Homepage(props) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/posts/")
    .then((res) => {
      setListings(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    console.log(listings)
  }, [])


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
          <div>
          {listings.map((item) => (
            <div>{item.title}</div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}