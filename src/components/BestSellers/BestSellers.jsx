import React from "react";
import './BestSellers.css'


 const bestSellers = [
    {
      src: "https://static.sscontent.com/thumb/500/500/products/124/v1172111_prozis_contour-regular-waist-leggings-black_xs_black_front.webp",
      name: "Product 1",
      price: "$34.99",
    },
    {
      src: "https://static.sscontent.com/thumb/500/500/products/124/v1172111_prozis_contour-regular-waist-leggings-black_xs_black_front.webp",
      name: "Product 2",
      price: "$19.99",
    },
    {
      src: "https://static.sscontent.com/thumb/500/500/products/124/v1172111_prozis_contour-regular-waist-leggings-black_xs_black_front.webp",
      name: "Product 3",
      price: "$24.99",
    },
    // Add more best sellers here...
  ];
  
function BestSellers() {
 
  return (
    <div className="best-sellers-master-container">
      {bestSellers.map((bestSeller, index) => (
        <div key={index} className="best-sellers-product-container">
          <h2 className="best-sellers-title">Best Sellers</h2>
          <img
            className="best-sellers-image"
            src={bestSeller.src}
            alt={bestSeller.name}
          />
          <h4 className="best-sellers-product-name">{bestSeller.name}</h4>
          <h2 className="best-sellers-price">{bestSeller.price}</h2>
          <button className="best-sellers-button">View More</button>
        </div>
      ))}
    </div>
  );
}

export default BestSellers;
