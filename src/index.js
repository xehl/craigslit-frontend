import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SubmitForm from "./screens/submitform";
import Category from "./screens/category.jsx";
import ListingPage from "./screens/listingpage";
import TypeSelect from "./screens/typeselect";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/post" element={<SubmitForm />}></Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="/listing" element={<ListingPage />}>
        <Route path=":listingid" element={<ListingPage />} />
      </Route>
      <Route path="/type" element={<TypeSelect />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
