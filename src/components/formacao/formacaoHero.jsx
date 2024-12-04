import React from "react";
import { useLocation } from "react-router-dom";

// Logos
import emdLogo from "../../assets/emd-logo.png";
import dgertLogo from "../../assets/dgert-logo.png";
import iefpLogo from "../../assets/iefp-logo.png";

// Background URLs
const financiadaUrls = {
  mobile:
    "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732554084/financiada-mobile-bg_zhuvoa.webp",
  tablet:
    "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732554085/financiada-tablet-bg_xknous.webp",
  desktop:
    "https://res.cloudinary.com/ds2krfoyx/image/upload/v1732554085/financiada-desktop-bg_c5kh8l.webp"
};

const naoFinanciadaUrls = {
  mobile:
    "https://res.cloudinary.com/ds2krfoyx/image/upload/v1733242875/formacao-nao-financiada-mobile-bg_idrxin.webp",
  tablet:
    "https://res.cloudinary.com/ds2krfoyx/image/upload/v1733242875/formacao-nao-financiada-desktop-bg_d9txho.webp",
  desktop:
    "https://res.cloudinary.com/ds2krfoyx/image/upload/v1733242875/formacao-nao-financiada-desktop-bg_d9txho.webp"
};

const HeroImage = ({ urls, alt }) => (
  <picture>
    <source srcSet={urls.tablet} media="(min-width: 426px)" />
    <source srcSet={urls.desktop} media="(min-width: 768px)" />
    <img src={urls.mobile} alt={alt} loading="lazy" />
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
