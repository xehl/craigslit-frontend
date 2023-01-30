import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import "./listingpage.css"
import axios from "axios";
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen";

export default function ListingPage(props) {
  const params = useParams()
  // configure cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dnzwb1afa'
    }
  })

  const [title, setTitle] = useState(null)
  const [price, setPrice] = useState(null)
  const [itemlocation, setLocation] = useState(null)
  const [size, setSize] = useState(null)
  const [condition, setCondition] = useState(null)
  const [description, setDescription] = useState(null)
  const [author, setAuthor] = useState(null)
  const [created, setCreated] = useState(null)
  const [imageID, setImageID] = useState(null)
  const [type, setType] = useState(null)

  let navigate = useNavigate()

  useEffect(() => {
    // console.log(`${process.env.REACT_APP_API_URL}/posts/` + params.listingid + "/")
    // get text fields from django api
    axios.get(`${process.env.REACT_APP_API_URL}/posts/` + params.listingid + "/")
      .then((res) => {
        let listing = res.data.listing
        // console.log(res)
        setTitle(listing.title)
        setPrice(listing.price)
        setLocation(listing.location)
        setSize(listing.size)
        setCondition(listing.condition)
        setDescription(listing.description)
        setAuthor(listing.author)
        setCreated(listing.created)
        setImageID(listing.imageid)
        setType(listing.listingtype)
    })
    .catch((err) => {
      console.log(err);
    });
    // eslint-disable-next-line
  }, [])

  const myImage = cld.image("v1653060264/" + imageID + ".jpg")

  let handleHome = (e) => {
    e.preventDefault();
    setTimeout(() => { 
      navigate("/");
    }, 200);  }
  
  return (
    <div className="listing-page-container">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          borderBottom: "1px solid #ababab",
          backgroundColor: "#ebebeb",
          color: "#5c5c5c",
          fontSize: {xs: "14px", sm: "22px"},
          fontWeight: "bold",
          lineHeight: "40px",
        }}
        className="category-header"
      >
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>{type} &gt; {title}</div> 
      </Box>
      <Box sx={{
        p: 2
      }}>
      <Box sx={{
        width: { xs: "90vw", md: "900px" },
        margin: "0 auto",
      }}>
        <Box sx={{
          mt: {xs: "20px", sm: "50px"},
          fontFamily: "Times New Roman",
          fontSize: "30px",
          fontWeight: "bold",
        }}
        >
          {title} <span className="listing-price">$ {price}</span>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}>
          <Box sx={{
            mr: { xs: 0, sm: "20px" },
            mb: { xs: "20px", sm: 2 },
            mt: { xs: "20px", sm: 2 },
            width: { xs: "90vw", md: "650px" },
            maxHeight: { xs: "400px", md: "500px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ebebeb",
          }}>
            {/* <img src={require("../media/backpack.jpeg")} alt="backpack" /> */}
            <AdvancedImage cldImg={myImage} className="listing-image"/>
          </Box>
          <div>
            <div className="detail">location: {itemlocation}</div><br/>
            <div className="detail">size: {size}</div><br/>
            <div className="detail">condition: {condition}</div>
          </div>
        </Box>
        <div className="listing-description">
          {description}
        </div>
        <div>
          Posted by: {author} on {created}
        </div>
        </Box>
      </Box>
    </div>
  );
}