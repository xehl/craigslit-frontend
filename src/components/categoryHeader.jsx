import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryHeader(props) {

  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(`/category/${props.title.split(" ")[0]}`);
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
      mt: "15px",
      borderTop: "1px solid #ababab",
      borderBottom: "1px solid #ababab",
      height: "25px",
      lineHeight: "25px",
      fontWeight: "bold",
      backgroundColor: "#ebebeb",
        color: "#5c5c5c",
      ":hover": {
        cursor: "pointer",
        textDecoration: "underline"
      }
    }}>
      {props.title}
    </Box>
  )
}