import React, { useState } from "react";
import "../style/navbar.scss";
import logoMobile from "../assets/logo-mobile-colored.png";
import logoDesktop from "../assets/logo-desktop-colored.png";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "../utils/useMediaQuery";

export const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  // Screen Size Check
  const isTablet = useMediaQuery("(max-width: 768px)");

  // Location
  const location = useLocation().pathname;

  return (
    <>
      {isTablet ? (
        // Tablet and under
        <section className={`header-container ${isNavOpen ? "open" : ""}`}>
          <div className={`logo-container ${isNavOpen ? "open" : ""}`}>
            <Link to={"/"}>
              <img
                src={logoMobile}
                alt="logo"
                className={`logo-properties ${isNavOpen ? "open" : ""}`}
                onClick={closeNav}
              />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-properties"
              viewBox="0 0 26 20"
              onClick={toggleNav}
              role="img"
              aria-label="hamburger icon"
            >
              <path
                d="M2.75586 2H24"
                className={`svg-line-path top ${isNavOpen ? "open" : ""}`}
              />
              <path
                d="M2.75586 10H24"
                className={`svg-line-path middle ${isNavOpen ? "open" : ""}`}
              />
              <path
                d="M2.75586 18H24"
                className={`svg-line-path bottom ${isNavOpen ? "open" : ""}`}
              />
            </svg>
          </div>

          <nav className={`nav-container ${isNavOpen ? "open" : ""}`}>
            {/* ICON FORMACAO */}
            <Link to={"/formacao"} onClick={toggleNav} className="nav-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="link-svg-properties"
                viewBox="0 0 21 21"
                role="img"
                aria-label="formacao icon"
              >
                <path
                  d="M17.1667 14.6665C17.6087 14.6665 18.0326 14.4909 18.3452 14.1783C18.6577 13.8658 18.8333 13.4419 18.8333 12.9998V3.83317C18.8333 3.39114 18.6577 2.96722 18.3452 2.65466C18.0326 2.3421 17.6087 2.1665 17.1667 2.1665H8.38333C8.675 2.67484 8.83333 3.24984 8.83333 3.83317H17.1667V12.9998H9.66667V14.6665M13 6.33317V7.99984H8V18.8332H6.33333V13.8332H4.66667V18.8332H3V12.1665H1.75V7.99984C1.75 7.55781 1.92559 7.13389 2.23816 6.82133C2.55072 6.50877 2.97464 6.33317 3.41667 6.33317H13ZM7.16667 3.83317C7.16667 4.2752 6.99107 4.69912 6.67851 5.01168C6.36595 5.32424 5.94203 5.49984 5.5 5.49984C5.05797 5.49984 4.63405 5.32424 4.32149 5.01168C4.00893 4.69912 3.83333 4.2752 3.83333 3.83317C3.83333 3.39114 4.00893 2.96722 4.32149 2.65466C4.63405 2.3421 5.05797 2.1665 5.5 2.1665C5.94203 2.1665 6.36595 2.3421 6.67851 2.65466C6.99107 2.96722 7.16667 3.39114 7.16667 3.83317Z"
                  fill="white"
                />
              </svg>
              Formação
            </Link>
            {/* ICON EMPRESAS */}
            <Link to={"/empresas"} onClick={toggleNav} className="nav-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="link-svg-properties"
                viewBox="0 0 21 21"
                role="img"
                aria-label="empresas icon"
              >
                <path
                  d="M15.4998 13H13.8332V14.6667H15.4998M15.4998 9.66667H13.8332V11.3333H15.4998M17.1665 16.3333H10.4998V14.6667H12.1665V13H10.4998V11.3333H12.1665V9.66667H10.4998V8H17.1665M8.83317 6.33333H7.1665V4.66667H8.83317M8.83317 9.66667H7.1665V8H8.83317M8.83317 13H7.1665V11.3333H8.83317M8.83317 16.3333H7.1665V14.6667H8.83317M5.49984 6.33333H3.83317V4.66667H5.49984M5.49984 9.66667H3.83317V8H5.49984M5.49984 13H3.83317V11.3333H5.49984M5.49984 16.3333H3.83317V14.6667H5.49984M10.4998 6.33333V3H2.1665V18H18.8332V6.33333H10.4998Z"
                  fill="white"
                />
              </svg>
              Empresas
            </Link>
            {/* ICON ELEARNING */}
            <Link to={"/projeto"} onClick={toggleNav} className="nav-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="link-svg-properties"
                viewBox="0 0 21 21"
                role="img"
                aria-label="projeto icon"
              >
                <path
                  d="M2.549 7.99984C3.61317 4.619 6.77984 2.1665 10.5207 2.1665C14.8523 2.1665 18.414 5.45567 18.8332 9.6665L17.1665 9.32734M18.4507 12.9998C17.9141 14.693 16.8521 16.1712 15.4188 17.2201C13.9854 18.269 12.2552 18.834 10.479 18.8332C6.14734 18.8332 2.58567 15.544 2.1665 11.3332L3.83317 11.6723"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00175 11.7731V13.4331C7.99983 13.5668 8.03185 13.6989 8.0948 13.8169C8.15776 13.935 8.2496 14.0351 8.36175 14.1081C9.06508 14.5481 9.59925 14.6772 10.5042 14.7047C11.3384 14.7272 11.8617 14.5964 12.6401 14.1097C12.7541 14.0363 12.8476 13.935 12.9117 13.8155C12.9759 13.6959 13.0086 13.5621 13.0067 13.4264V11.7731M14.6759 9.67891V12.1914M6.37508 9.53641C6.67675 8.89974 8.54591 7.79141 10.2517 7.24391C10.4161 7.19167 10.5933 7.19578 10.7551 7.25557C12.2634 7.80724 13.9417 8.64307 14.5509 9.32057C14.8684 9.67474 14.5576 10.1264 14.1734 10.4056C13.3926 10.9731 12.5317 11.4139 10.7917 12.0831C10.6074 12.1537 10.4037 12.1552 10.2184 12.0872C8.43508 11.4247 6.76675 10.5706 6.38925 9.81807C6.36588 9.7752 6.35247 9.72762 6.35002 9.67886C6.34757 9.63009 6.35613 9.5814 6.37508 9.53641Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Projeto
            </Link>
          </nav>
        </section>
      ) : (
        <section className="header-container">
          <div className="logo-container">
            <Link to={"/"}>
              <img src={logoDesktop} alt="logo" className="logo-properties" />
            </Link>

            <div className="desktop-nav-container">
              <Link to={"/"} className={`${location === "/" ? "active" : ""}`}>
                Início
              </Link>
              <Link
                to={"/formacao"}
                className={`${location === "/formacao" ? "active" : ""}`}
              >
                Formação
              </Link>
              <Link
                to={"/empresas"}
                className={`${location === "/empresas" ? "active" : ""}`}
              >
                Empresas
              </Link>
              <Link
                to={"/projeto"}
                className={`${location === "/projeto" ? "active" : ""}`}
              >
                Projeto
              </Link>

              <div className="contacts-container">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.4925 10.9424C14.3811 11.7893 13.9651 12.5666 13.3224 13.1293C12.6797 13.6919 11.8542 14.0014 11 13.9999C6.03751 13.9999 2.00001 9.96237 2.00001 4.99987C1.99847 4.14568 2.30794 3.32014 2.87059 2.67743C3.43324 2.03473 4.21061 1.61882 5.05751 1.50737C5.27166 1.48122 5.48854 1.52504 5.67575 1.63227C5.86296 1.73951 6.01047 1.90441 6.09626 2.10237L7.41626 5.04925V5.05675C7.48194 5.20828 7.50906 5.37372 7.49521 5.5383C7.48136 5.70287 7.42696 5.86145 7.33688 5.99987C7.32563 6.01675 7.31376 6.03237 7.30126 6.048L6.00001 7.5905C6.46813 8.54175 7.46313 9.528 8.42688 9.99737L9.94813 8.703C9.96307 8.69044 9.97872 8.67875 9.99501 8.668C10.1333 8.57575 10.2924 8.51944 10.458 8.50416C10.6235 8.48888 10.7903 8.51512 10.9431 8.5805L10.9513 8.58425L13.8956 9.90362C14.0939 9.98911 14.2592 10.1365 14.3668 10.3237C14.4744 10.511 14.5185 10.728 14.4925 10.9424Z"
                      fill="black"
                    />
                  </svg>
                  <span>+351 227 130 275</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.333 2.6665H2.66634C1.93301 2.6665 1.33967 3.2665 1.33967 3.99984L1.33301 11.9998C1.33301 12.7332 1.93301 13.3332 2.66634 13.3332H13.333C14.0663 13.3332 14.6663 12.7332 14.6663 11.9998V3.99984C14.6663 3.2665 14.0663 2.6665 13.333 2.6665ZM13.333 5.33317L7.99967 8.6665L2.66634 5.33317V3.99984L7.99967 7.33317L13.333 3.99984V5.33317Z"
                      fill="black"
                    />
                  </svg>
                  <span>formacelf@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
