import React from "react";
import "../../style/homeStyles/metrics.scss";

export const Metrics = () => {
  return (
    <section className="metrics-container">
      <div className="metrics-content">
        <h2>+488</h2>
        <p>Formandos Satisfeitos</p>
      </div>
      <div className="metrics-content">
        <h2>+124</h2>
        <p>Cursos Completados</p>
      </div>
      <div className="metrics-content">
        <h2>+7500</h2>
        <p>Horas de Formação</p>
      </div>
    </section>
  );
};
