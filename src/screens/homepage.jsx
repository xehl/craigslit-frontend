// homepage for craigslit (currently on app.js)
import { React, useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./homepage.css"
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import MobileGuestLink from "../components/mobileguestlink";
import Header from "../components/header";
import ListingLink from "../components/listinglink";
import axios from "axios";
import CategoryHeader from "../components/categoryHeader";
import RsvpBar from "../components/rsvpbar";
import "./submitform.css"

export default function Homepage(props) {

  let navigate = useNavigate();

  const [listings, setListings] = useState([])
  // console.log(listings)
  const [guests, setGuests] = useState([])

  // console.log(`${process.env.REACT_APP_API_URL}/recent/`)

  useEffect(() => {
    // get most recent listings for each category (set to 10 for now)
    axios.get(`${process.env.REACT_APP_API_URL}/recent/`)
    .then((res) => {
      setListings(res.data.listings)
    })
    .catch((err) => {
      console.log(err)
    })

    axios.get(`${process.env.REACT_APP_API_URL}/guests/`)
      .then((res) => {
        let guestList = res.data.guests
        guestList.reverse()
        setGuests(guestList)
      }
    ).catch((err) => {
      console.log(err)
    })
  }, [])

  let handleHome = (e) => {
    e.preventDefault()
    setTimeout(() => { 
      navigate("/");
    }, 200);
  }
  
  let handlePost = (e) => {
    e.preventDefault()
    setTimeout(() => { 
      navigate("/type");
    }, 200);  }

  return (
  <Box>
    {/* mobile layout */}
    <Box sx={{
      display: { xs: "flex", sm: "none" },
      flexDirection: "column",
    }}>
      <Box sx={{
        display: {xs: "flex", sm: "none"},
        alignItems: "center",
        height: "40px",
        borderBottom: "1px solid #ababab",
        backgroundColor: "#ebebeb",
        color: "#5c5c5c",
        fontSize: "22px",
        fontWeight: "bold",
        lineHeight: "40px",
        }}
      >
          <button className="home-button" onClick={handleHome}>CL</button>
          <Box sx={{
              fontFamily: "Times New Roman",
              fontSize: "20px",
              wrap: "nowrap",
          }}>
              You're invited to Craigslit!
          </Box>
        </Box>
        <Box sx={{
          m: 1,
          p: 2,
          border: "1px solid #ababab",
          backgroundColor: "#fdffd1",
        }}>
          <Box sx={{
            mb: .7,
          }}>
            <b>details: </b>feb 11, 2023 - 9:00pm - 248 mckibbin st.
          </Box>
          <b>make a post to RSVP:</b>
          <Box
          component="span"
          sx={{
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
        <Box sx={{
          m: 1,
          border: "1px solid #ababab",
          backgroundColor: "#ebebeb",
        }}>
          <Box sx={{
            position: "relative",
            top: "0",
            borderBottom: "1px solid #ababab",
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            textAlign: "center",
            color: "white",
            backgroundColor: "#5c5c5c",
          }}>
            Guest List
          </Box>
          <Box sx={{
            m: 2,
            whiteSpace: "nowrap",
            display: "block",
            overflow: "scroll",
            textOverflow: "none",
          }}>
            {guests.map((item) => {
              return <MobileGuestLink key={item.id} name={item.name} />
            })}
          </Box>
        </Box>
        <Box sx={{
          mr: 1,
          ml: 1
        }}>
          <CategoryHeader title="gigs" />
          <ListingLink title="DJ Wanchoo @ Craigslit" type="gigs" listingid="63d7f5d437bf0a84c5301081" />
            <div>
              {listings.map((item) => {
                if (item.listingtype === "gigs" && item._id !== "63d7f5d437bf0a84c5301081") {
                  return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                }
              return null
              })}
            </div>
          <CategoryHeader title="free and for sale" />
          <div>
            {listings.map((item) => {
              if (item.listingtype === "free") {
                return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
              }
            return null
            })}
          </div>
          <CategoryHeader title="missed connections" />
          <div>
            {listings.map((item) => {
              if (item.listingtype === "personals") {
                return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
              }
            return null
            })}
          </div>
          <CategoryHeader title="links / discussion" />
          <div>
            {listings.map((item) => {
              if (item.listingtype === "links / discussion") {
                return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
              }
            return null
            })}
          </div>
        </Box>
    </Box>
    {/* desktop layout */}
    <Box sx={{
      height: "100vh",
      display: {xs: "none", sm: "flex"},
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
              <ListingLink title="DJ Wanchoo @ Craigslit" type="gigs" listingid="63d7f5d437bf0a84c5301081" />
              <div>
                {listings.map((item) => {
                  if (item.listingtype === "gigs" && item._id !== "63d7f5d437bf0a84c5301081") {
                    return <ListingLink key={item._id} title={item.title} type={item.listingtype} listingid={ item._id }/>
                  }
                return null
                })}
              </div>
            </div>
            <div>
            <CategoryHeader title="missed connections"/>
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
        <RsvpBar guests={guests} />
      </Box>
    </Box>
  );
}