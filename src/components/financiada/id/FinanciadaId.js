import React from "react";
import { useParams } from "react-router-dom";
import { IdHero } from "./idHero";

function FinanciadaId() {
  const { id } = useParams();

  return (
    <section className="main-container">
      <IdHero id={id} />
    </section>
  );
}

export default FinanciadaId;
