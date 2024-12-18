import React from "react";

const mobileAboutUrl =
  "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364454/about-mobile-bg_dtceyd.webp";
const tabletAboutUrl =
  "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364454/about-tablet-bg_pvzung.webp";
const desktopAboutUrl =
  "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364454/about-desktop-bg_z7fnqd.webp";

export const AboutHero = () => {
  return (
    <section className="hero-container">
      <div className="hero-img-wrapper">
        <picture>
          <source srcSet={tabletAboutUrl} media="(min-width: 426px)" />
          <source srcSet={desktopAboutUrl} media="(min-width: 768px)" />
          <img src={mobileAboutUrl} alt="women working on laptop" />
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
