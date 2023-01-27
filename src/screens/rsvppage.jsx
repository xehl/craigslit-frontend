import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

export default function RsvpPage() {

  let navigate = useNavigate();

  let name = useRef("name")
  let email = useRef("email")
  let phone = useRef("phone")
  let message = useRef("message")

  const [nameMissing, setNameMissing] = useState(null)

  let handleHome = (e) => {
    e.preventDefault();
    setTimeout(() => { 
      navigate("/");
    }, 200);
  }
  
  let handleRsvp = (e) => {

    e.preventDefault();

    console.log(name.current.value, email.current.value, phone.current.value, message.current.value)

    if (name.current.value === "") {
      setNameMissing(true)
      return;
    }

    // send post to rsvp endpoint
    axios.post(`${process.env.REACT_APP_API_URL}/rsvp`, {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
    })

    setTimeout(() => { 
      navigate("/");
    }, 200);
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        borderBottom: "1px solid #ababab",
        backgroundColor: "#ebebeb",
        color: "#5c5c5c",
        fontSize: "22px",
        fontWeight: "bold",
        lineHeight: "40px",
      }}>
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; rsvp</div> 
      </Box>
      <Box sx={{
        mt: "70px",
        ml: "150px",
        width: "80%",
      }}>
        <Box sx={{
          fontWeight: "bold",
          fontFamily: "Times New Roman",
          fontSize: 28,
          mb: 2,
        }}>
          RSVP here:
        </Box>
        <input ref={name} className={nameMissing ? "incomplete med" : "input med"} type="text" placeholder="name (required)" /><br/>
        <input ref={email} className="input med" type="text" placeholder="email" /><br/>
        <input ref={phone} className="input med" type="text" placeholder="phone" /><br/>
        <input ref={message} className="input med" type="text" placeholder="message" /><br/>
        <button className="submit-button" onClick={handleRsvp}>submit</button>
      </Box>
    </Box>
  )
}