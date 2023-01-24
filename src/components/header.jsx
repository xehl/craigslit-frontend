import React from "react";
import { Box } from "@mui/material";

export default function Header(props) {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ababab",
        borderBottom: "1px solid #ababab",
        height: "40px",
        width: "665px",
        backgroundColor: "#ebebeb",
        fontFamily: "Times New Roman",
        color: "#5c5c5c",
        fontSize: "22px",
        lineHeight: "40px",
        fontWeight: "bold",
        marginLeft: "15px",
        marginTop: "15px",
      }}>
      You're Invited! Feb 11, 2023
    </Box>
  );
}