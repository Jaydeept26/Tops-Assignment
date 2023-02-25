import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Home from "./components/Home";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from "./reportWebVitals";
import { hotDeals } from "./components/HotDeals";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("nest-app-demo"));
root.render(
  <BrowserRouter>
    {/* <HotDeals /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HotDeals" element={<hotDeals />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
