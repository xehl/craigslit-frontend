import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

export default function GuestLink(props) {

  let navigate = useNavigate();

  function handleClick() {
    navigate(`/listing/${props.guest.id}`);
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
      fontFamily: "Times New Roman",
      fontSize: 18,
      marginTop: "7px",
      ml: 0.7,
        mr: 0.7,
      // hover underline
      ":hover": {
        textDecoration: "underline",
        cursor: "pointer"
      }
    }}>
      {props.guest.name}
    </Box>
  )
}