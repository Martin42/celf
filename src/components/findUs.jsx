import React from "react";
import "../style/findUs.scss";
import { EmblaCarousel } from "./Carousel/EmblaCarousel";
import { Footer } from "./footer";
import useMediaQuery from "../utils/useMediaQuery";

export const FindUs = () => {
  const isTablet = useMediaQuery("(max-width: 768px");

  return (
    <div className="findUs-container">
      <div className="hidden-container">
        {/* Hidden div just for layout purposes */}
      </div>

      {isTablet ? <EmblaCarousel /> : ""}
      <Footer />
    </div>
  );
};
