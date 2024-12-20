import React from "react";

export const IdHero = (props) => {
  const { id, nome, mobile, desktop } = props.filteredCourses;
  return (
    <section className="hero-container">
      <div className="clearer-hero-img-wrapper">
        <picture>
          <source srcSet={desktop} media="(min-width: 769px)" />
          <img src={mobile} alt={nome} />
        </picture>
      </div>
      <div className="hero-content">
        <div className="course-text">
          <h1>{nome.toUpperCase()}</h1>
          <p>UFCD {id}</p>
        </div>
      </div>
    </section>
  );
};
