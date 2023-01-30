import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryHeader(props) {

  let categoryName = props.title.split(" ")[0];
  if (categoryName === "missed") {
    categoryName = "personals";
  }

  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    setTimeout(() => { 
      navigate(`/category/${categoryName}`);
    }, 200);
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
      mt: "15px",
      borderTop: "1px solid #ababab",
      borderBottom: "1px solid #ababab",
      height: "25px",
      textAlign: "center",
      width: { md: "225px", lg: "322.5px" },
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