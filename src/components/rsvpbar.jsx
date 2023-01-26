import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RsvpBar() {

  const [rsvps, setRsvps] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/rsvp/`)
      .then((res) => {
        console.log(res.data)
        setRsvps(res.data.rsvps)
      }
    )
  }, [])


  return (
    <Box sx={{
      width: 180,
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
          rsvps.map((item) => {
            return <Box sx={{
              fontFamily: "Times New Roman",
              fontSize: 18,
              marginTop: "7px",
            }}>
              {item.name}
            </Box>
          })
        }
      </Box>
    </Box>
  )
}