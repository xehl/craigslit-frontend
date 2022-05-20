import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listingpage.css"
import axios from "axios";
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen";

export default function ListingPage(props) {

  let navigate = useNavigate();
  let [title, setTitle] = useState("title")
  let [price, setPrice] = useState("price")
  let [location, setLocation] = useState("location")
  let [size, setSize] = useState("size")
  let [condition, setCondition] = useState("condition")
  let [description, setDescription] = useState("description")
  let [author, setAuthor] = useState("author")
  let [time, setTime] = useState("time")

  // get image from cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dnzwb1afa'
    }
  })
  // need to make this dynamic
  const myImage = cld.image("v1653060264/u6gq3x29sqr559z8jno6.jpg")

  let handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }

  // get text fields from django api
  axios.get("http://127.0.0.1:8000/posts/")
    .then((res) => {
      setTitle(res.data[1].title)
      setPrice(res.data[1].price)
      setLocation(res.data[1].location)
      setSize(res.data[1].size)
      setCondition(res.data[1].condition)
      setDescription(res.data[1].description)
      setAuthor(res.data[1].author)
      setTime(res.data[1].created)
      console.log(res.data[0])
  })
  .catch((err) => {
    console.log(err);
  });

  return (
    <div className="listing-page-container">
      <div className="listing-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; listing &gt; {title}</div> 
      </div>
      <div className="listing-container">
        <div className="listing-title">
          {title} <span className="listing-price">{price}</span>
        </div>
        <div className="listing-details">
          <div>
            {/* <img src={require("../media/backpack.jpeg")} alt="backpack" /> */}
            <AdvancedImage cldImg={myImage} className="listing-image"/>
          </div>
          <div>
            <div className="detail">location: {location}</div><br/>
            <div className="detail">size: {size}</div><br/>
            <div className="detail">condition: {condition}</div>
          </div>
        </div>
        <div className="listing-description">
          {description}
        </div>
        <div>
          Posted by: {author} at {time}
        </div>
      </div>
    </div>
  );
}