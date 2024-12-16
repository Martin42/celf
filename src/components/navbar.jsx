import React, { useState } from "react";
import "../style/navbar.scss";
import logoMobile from "../assets/logo-mobile-colored.png";
import logoDesktop from "../assets/logo-desktop-colored.png";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "../utils/useMediaQuery";

export const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <div className={`header-container ${isNavOpen ? "open" : ""}`}>
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
            <Link to={"/"} onClick={toggleNav} className="nav-group">
              Início
            </Link>

            <Link
              to={"/formacao/financiada"}
              onClick={toggleNav}
              className="nav-group"
            >
              Formação Financiada
            </Link>

            <Link
              to={"/formacao/nao-financiada"}
              onClick={toggleNav}
              className="nav-group"
            >
              Formação Não Financiada
            </Link>

            <Link to={"/sobre-nos"} onClick={toggleNav} className="nav-group">
              Sobre Nós
            </Link>
          </nav>
        </div>
      ) : (
        <nav className="header-container">
          <div className="logo-container">
            <Link to={"/"}>
              <img src={logoDesktop} alt="logo" className="logo-properties" />
            </Link>

            <div className="desktop-nav-container">
              <Link to={"/"} className={`${location === "/" ? "active" : ""}`}>
                Início
              </Link>

              {/* Dropdown Menu */}
              <div
                className={`dropdown ${isDropdownOpen ? "open" : ""}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div
                  className={`${location === "/formacao/financiada" || location === "/formacao/nao-financiada" ? "active" : ""} dropdown-trigger`}
                >
                  Formação
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    className={`chevron ${isDropdownOpen ? "rotate" : ""}`}
                  >
                    <g clipPath="url(#clip0_864_462)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.52623 7.27113L3.7549 3.4998L4.69757 2.55713L7.99757 5.85713L11.2976 2.55713L12.2402 3.4998L8.4689 7.27113C8.34388 7.39611 8.17434 7.46632 7.99757 7.46632C7.82079 7.46632 7.65125 7.39611 7.52623 7.27113Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_864_462">
                        <rect
                          width="8"
                          height="16"
                          fill="white"
                          transform="translate(16 0.5) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="dropdown-menu">
                  <Link
                    to={"/formacao/financiada"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Financiada
                  </Link>
                  <Link
                    to={"/formacao/nao-financiada"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Não Financiada
                  </Link>
                </div>
              </div>

              <Link
                to={"/sobre-nos"}
                className={`${location === "/sobre-nos" ? "active" : ""}`}
              >
                Sobre Nós
              </Link>

              <div className="contacts">
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
                  <span>+351 227 130 875</span>
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
        </nav>
      )}
    </>
  );
};
