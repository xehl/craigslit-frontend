import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

export default function SeeMore(props) {

  let categoryName = props.title.split(" ")[0];
  if (categoryName === "missed") {
    categoryName = "personals";
  }

  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    // log event in GA
    ReactGA.event({
      category: "click",
      action: `user clicked on see more ${categoryName}`, 
    });

    setTimeout(() => { 
      navigate(`/category/${categoryName}`);
    }, 200);
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        borderBottom: "1px solid #ababab",
        // borderTop: "1px solid #ababab",
        // hide overflow text
        textOverflow: "clip",
        textAlign: "center",
        overflow: "hidden",
        wrap: "nowrap",
        width: {md: "225px", lg: "322.5px"},
        paddingBottom: "2px",
        mb: "25px",
        backgroundColor: "#ebebeb",
        color: "#5c5c5c",
        ":hover": {
          textDecoration: "underline",
          cursor: "pointer"
        },
    }}>
      see all
    </Box>
  )
}