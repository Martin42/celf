import React from "react";
import "../../style/aboutStyles/aboutInfo.scss";

export const AboutInfo = () => {
  return (
    <section className="about-container">
      <h1>O CELF,</h1>
      <p>
        Escola de Línguas e Formação, foi fundada em 2006, com sede em Canelas,
        Vila Nova de Gaia. Localiza-se numa freguesia com 12300 habitantes e
        zonas industriais com mais de 300 empresas, pelo que se pode afirmar que
        assume um papel fundamental na aquisição de mais valias e novas
        competências à população. Esta situação permite-lhe oferecer uma
        panóplia de cursos, em áreas que se têm vindo a manifestar essenciais,
        por parte de indíviduos que se encontram no ativo, bem como
        desempregados.
      </p>
      <p>
        O CELF surgiu como forma de dar resposta às exigências do mercado e da
        área envolvente uma vez que, na conjuntura atual,
        <span>
          {" "}
          a formação profissional e escolar são consideradas peças fundamentais
          para a criação de valor e desenvolvimento socioeconómico{" "}
        </span>
        da sociedade, de forma a promover a empregabilidade.
      </p>
    </section>
  );
};
