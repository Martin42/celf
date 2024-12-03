import React from "react";

//Logos
import dgertLogo from "../../assets/dgert-logo.png";
import iefpLogo from "../../assets/iefp-logo.png";

export const NaoFinanciadaHero = () => {
  return (
    <section className="hero-container">
      <div className="hero-nao-financiada-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>CURSOS DE APRENDIZAGEM</h1>
        </div>
        <div className="certification-logo-container">
          <img
            src={iefpLogo}
            alt="instituto de emprego e formação profissional"
          />
          <img src={dgertLogo} alt="certificação dgert" />
        </div>
      </div>
    </section>
  );
};
