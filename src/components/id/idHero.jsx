import React from "react";

export const IdHero = (props) => {
  const { id, nome } = props.filteredCourses;
  return (
    <section className="hero-container">
      <div className={`hero-id-bg C${id}`}></div>
      <div className="hero-content">
        <div className="course-text">
          <h1>{nome.toUpperCase()}</h1>
          <p>UFCD {id}</p>
        </div>
      </div>
    </section>
  );
};
