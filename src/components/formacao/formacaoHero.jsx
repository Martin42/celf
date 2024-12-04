import React from "react";
import { useLocation } from "react-router-dom";

// Logos
import emdLogo from "../../assets/emd-logo.png";
import dgertLogo from "../../assets/dgert-logo.png";
import iefpLogo from "../../assets/iefp-logo.png";

export const FormacaoHero = () => {
  const location = useLocation();
  const isFinanciada = location.pathname === "/formacao/financiada";

  return (
    <section className="hero-container">
      <div
        className={
          isFinanciada ? "hero-financiada-bg" : "hero-nao-financiada-bg"
        }
      ></div>

      <div className="hero-content">
        {isFinanciada ? (
          <img src={emdLogo} className="emd-logo" alt="Emprego Mais Digital" />
        ) : (
          <div className="hero-text">
            <h1>CURSOS DE APRENDIZAGEM</h1>
          </div>
        )}
        <div className="certification-logo-container">
          <img
            src={iefpLogo}
            alt="Instituto de Emprego e Formação Profissional"
          />
          <img src={dgertLogo} alt="Certificação DGERT" />
        </div>
      </div>
    </section>
  );
};
