import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with payneengineering</span>
          <span className="secondaryText">
            Contact and find super attractive price quotes from us.
            <br />
            Find your it service  soon
          </span>
          <button className="button" href>
            <a href="mailto:payneengineering@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
