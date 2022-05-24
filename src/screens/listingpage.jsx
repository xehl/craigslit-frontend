import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./listingpage.css"
import axios from "axios";
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen";

export default function ListingPage(props) {

  // configure cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dnzwb1afa'
    }
  })

  const location = useLocation()
  const [title, setTitle] = useState(null)
  const [price, setPrice] = useState(null)
  const [itemlocation, setLocation] = useState(null)
  const [size, setSize] = useState(null)
  const [condition, setCondition] = useState(null)
  const [description, setDescription] = useState(null)
  const [author, setAuthor] = useState(null)
  const [created, setCreated] = useState(null)
  const [imageID, setImageID] = useState(null)

  let navigate = useNavigate()

  useEffect(() => {
    // get text fields from django api
    axios.get("http://127.0.0.1:8000/posts/" + location.state.listingnum + "/")
      .then((res) => {
        console.log(res.data)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setLocation(res.data.location)
        setSize(res.data.size)
        setCondition(res.data.condition)
        setDescription(res.data.description)
        setAuthor(res.data.author)
        setCreated(res.data.created)
        setImageID(res.data.imageid)
    })
    .catch((err) => {
      console.log(err);
    });
    // eslint-disable-next-line
  }, [])

  const myImage = cld.image("v1653060264/" + imageID + ".jpg")

  let handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }
  

  return (
    <div className="listing-page-container">
      <div className="listing-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; listing &gt; {title}</div> 
      </div>
      <div className="listing-container">
        <div className="listing-title">
          {title} <span className="listing-price">$ {price}</span>
        </div>
        <div className="listing-details">
          <div>
            {/* <img src={require("../media/backpack.jpeg")} alt="backpack" /> */}
            <AdvancedImage cldImg={myImage} className="listing-image"/>
          </div>
          <div>
            <div className="detail">location: {itemlocation}</div><br/>
            <div className="detail">size: {size}</div><br/>
            <div className="detail">condition: {condition}</div>
          </div>
        </div>
        <div className="listing-description">
          {description}
        </div>
        <div>
          Posted by: {author} at {created}
        </div>
      </div>
    </div>
  );
}