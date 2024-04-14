import React from "react";

function BestSellers() {
  return (
    <div className="best-sellers-master-container">
      <div className="best-sellers-product-container">
        <h2 className="best-sellers-title">Best Sellers</h2>
        <img
          className="best-sellers-image"
          src={
            "https://static.sscontent.com/thumb/500/500/products/124/v1172111_prozis_contour-regular-waist-leggings-black_xs_black_front.webp"
          }
          alt="i"
        />
        <h4 className="best-sellers-product-name">
          PCHEE BLACK COMFY LONG SLEEVE
        </h4>
        <h2 className="best-sellers-price">$34.99</h2>
        <button className="best-sellers-button">View More</button>
      </div>
    </div>
  );
}

export default BestSellers;
