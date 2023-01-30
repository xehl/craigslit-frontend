// form for submitting a post
import { React, useRef, useState } from "react"
import { Box } from "@mui/material"
import ReactTooltip from "react-tooltip";
import "./submitform.css"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

export default function SubmitForm(props) {

  let location = useLocation()
  let navigate = useNavigate()
  
  // store user image
  const [image, setImage] = useState(null)

  let title = useRef("title")
  let price = useRef("price")
  let phone = useRef("phone")
  let itemlocation = useRef("location")
  let size = useRef("size")
  let condition = useRef("condition")
  let description = useRef("description")
  let author = useRef("author")

  const [titleMissing, setTitleMissing] = useState(null)
  // const [priceMissing, setPriceMissing] = useState(null)
  // const [locationMissing, setLocationMissing] = useState(null)
  // const [conditionMissing, setConditionMissing] = useState(null)
  const [authorMissing, setAuthorMissing] = useState(null)
  // const [sizeMissing, setSizeMissing] = useState(null)
  const [descriptionMissing, setDescriptionMissing] = useState(null)
  const [imageMissing, setImageMissing] = useState(null)
  const [phoneMissing, setPhoneMissing] = useState(null)

  // make api post request with form data
  let handleSubmit = (e) => {

    e.preventDefault()

    let incomplete = false

    // only submit api calls if all fields are complete
    if (title.current.value !== "") {
      setTitleMissing(false)
    }
    else {
      setTitleMissing(true)
      incomplete = true
    }

    // if (price.current.value !== "") {
    //   setPriceMissing(false)
    // }
    // else {
    //   setPriceMissing(true)
    //   incomplete = true
    // }

    // if (itemlocation.current.value !== "") {
    //   setLocationMissing(false)
    // }
    // else {
    //   setLocationMissing(true)
    //   incomplete = true
    // }

    // if (size.current.value !== "") {
    //   setSizeMissing(false)
    // }
    // else {
    //   setSizeMissing(true)
    //   incomplete = true
    // }

    // if (condition.current.value !== "") {
    //   setConditionMissing(false)
    // }
    // else {
    //   setConditionMissing(true)
    //   incomplete = true
    // }

    if (phone.current.value !== "") {
      setPhoneMissing(false)
    }
    else {
      setPhoneMissing(true)
      incomplete = true
    }

    if (author.current.value !== "") {
      setAuthorMissing(false)
    }
    else {
      setAuthorMissing(true)
      incomplete = true
    }

    if (description.current.value !== "") {
      setDescriptionMissing(false)
    }
    else {
      setDescriptionMissing(true)
      incomplete = true
    }

    if (image !== null) {
      setImageMissing(false)
    }
    else {
      setImageMissing(true)
      incomplete = true
    }


    // if (price.current.value.match("[0-9]+")) {
    //   setPriceMissing(false)
    // }
    // else {
    //   setPriceMissing(true)
    //   incomplete = true
    // }

    if (incomplete) {
      return
    }

    // makes an empty object called formdata, appends image and the correct cloudinary preset
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "intsirma")

    // post request to send image to cloudinary, then post request to send text
    axios.post("https://api.cloudinary.com/v1_1/dnzwb1afa/image/upload", formData)
      .then((res) => {
        // console.log("image id: " + res.data.public_id)
        axios.post(`${process.env.REACT_APP_API_URL}/posts/`, {
          "title": title.current.value,
          "author": author.current.value,
          "description": description.current.value,
          "price": price.current.value,
          "location": itemlocation.current.value,
          "condition": condition.current.value,
          "size": size.current.value,
          "imageid": res.data.public_id,
          "phone": phone.current.value,
          "listingtype": location.state.listingtype
        }).then(
          (res) => {
            // console.log(res.data.listing)
            let listing = res.data.listing
            navigate("/listing/" + listing._id)
          }
        )
          .catch(
            (err) => console.log(err)
          )
      })
  }

  // home button sends user back to homepage
  let handleHome = (e) => {
    e.preventDefault()
    setTimeout(() => {
      navigate("/");
    }, 200);
  }

  // console.log(location.state)

  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          borderBottom: "1px solid #ababab",
          backgroundColor: "#ebebeb",
          color: "#5c5c5c",
          fontSize: {xs: "14px", sm: "22px"},
          fontWeight: "bold",
          lineHeight: "40px",
        }}
        className="category-header"
      >
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; post &gt; { location.state.listingtype }</div>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <form className="form-container">
          <Box
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', sm: 'row'},
              justifyContent: 'space-between',
              mt: {xs: "20px", sm: "80px"},
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'space-between',
                pl: {xs: '20px', sm: '0px'},
              }}
            >
              <input type="text" placeholder="title" ref={title} className={titleMissing ? "incomplete" : "input"} id="title" autoComplete="off" required/>
              <input type="text" placeholder="author" ref={author} className={authorMissing ? "incomplete" : "input"} id="author" autoComplete="off"/>
              <input type="text" placeholder="phone" ref={phone} className={phoneMissing ? "incomplete" : "input"} id="phone" autoComplete="off"/>
            </Box>
            <Box sx={{
              pl: { xs: '20px', sm: '0px' },
              display: 'flex',
              flexDirection: {xs: 'column-reverse', sm: 'row'},
            }}>
              <span data-tip='price must be a number' data-event='click focus'>
                $ <input type="text" placeholder="price" ref={price} className="input" id="price" autoComplete="off" />
                <ReactTooltip globalEventOff='click'/>
              </span>
              <input type="text" placeholder="location" ref={itemlocation} className="input" autoComplete="off"/>
            </Box>
          </Box>
          <Box sx={{
            width: "80vw",
            p: { xs: 3, sm: 0 },
          }}>
            <textarea ref={description} className={descriptionMissing ? "description-incomplete" : "description"} placeholder="description"/>
          </Box>
          <div className="detail-container">
            <Box
              sx={{
                display: 'flex',
                m: "15px",
                flexDirection: {xs: 'column', sm: 'row'},
              }}
              className="bottom-row"
            >
              <div>
                <span className="image-text">image: </span><input type="file" className={imageMissing ? "image-incomplete" : ""} onChange={(e) => setImage(e.target.files[0])} />
                <input type="text" placeholder="condition" ref={condition} className="input" id="condition" autoComplete="off"/>
                <input type="text" placeholder="size/dimensions" ref={size} className="input" id="size" autoComplete="off"/>
              </div>
              <button className="submit-button" onClick={handleSubmit}>submit listing</button>
            </Box>
          </div>
        </form>
      </Box>
    </Box>
  );
}