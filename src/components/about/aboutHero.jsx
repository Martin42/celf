import React from "react";

const mobileAboutUrl =
  "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732553953/about-mobile-bg_u3jfja.webp";
const tabletAboutUrl =
  "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732553953/about-tablet-bg_d3ceie.webp";
const desktopAboutUrl =
  "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732553954/about-desktop-bg_upkdsl.webp";

export const AboutHero = () => {
  return (
    <section className="hero-container">
      <div className="hero-img-wrapper">
        <picture>
          <source srcSet={tabletAboutUrl} media="(min-width: 426px)" />
          <source srcSet={desktopAboutUrl} media="(min-width: 768px)" />
          <img
            src={mobileAboutUrl}
            alt="women working on laptop"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>SOBRE NÓS</h1>
        </div>
      </div>
    </section>
  );
};
