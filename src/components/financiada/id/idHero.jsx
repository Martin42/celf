import React from "react";
import courses from "../../../data/courses.json";

export const IdHero = (props) => {
  const filteredCourses = courses.find((e) => e.id === props.id);
  console.log(filteredCourses);

  return (
    <section className="hero-container">
      <div className={`hero-id-bg C${props.id}`}></div>
      <div className="hero-content">
        <div className="course-text">
          <h1>{filteredCourses.nome.toUpperCase()}</h1>
          <p>UFCD {filteredCourses.id}</p>
        </div>
      </div>
    </section>
  );
};
