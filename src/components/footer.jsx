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
        <div className="footer-about-container">
          <h2>Sobre Nós</h2>
          <div className="about-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.4925 10.9424C14.3811 11.7893 13.9651 12.5666 13.3224 13.1293C12.6797 13.6919 11.8542 14.0014 11 13.9999C6.03751 13.9999 2.00001 9.96237 2.00001 4.99987C1.99847 4.14568 2.30794 3.32014 2.87059 2.67743C3.43324 2.03473 4.21061 1.61882 5.05751 1.50737C5.27166 1.48122 5.48854 1.52504 5.67575 1.63227C5.86296 1.73951 6.01047 1.90441 6.09626 2.10237L7.41626 5.04925V5.05675C7.48194 5.20828 7.50906 5.37372 7.49521 5.5383C7.48136 5.70287 7.42696 5.86145 7.33688 5.99987C7.32563 6.01675 7.31376 6.03237 7.30126 6.048L6.00001 7.5905C6.46813 8.54175 7.46313 9.528 8.42688 9.99737L9.94813 8.703C9.96307 8.69044 9.97872 8.67875 9.99501 8.668C10.1333 8.57575 10.2924 8.51944 10.458 8.50416C10.6235 8.48888 10.7903 8.51512 10.9431 8.5805L10.9513 8.58425L13.8956 9.90362C14.0939 9.98911 14.2592 10.1365 14.3668 10.3237C14.4744 10.511 14.5185 10.728 14.4925 10.9424Z"
                fill="#989d9e"
              />
            </svg>
            <p>227 130 275</p>
          </div>

          <div className="about-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.333 2.6665H2.66634C1.93301 2.6665 1.33967 3.2665 1.33967 3.99984L1.33301 11.9998C1.33301 12.7332 1.93301 13.3332 2.66634 13.3332H13.333C14.0663 13.3332 14.6663 12.7332 14.6663 11.9998V3.99984C14.6663 3.2665 14.0663 2.6665 13.333 2.6665ZM13.333 5.33317L7.99967 8.6665L2.66634 5.33317V3.99984L7.99967 7.33317L13.333 3.99984V5.33317Z"
                fill="#989d9e"
              />
            </svg>
            <p>formacelf@gmail.com</p>
          </div>

          <div className="about-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
            >
              <path
                d="M5.6 7.6C5.06957 7.6 4.56086 7.38929 4.18579 7.01421C3.81071 6.63914 3.6 6.13043 3.6 5.6C3.6 5.06957 3.81071 4.56086 4.18579 4.18579C4.56086 3.81071 5.06957 3.6 5.6 3.6C6.13043 3.6 6.63914 3.81071 7.01421 4.18579C7.38929 4.56086 7.6 5.06957 7.6 5.6C7.6 5.86264 7.54827 6.12272 7.44776 6.36537C7.34725 6.60802 7.19993 6.8285 7.01421 7.01421C6.8285 7.19993 6.60802 7.34725 6.36537 7.44776C6.12272 7.54827 5.86264 7.6 5.6 7.6ZM5.6 0C4.11479 0 2.69041 0.589998 1.6402 1.6402C0.589998 2.69041 0 4.11479 0 5.6C0 9.8 5.6 16 5.6 16C5.6 16 11.2 9.8 11.2 5.6C11.2 4.11479 10.61 2.69041 9.5598 1.6402C8.50959 0.589998 7.08521 0 5.6 0Z"
                fill="#989d9e"
              />
            </svg>
            <p>Rua Souto de Megide, nº 54 4410-238 Vila Nova de Gaia</p>
          </div>
        </div>
        <div className="footer-links-container">
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
      </div>

      <div className="copyright-container">
        <p>© 2024 CELF, All Rights Reserved</p>
      </div>
    </footer>
  );
};
