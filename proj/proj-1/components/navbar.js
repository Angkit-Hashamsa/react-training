import React from "react";
import Logo from "../images/logo.svg";
import { navbar } from "../data/data";
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={Logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          {navbar.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link} class="nav-link">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
