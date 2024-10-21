import React from "react";
import "../style/hero.scss";
import "../style/_buttons.scss";

export const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>INVISTA NA SUA FORMAÇÃO</h1>
            <p className="about-text">
              Adquira novas competências para enfrentar o mundo de trabalho
            </p>
          </div>
          <button type="button" className="white-button">
            Saiba Mais
          </button>
        </div>
      </div>

      <div className="about-container">
        <h1>O CELF,</h1>
        <p className="about-text">
          Fundado em 2006, assume um papel fundamental na comunidade em que se
          insere, oferecendo uma panóplia de cursos em áreas essenciais, tanto a
          indivíduos em atividade profissional como a desempregados.
        </p>
        <p className="about-text">
          O CELF surgiu como forma de dar resposta às exigências do mercado e da
          área envolvente uma vez que, na conjuntura atual,
          <span>
            {" "}
            a formação profissional e escolar são consideradas peças
            fundamentais para a criação de valor e desenvolvimento
            socioeconómico{" "}
          </span>
          da sociedade, de forma a promover a empregabilidade.
        </p>
      </div>
    </>
  );
};
