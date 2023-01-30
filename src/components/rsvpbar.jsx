import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import GuestLink from "./guestlink";

export default function RsvpBar() {

  const [guests, setGuests] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/guests/`)
      .then((res) => {
        console.log(res.data)
        setGuests(res.data.guests)
      }
    )
  }, [])

  return (
    <Box sx={{
      width: 210,
      height: "90vh",
      marginTop: "15px",
      marginBottom: "15px",
      ml: 2,
      borderLeft: 1,
      borderRight: 1,
      borderColor: "#ababab",
      backgroundColor: "#ebebeb"
    }}
    >
      <Box sx={{
          color: "#4e0673",
          fontFamily: "Times New Roman",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: "15px",
          mb: "12px"
        }}>
        Guest List
      </Box>
      <Box>
        {
          guests.map((item) => {
            return <GuestLink key={item.id} guest={item} />
            // <Box key={item._id}
            //   sx={{
            //   fontFamily: "Times New Roman",
            //   fontSize: 18,
            //   marginTop: "7px",
            //   ml: 0.7,
            //   mr: 0.7,
            // }}>
            //   {item.name}
            // </Box>
          })
        }
      </Box>
    </Box>
  )
}