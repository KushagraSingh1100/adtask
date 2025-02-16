import React from "react";
import "../styles/Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Navbar() {
  return (
    <div className="nav">
      <div className="container"> </div>
      <div className="navbar">
        <div className="heading">
          <h1>
            ad<span>Task</span>.ai
          </h1>
        </div>
        <div className="links">
          <a className="product" href="">
            Products
            <svg
            className="product-svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 13.125L7 8.75H17L12 13.125Z" fill="white" />
            </svg>
          </a>
          <a className="tools" href="">
            Tools
            <svg
            className="tools-svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 13.125L7 8.75H17L12 13.125Z" fill="white" />
            </svg>
          </a>
          <a href="">Contact Us</a>
        </div>
        <div className="navbar-btn">
          <button className="login">Log in</button>
          <button className="call">Schedule a Call</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
