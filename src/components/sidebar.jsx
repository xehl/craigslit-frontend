import React from "react";
import { Box } from "@mui/material";
import Calendar from "./calendar";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

export default function Sidebar(props) {

  let navigate = useNavigate();
  let handlePost = (e) => {
    e.preventDefault();

    ReactGA.event({
      category: "click",
      action: "clicked create post in sidebar",
    });

    // wait for 0.2 seconds before navigating to the type page
    setTimeout(() => { 
      navigate("/type");
    }, 200);
  }

  // let handleRsvp = (e) => {
  //   e.preventDefault();
  //   // wait for 0.2 seconds before navigating to the rsvp page
  //   setTimeout(() => { 
  //     navigate("/rsvp");
  //   }, 200);
  // }

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
      <Box sx={{
        mt: "12px",
        mb: "12px",
        // fontFamily: "Times New Roman",
        fontSize: 18,
        fontWeight: "bold",
      }}
      >
        {/* <Box
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
          onClick={handleRsvp}
        >
          RSVP here
        </Box> */}
        Make a post to RSVP
      </Box>
      <Box>
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
          onClick={handlePost}
        >
          create a post
        </Box>
      </Box>
      <Calendar />
      <div className="sidebar-party-info"><br/><i>you're invited to craigslit! gift exchange, barter market, dance party, and more?</i><br/><br/>+1s welcome<br/><br/> if bringing more than +1, please ask</div>
      <div className="sidebar-about"><br/><b>date:</b> february 11, 9:00pm<br/><b>location:</b> 248 mckibbin st.</div>
    </Box>
  );
}