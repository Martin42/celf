import React from "react";
import "../style/findUs.scss";
import { EmblaCarousel } from "./Carousel/EmblaCarousel";

export const FindUs = () => {
  return (
    <div className="findUs-container">
      <div className="hidden-container">
        {/* Hidden div just for layout purposes */}
      </div>

      {/* Carousel here */}
      <EmblaCarousel />
    </div>
  );
};
