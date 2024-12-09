import React from "react";
import "../../style/homeStyles/hero.scss";
import "../../style/_buttons.scss";
import { Link } from "react-router-dom";

const mobileHomeUrl =
  "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732553491/wtugdfsshkxpftthzexc.webp";
const desktopHomeUrl =
  "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732553491/t4qfnfne7qnwhpvqrpei.webp";
const tabletHomeUrl =
  "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732553491/ge7dsgnbgnb4tv13afpf.webp";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-img-wrapper">
        <picture>
          <source srcSet={tabletHomeUrl} media="(min-width: 426px)" />
          <source srcSet={desktopHomeUrl} media="(min-width: 768px)" />
          <img
            src={mobileHomeUrl}
            alt="women working on laptop"
            loading="lazy"
          />
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
