import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/index.scss";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/home/Home";
import About from "./components/about/About";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formacao/financiada" element={""} />
        <Route path="/formacao/nao-financiada" element={""} />
        <Route path="/sobre-nos" element={<About />} />
      </Routes>
    </Router>

    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
