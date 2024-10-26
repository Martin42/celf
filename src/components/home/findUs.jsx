import React from "react";
import "../../style/homeStyles/findUs.scss";
import { EmblaCarousel } from "../carousel/EmblaCarousel";
import { Footer } from "../footer";
import useMediaQuery from "../../utils/useMediaQuery";

export const FindUs = () => {
  //Screen Size Check
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
