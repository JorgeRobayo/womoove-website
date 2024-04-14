import React from "react";
import './IntroBanner.css'

function IntroBanner() {
  return (
    <div className="intro-banner-container">
      <div className="intro-banner-image-container">
        <img
          className="intro-banner-image"
          src={
            "https://www.pcheebum.com/cdn/shop/files/Photo_Jan_15_2024_3_48_18_PM_1800x.png?v=1705353693"
          }
          alt="Banner image"
        />
      </div>
    </div>
  );
}

export default IntroBanner;