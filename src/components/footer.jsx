import React from "react";
import "../style/footer.scss";

// Images Imports
import govImg from "../assets/gov-pt-logo.png";
import poiseImg from "../assets/poise-logo.png";
import portugal2020Img from "../assets/portugal-2020-logo.png";
import ueImg from "../assets/ue-logo.png";

export const Footer = () => {
  return (
    <footer className="footer-layout-container">
      <div className="footer-logo-container">
        <img
          src={govImg}
          alt="Logo Governo Portugal"
          className="footer-logo-properties"
        />
        <img
          src={poiseImg}
          alt="Logo Poise"
          className="footer-logo-properties"
        />
        <img
          src={portugal2020Img}
          alt="Logo Projeto Portugal 2020"
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
          <a href="/">Proteção de Dados</a>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
              fill="#989d9e"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.438 17.168L2.546 20.2C2.49478 20.3741 2.49141 20.5587 2.53624 20.7346C2.58107 20.9104 2.67245 21.0709 2.80076 21.1992C2.92907 21.3276 3.08958 21.4189 3.26542 21.4638C3.44125 21.5086 3.62592 21.5052 3.8 21.454L6.832 20.562C8.39074 21.5049 10.1782 22.0023 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM9.738 14.263C11.761 16.285 13.692 16.552 14.374 16.577C15.411 16.615 16.421 15.823 16.814 14.904C16.8632 14.7896 16.881 14.6641 16.8655 14.5405C16.85 14.417 16.8019 14.2998 16.726 14.201C16.178 13.501 15.437 12.998 14.713 12.498C14.5619 12.3932 14.3761 12.3512 14.1946 12.3806C14.0131 12.4101 13.8502 12.5088 13.74 12.656L13.14 13.571C13.1083 13.62 13.0591 13.6551 13.0025 13.6692C12.9459 13.6833 12.886 13.6754 12.835 13.647C12.428 13.414 11.835 13.018 11.409 12.592C10.983 12.166 10.611 11.6 10.402 11.219C10.3767 11.1705 10.3696 11.1145 10.3819 11.0611C10.3941 11.0078 10.425 10.9606 10.469 10.928L11.393 10.242C11.5252 10.1276 11.6106 9.96841 11.6328 9.79495C11.6549 9.62149 11.6123 9.44596 11.513 9.302C11.065 8.646 10.543 7.812 9.786 7.259C9.6881 7.18866 9.57369 7.14479 9.45385 7.13165C9.33402 7.11851 9.21282 7.13654 9.102 7.184C8.182 7.578 7.386 8.588 7.424 9.627C7.449 10.309 7.716 12.24 9.738 14.263Z"
              fill="#989d9e"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
              fill="#989d9e"
            />
          </svg>
        </div>
      </div>

      <div className="copyright-container">
        <p>© 2024 CELF</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};
