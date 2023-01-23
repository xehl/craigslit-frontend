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
    axios.get(`${process.env.REACT_APP_API_URL}/category/${params.category}`)
      .then((res) => {
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
    navigate("/");
  }

  return (
    <div className="category-container">
      <div className="category-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; category &gt; {category}</div>
      </div>
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
                  <Grid item xs={4}>  
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