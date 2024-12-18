import React from "react";
import "../../style/homeStyles/hero.scss";
import "../../style/_buttons.scss";
import { Link } from "react-router-dom";

const mobileHomeUrl =
  "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364452/home-mobile-bg_an99am.webp";
const desktopHomeUrl =
  "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364451/home-desktop-bg_zjnva1.webp";
const tabletHomeUrl =
  "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364452/home-tablet-bg_quqvyz.webp";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-img-wrapper">
        <picture>
          <source srcSet={tabletHomeUrl} media="(min-width: 426px)" />
          <source srcSet={desktopHomeUrl} media="(min-width: 768px)" />
          <img src={mobileHomeUrl} alt="women working on laptop" />
        </picture>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>INVISTA NA SUA FORMAÇÃO</h1>
          <p>Adquira novas competências para enfrentar o mundo de trabalho</p>
        </div>
        <Link to={"/formacao/financiada"}>
          <button type="button" className="white-button">
            Oferta Formativa
          </button>
        </Link>
      </div>
    </section>
  );
};
