import React from "react";
import "../../style/homeStyles/hero.scss";
import "../../style/_buttons.scss";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-home-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>INVISTA NA SUA FORMAÇÃO</h1>
          <p>Adquira novas competências para enfrentar o mundo de trabalho</p>
        </div>
        <button type="button" className="white-button">
          Oferta Formativa
        </button>
      </div>
    </section>
  );
};
