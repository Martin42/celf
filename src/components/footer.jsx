import React from "react";
import "../style/footer.scss";

// Images Imports
import govImg from "../assets/gov-pt-logo.png";
import ueImg from "../assets/ue-logo.png";
import prrImg from "../assets/prr-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-layout-container">
      <div className="footer-logo-container">
        <img
          src={prrImg}
          alt="Logo Plano de Recuperação e Resiliência"
          className="footer-logo-properties"
        />
        <img
          src={govImg}
          alt="Logo Governo Portugal"
          className="footer-logo-properties"
        />
        <img
          src={ueImg}
          alt="Logo União Europeia"
          className="footer-logo-properties"
        />
      </div>

      <div className="main-footer-container">
        <div className="useful-links-container">
          <h2>Links Úteis</h2>
          <Link to={"/privacy-policy"}>Proteção de Dados</Link>
          <a
            href="https://www.livroreclamacoes.pt/inicio/"
            target="_blank"
            rel="noreferrer"
          >
            Livro de Reclamações
          </a>
          <a href="https://www.iefp.pt/" target="_blank" rel="noreferrer">
            Centro de Emprego
          </a>
          <a
            href="https://www.seg-social.pt/inicio"
            target="_blank"
            rel="noreferrer"
          >
            Segurança Social
          </a>
          <a
            href="https://www.portaldasfinancas.gov.pt/at/html/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Finanças
          </a>
        </div>

        <div className="social-container">
          <a
            href="https://www.facebook.com/celfformacao"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <title>Facebook</title>
              <path
                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                fill="#989d9e"
              />
            </svg>
          </a>

          <a
            href="https://maps.app.goo.gl/eRM9xine2e59UZzb6"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <title>Encontre-nos no Google Maps</title>
              <path
                d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                fill="#989d9e"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="copyright-container">
        <p>© 2024 CELF,</p>
        <p>All Rights Reserved</p>
        <p>
          Website by{" "}
          <a
            href="https://www.linkedin.com/in/martin-armada/"
            target="_blank"
            rel="noreferrer"
          >
            MA
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};
