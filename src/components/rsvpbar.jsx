import { Box } from "@mui/material";
import GuestLink from "./guestlink";

export default function RsvpBar(props) {
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
          mb: "12px",
        }}>
        Guest List
      </Box>
      <Box sx={{
        height: "80vh",
        overflow: "scroll",
      }}>
        {
          props.guests.map((item) => {
            return <GuestLink key={item.id} guest={item} />
          })
        }
      </Box>
    </Box>
  )
}