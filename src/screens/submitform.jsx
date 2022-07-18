// form for submitting a post
import { React, useRef, useState } from "react"
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
  let itemlocation = useRef("location")
  let size = useRef("size")
  let condition = useRef("condition")
  let description = useRef("description")
  let author = useRef("author")

  // make api post request with form data
  let handleSubmit = (e) => {

    e.preventDefault()

    // only submit api calls if all fields are complete
    if (title.current.value === "") {
      console.log("title must not be blank")
      return
    }
    if (price.current.value === "") {
      console.log("price must not be blank")
      return
    }
    if (!price.current.value.match("[0-9]+")) {
      console.log("price must be a number")
      return
    }
    if (itemlocation.current.value === "") {
      console.log("location must not be blank")
      return
    }
    if (size.current.value === "") {
      console.log("size must not be blank")
      return
    }
    if (condition.current.value === "") {
      console.log("condition must not be blank")
      return
    }
    if (description.current.value === "") {
      console.log("description must not be blank")
      return
    }
    if (author.current.value === "") {
      console.log("author must not be blank")
      return
    }

    // makes an empty object called formdata, appends image and the correct cloudinary preset
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "intsirma")

    // post request to send image to cloudinary, then post request to send text
    axios.post("https://api.cloudinary.com/v1_1/dnzwb1afa/image/upload", formData)
      .then((res) => {
        console.log("image id: " + res.data.public_id)
        axios.post(`${process.env.REACT_APP_API_URL}/posts/`, {
          "title": title.current.value,
          "author": author.current.value,
          "description": description.current.value,
          "price": price.current.value,
          "location": itemlocation.current.value,
          "condition": condition.current.value,
          "size": size.current.value,
          "imageid": res.data.public_id,
          "listingtype": location.state.listingtype
        }).then(
          (res) => {
            console.log(res)
            navigate("/listing/" + res.data.id)
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
    navigate("/")
  }

  console.log(location.state)

  return (
    <div className="submit-container">
      <div className="submit-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; post &gt; { location.state.listingtype }</div>
      </div>
      <form className="form-container">
        <div className="top-row">
          <div>
              <input type="text" placeholder="title" ref={title} className="input" id="title" autoComplete="off" required/>
              <input type="text" placeholder="author" ref={author} className="input" autoComplete="off"/>
          </div>
          <div>
            <span>$ <input type="text" placeholder="price" ref={price} className="input" id="price" autoComplete="off"/></span>
            <input type="text" placeholder="location" ref={itemlocation} className="input" autoComplete="off"/>
          </div>
        </div>
        <textarea ref={description} className="description" placeholder="description"/>
        <div className="detail-container">
          <div className="bottom-row">
            <div>
              <input type="text" placeholder="condition" ref={condition} className="input" id="condition" autoComplete="off"/>
              <input type="text" placeholder="size/dimensions" ref={size} className="input" id="size" autoComplete="off"/>
              <span className="image-text">image: </span><input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button className="submit-button" onClick={handleSubmit}>submit listing</button>
          </div>
        </div>
      </form>
          {/* <button onClick={uploadImage}>submit image</button> */}
    </div>
  );
}