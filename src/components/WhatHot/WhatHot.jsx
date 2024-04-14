import React from "react";
import "./WhatHot.css";

function whatHot() {
  return (
    <div className="what-hot-master-container">
      <h1 className="what-hot-title">What's Hot</h1>
      <div className="what-hot-container">
        <img
          className="what-hot-image"
          src={
            "https://www.pcheebum.com/cdn/shop/products/3EA78F7A-1B68-475B-AB22-9B78678EEC46_600x.jpg?v=1656531831"
          }
          alt=""
        />
        <form className="what-hot-form" action="/add-to-cart" method="post">
          <h2 className="what-hot-product-title">
            PCHEEBUM BLACK CROPPED ZIPPER HOODIE
          </h2>
          <p className="what-hot-product-price">$39.99</p>
          <label className="what-hot-product-size-label" for="size">
            Size:
          </label>
          <select
            className="what-hot-product-size-select"
            name="size"
            id="size"
          >
            <option value="S">Small</option>
            <option value="XS">Extra Small</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">Double Extra Large</option>
            <option value="XXL">Triple Extra Large</option>
          </select>
          <label className="what-hot-product-amount-label" for="amount">
            Amount:
          </label>
          <input
            className="what-hot-product-amount-input"
            type="number"
            id="amount"
            name="amount"
            step="1"
            min="1"
            max="500"
            value="1"
          />
          <button className="what-hot-add-to-cart-button" type="submit">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}

export default whatHot;