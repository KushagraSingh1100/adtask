import React from "react";
import "../styles/Services.css";
import services from "../assets/services.png"
function Services() {
  return (
    <div className="services-page">
        <div className="container"></div>
      <div className="tag">Services</div>
      <div className="services-heading">
        <hr className="first" />
        <div className="services-heading-txt">
          <h1>Innovative Services</h1>
          <h2>for Growth.</h2>
        </div>
        <hr className="second" />
      </div>
      <div className="services">
        <img src={services} alt="" />
      </div>
      <div className="contact-us-btn">
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Services;
