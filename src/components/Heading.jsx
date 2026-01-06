import React from "react";
import Logo from "../assets/images/logo-large.svg";
import PersonalBest from "../assets/images/icon-personal-best.svg";

const Heading = () => {
  return (
    <div className="heading">
      <img src={Logo} alt="Type as fast as you can" />

      <div>
        <img src={PersonalBest} alt="" />
        <p>
          Personal best: <span>92WPM</span>
        </p>
      </div>
    </div>
  );
};

export default Heading;
