import React from "react";
import { NaoFinanciadaHero } from "./naoFinanciadaHero";
import { NaoFinanciadaCourses } from "./naoFinanciadaCourses";
import { NaoFinanciadaInfo } from "./naoFinanciadaInfo";

function NaoFinanciada() {
  return (
    <section className="main-container">
      <NaoFinanciadaHero />
      <NaoFinanciadaInfo />
      <NaoFinanciadaCourses />
    </section>
  );
}

export default NaoFinanciada;
