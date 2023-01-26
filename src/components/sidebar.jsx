import React from "react";
// import "./sidebar.css"
import { Box } from "@mui/material";
import Calendar from "./calendar";
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {

  let navigate = useNavigate();
  let handlePost = (e) => {
    e.preventDefault();
    // wait for 0.2 seconds before navigating to the type page
    setTimeout(() => { 
      navigate("/type");
    }, 200);
  }

  return (
    <Box sx={{
      width: 220,
      height: "90vh",
      marginTop: "15px",
      marginBottom: "15px",
      borderLeft: 1,
      borderRight: 1,
      borderColor: "#ababab",
      backgroundColor: "#ebebeb"
    }}
    >
      <Box
        sx={{
          color: "#4e0673",
          fontFamily: "Times New Roman",
          fontSize: 28,
          fontWeight: "bold",
          marginTop: "15px",
        }}
      >
        Craigslit
      </Box>
      <Box sx={{ mt: "12px" }}>
        <Box
          component="span"
          sx={{
            backgroundColor: "#fdffd1",
            color: "blue",
            fontWeight: "bold",
            paddingLeft: "5px",
            paddingRight: "5px",
            "&:hover": {
              cursor: "pointer",
              textDecoration: "underline"
            }
          }}
          onClick={handlePost}>
            create a post
        </Box>
      </Box>
      {/* <div className="sidebar-search">
        <input type="text" name="search" placeholder="Search Craigslit"/>
      </div> */}
      <Calendar />
      <div className="sidebar-party-info"><br/><i>you're invited to craigslit! barter market, gift exchange, dance party, and more</i></div>
      <div className="sidebar-about"><br/><b>date:</b> february 11, 9:00pm<br/><b>location:</b> 248 mckibbin st.</div>
    </Box>
  );
}