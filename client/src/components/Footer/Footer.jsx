import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        {/* <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div> */}

        <div className="flexColStart f-right">
          <span className="primaryText">Contact Us</span>
          <span className="secondaryText">H108 OGANDE VILLAGE</span>
          <span className="secondaryText">HOMABAY,HM 40300</span>
          <span className="secondaryText">KENYA</span>
          <span className="secondaryText"> <h3>Phone:</h3>+254769415479</span>
          <span className="secondaryText"><h3>Email:</h3>info@payneengineering.co.ke</span>
          <div className="flexCenter f-menu">
            <span></span>
            {/* <span>Services</span>
            <span>Product</span>
            <span>About Us</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
