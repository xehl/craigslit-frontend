import React from "react";
import "./listingcard.css"
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import {fill} from "@cloudinary/url-gen/actions/resize";

export default function ListingCard(props) {

  // get cloudinary image
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dnzwb1afa'
    }
  })
  const image = cld.image("v1653060264/" + props.data.imageid + ".jpg")
  image.resize(fill().width(180).height(180));

  let navigate = useNavigate()

  let listing = props.data
  console.log(listing)

  let handleClick = (e) => {
    e.preventDefault();
    console.log("item number: " + listing._id)
    navigate(`/listing/${listing._id}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="listing-card"
      onClick={handleClick}
    >
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(245, 245, 245)"
      }}>
        <AdvancedImage cldImg={image} />
      </Box>
      <Box sx={{
        mt: 2,
        width: "80%",
      }}>
        {listing.title} - ${listing.price}
      </Box>
    </Box>
  );
}