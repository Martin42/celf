import React from "react";
import { useLocation } from "react-router-dom";

// Logos
import emdLogo from "../../assets/emd-logo.png";
import dgertLogo from "../../assets/dgert-logo.png";
import iefpLogo from "../../assets/iefp-logo.png";

// Background URLs
const financiadaUrls = {
  mobile:
    "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364457/financiada-mobile-bg_irfwum.webp",
  tablet:
    "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364457/financiada-tablet-bg_qqfsyq.webp",
  desktop:
    "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364456/financiada-desktop-bg_zsiyjm.webp"
};

const naoFinanciadaUrls = {
  mobile:
    "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364451/formacao-nao-financiada-mobile-bg_ppuv03.webp",
  tablet:
    "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364451/formacao-nao-financiada-desktop-bg_jnkvdb.webp",
  desktop:
    "https://res.cloudinary.com/deo7b0ceq/image/upload/v1734364451/formacao-nao-financiada-desktop-bg_jnkvdb.webp"
};

const HeroImage = ({ urls, alt }) => (
  <picture>
    <source srcSet={urls.tablet} media="(min-width: 426px)" />
    <source srcSet={urls.desktop} media="(min-width: 768px)" />
    <img src={urls.mobile} alt={alt} />
  </picture>
);

export const FormacaoHero = () => {
  const location = useLocation();
  const isFinanciada = location.pathname === "/formacao/financiada";

  const urls = isFinanciada ? financiadaUrls : naoFinanciadaUrls;

  return (
    <section className="hero-container">
      <div className="clearer-hero-img-wrapper">
        <HeroImage urls={urls} alt="women working on laptop" />
      </div>

      <div className="hero-content">
        {isFinanciada ? (
          <img src={emdLogo} className="emd-logo" alt="Emprego Mais Digital" />
        ) : (
          <div className="hero-text">
            <h1 id="aprendizagem">CURSOS DE APRENDIZAGEM</h1>
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
