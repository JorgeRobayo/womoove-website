import React from "react";
import "./WhatHot.css";
import { useState } from "react";

function whatHot() {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="what-hot-master-container">
      <h1 className="what-hot-title">What's Hot</h1>

      <div className="what-hot-container">
        <div className="what-hot-image-container">
          <img
            className="what-hot-image"
            src={
              "https://www.pcheebum.com/cdn/shop/products/3EA78F7A-1B68-475B-AB22-9B78678EEC46_600x.jpg?v=1656531831"
            }
            alt=""
          />
        </div>

        <div className="what-hot-options">
          <h2 className="what-hot-product-title">
            WOMOOVE BLACK CROPPED ZIPPER HOODIE
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
          <div>
            <button
              className="what-hot-decrement-button"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              className="what-hot-product-amount-input"
              type="number"
              id="amount"
              name="amount"
              step="1"
              min="1"
              max="500"
              value={amount}
              readOnly
            />
            <button
              className="what-hot-increment-button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className="what-hot-add-to-cart-button" type="submit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default whatHot;
