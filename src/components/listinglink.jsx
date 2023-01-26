import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListingLink(props) {

  // console.log(props)

  let navigate = useNavigate()

  let handleClick = (e) => {
    e.preventDefault();
    console.log("item number: " + props.listingid)
    setTimeout(() => { 
      navigate("/listing/" + props.listingid, { state: { listingnum: props.listingid } });
    }, 200);
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        borderBottom: "1px solid #cbcbcb",
        paddingBottom: "2px",
        color: "blue",
        ":hover": {
          textDecoration: "underline",
          cursor: "pointer"
        }
      }}
    >
      { props.title }
    </Box>
  );
}