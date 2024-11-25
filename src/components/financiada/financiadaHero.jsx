import React from "react";

// Logos
import emdLogo from "../../assets/emd-logo.png";
import dgertLogo from "../../assets/dgert-logo.png";
import iefpLogo from "../../assets/iefp-logo.png";

export const FinanciadaHero = () => {
  return (
    <section className="hero-container">
      <div className="hero-financiada-bg"></div>
      <div className="hero-content">
        <img src={emdLogo} alt="Emprego Mais Digital" />

        <div className="certification-logo-container">
          <img src={dgertLogo} alt="certificação dgert" />
          <img
            src={iefpLogo}
            alt="instituto de emprego e formação profissional"
          />
        </div>
      </div>
    </section>
  );
};
