import React from "react";
import { useParams } from "react-router-dom";

import { IdHero } from "./idHero";
import { IdInfo } from "./idInfo";
import { IdForm } from "./idForm";

import courses from "../../data/courses.json";

function Id() {
  const { id } = useParams();
  const filteredCourses = courses.find((e) => e.id === id);

  return (
    <section className="main-container">
      <IdHero filteredCourses={filteredCourses} />
      <IdInfo filteredCourses={filteredCourses} />
      <IdForm filteredCourses={filteredCourses} />
    </section>
  );
}

export default Id;
