// Display all posts correlated to a category of listing
import "./category.css"
import "./submitform.css"
import ListingCard from "../components/listingcard"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material"
import axios from "axios";

export default function Category() {

  const params = useParams()
  const [category, setCategory] = useState(params.category)
  const [listingData, setListingData] = useState([])
  
  console.log(`${process.env.REACT_APP_API_URL}/category/${params.category}`)

  useEffect(() => {
    console.log("useEffect")
    axios.get(`${process.env.REACT_APP_API_URL}/category/${params.category}`)
      .then((res) => {
        let listings = res.data.listings
        listings.reverse()
        setListingData(res.data.listings)
      })
  }, [params.category])

  console.log(listingData)

  if (category === "free") {
    setCategory("free and for sale")
  }
  if (category === "links") {
    setCategory("links / discussion")
  }

  let navigate = useNavigate();

  let handleHome = (e) => {
    e.preventDefault();
    setTimeout(() => { 
      navigate("/");
    }, 200);
  }

  return (
    <div className="category-container">
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
        <div>craigslit &gt; category &gt; {category}</div>
      </Box>
      <Box sx={{
        width: "100vw",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
      }}>
        <Box      
          id="listing-container"
          sx={{
            width: "900px",
            // border: 1,
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <form className="search-bar">
            <input type="text" className="category-search" />
            <button className="search-button">search</button>
          </form> */}

          <Grid container spacing={2}>
            {
              listingData.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}>  
                    <ListingCard key={item._id} data={item} />
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Box>
    </div>
  );
}