import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Products from "../../pages/Products/Products";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <Link to="/">
            <li>
              <a href="#home">Home</a>
            </li>
          </Link>

          <Link to="/products">
            <a href="#products">Products</a>
          </Link>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
