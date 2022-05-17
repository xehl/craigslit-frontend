// form for submitting a post
import React from "react";
import "./submitform.css";

export default function SubmitForm(props) {
  return (
    <div className="submit-container">
      <div className="submit-header">
        <button className="home-button">cl</button>
        <div>craigslit > post</div>
      </div>
      <div className="form-container">
        <div className="top-row">
          <div>
              {/* <label for="title">title</label> */}
              <input type="text" placeholder="title" id="title" className="input"/>
              {/* <label for="author">author</label> */}
              <input type="text" placeholder="author" id="author" className="input" />
          </div>
          <div>
            <span>$ <input type="text" placeholder="price" id="price" className="input" /></span>
            <input type="text" placeholder="location" id="location" className="input"/>
          </div>
        </div>
        <textarea className="description" placeholder="Description"/>
        <div className="detail-container">
          <div className="bottom-row">
            <div>
              <input type="text" placeholder="condition" id="condition" className="input"/>
              <input type="text" placeholder="size/dimensions" id="size" className="input"/>
              <input type="text" placeholder="other notes" id="notes" className="input" />
            </div>
            <button className="submit-button">submit listing</button>
          </div>
        </div>
      </div>
    </div>
  );
}