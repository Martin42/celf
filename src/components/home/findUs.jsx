import React from "react";
import "../../style/homeStyles/findUs.scss";
import { EmblaCarousel } from "../carousel/EmblaCarousel";
import { Footer } from "../footer";
import useMediaQuery from "../../utils/useMediaQuery";

import map from "../../assets/findUs-map.png";

export const FindUs = () => {
  //Screen Size Check
  const isTablet = useMediaQuery("(max-width: 768px");

  return (
    <div className="findUs-container">
      <div className="hidden-container">
        {/* Hidden div just for layout purposes */}
      </div>

      {isTablet ? (
        <EmblaCarousel />
      ) : (
        <div className="desktop-findUs-container">
          <div className="desktop-findUs-left">
            <h1>ONDE NOS ENCONTRAR</h1>
            <div className="desktop-findUs-content">
              <div>
                <p>Localização</p>
                <p className="findUs-text">
                  Rua Souto de Megide, N54, 4410-238, VNGaia
                </p>
              </div>

              <div>
                <p>Email</p>
                <p className="findUs-text">formacelf@gmail.com</p>
              </div>

              <div>
                <p>Telemóvel</p>
                <p className="findUs-text">911 766 929</p>
              </div>

              <div>
                <p>Telefone</p>
                <p className="findUs-text">227 130 875</p>
              </div>

              <div>
                <p>Horário de Funcionamento</p>
                <p className="findUs-text">
                  Segunda a Sexta das 09:00 às 18:00.
                </p>
              </div>
            </div>
          </div>

          <div className="desktop-findUs-right">
            <img src={map} className="map-image" alt="map of location" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
