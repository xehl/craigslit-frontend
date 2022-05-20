// form for submitting a post
import { React, useState } from "react"
import "./submitform.css"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

export default function SubmitForm(props) {

  let location = useLocation()
  let navigate = useNavigate()

  const [image, setImage] = useState(null)

  let handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
  }

  let handleHome = (e) => {
    e.preventDefault()
    navigate("/")
  }

  let uploadImage = () => {
    console.log(image)
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "intsirma")

    axios.post("https://api.cloudinary.com/v1_1/dnzwb1afa/image/upload", formData)
      .then((res) => {
        console.log(res)
      })
  }

  console.log(props)
  console.log(location.state)

  return (
    <div className="submit-container">
      <div className="submit-header">
        <button className="home-button" onClick={handleHome}>CL</button>
        <div>craigslit &gt; post &gt; { location.state.listingtype }</div>
      </div>
      <div className="form-container">
        <div className="top-row">
          <div>
              <input type="text" placeholder="title" id="title" className="input" autocomplete="off"/>
              <input type="text" placeholder="author" id="author" className="input" autocomplete="off"/>
          </div>
          <div>
            <span>$ <input type="text" placeholder="price" id="price" className="input" autocomplete="off"/></span>
            <input type="text" placeholder="location" id="location" className="input" autocomplete="off"/>
          </div>
        </div>
        <textarea className="description" placeholder="description"/>
        <div className="detail-container">
          <div className="bottom-row">
            <div>
              <input type="text" placeholder="condition" id="condition" className="input" autocomplete="off"/>
              <input type="text" placeholder="size/dimensions" id="size" className="input" autocomplete="off"/>
              <input type="text" placeholder="other notes" id="notes" className="input" autocomplete="off"/>
            </div>
            <button className="submit-button" onClick={handleSubmit}>submit listing</button>
          </div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={uploadImage}>submit image</button>
        </div>
      </div>
    </div>
  );
}