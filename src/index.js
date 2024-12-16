import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/index.scss";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Id from "./components/id/Id";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Formacao from "./components/formacao/formacao";
import ScrollToTop from "./utils/scrollToTop";
import { Privacy } from "./components/privacy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formacao/financiada" element={<Formacao />} />
        <Route path="/formacao/financiada/:id" element={<Id />} />

        <Route path="/formacao/nao-financiada" element={<Formacao />} />
        <Route path="/formacao/nao-financiada/:id" element={<Id />} />
        <Route path="/sobre-nos" element={<About />} />

        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
