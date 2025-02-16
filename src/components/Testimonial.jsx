import React from "react";
import "../styles/Testimonial.css";
import img from "../assets/testimonials.png";
function Testimonial() {
  return (
    <div className="testimonial-page">
      <div className="blur">
        <svg
          width="637"
          height="627"
          viewBox="0 0 637 627"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            filter="url(#filter0_f_444_19378)"
          >
            <path
              d="M305.5 48H352L589 579H48L305.5 48Z"
              fill="rgba(38, 48, 72, 1)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_444_19378"
              x="0.799999"
              y="0.799999"
              width="635.4"
              height="625.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="23.6"
                result="effect1_foregroundBlur_444_19378"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="tag">Testimonials</div>
      <div className="testimonial-heading">
        <hr className="first" />
        <div className="testimonial-heading-txt">
          <h1>Trusted by</h1>
          <h2>satisfied clients</h2>
        </div>
        <hr className="second" />
      </div>
      <div className="features-page-p">
        <p>Discover how we’ve driven growth and innovation.</p>
      </div>
      <div className="testimonials-cards">
        <div className="testi-card">
          <p>
            “We used to struggle with consistent branding across platforms.
            adTask’s unified dashboard ensures our message stays on point every
            single time.”
          </p>
          <h3>-Brand Director at a Tech Startup</h3>
        </div>
        <div className="testi-card">
          <p>
            “adTask turned our complicated campaigns into a breeze. The built-in
            AI agents helped us reach exactly the customers we wanted—without
            guesswork!”
          </p>
          <h3>– Head of Growth at Tech Startup</h3>
        </div>
        <div className="testi-card">
          <p>
            “We’ve tried other platforms before, but none delivered the depth of
            insights adTask offers. Our conversion rates are up by 35% since we
            signed on!”
          </p>
          <h3>– Ecommerce Manager at Home Décor Brand</h3>
        </div>
        <div className="testi-card">
          <p>
            “What impressed me most was the real-time optimization. adTask’s
            intelligent agents just keep refining our campaigns—our ad spend has
            never worked harder!”
          </p>
          <h3>– Digital Strategist at SaaS Company</h3>
        </div>
        <div className="testi-card">
          <p>
            “adTask made everything from campaign setup to performance tracking
            simple. Our team can now focus on creating great content rather than
            crunching numbers.”
          </p>
          <h3>– Social Media Lead at Non-Profit <br /> Organization</h3>
        </div>
        <div className="testi-card">
          <p>
            “We’ve seen a 50% boost in engagement across our social channels
            since switching to adTask. Its AI-driven insights are
            game-changing!”
          </p>
          <h3>– Social Media Manager at a Fitness Brand</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
