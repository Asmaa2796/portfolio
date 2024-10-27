import React from "react";
import TypedText from "./TypedText";

const Hero = () => {
  return (
    <div className="hero py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="hero-text">
              <h1 className="text-lighter">
                <TypedText/>
              </h1>
              <p className="line-height text-lighter">
                Passionate about building dynamic and responsive websites.<br/>
                focused on creating stunning, user-friendly websites and
                applications.<br/> With expertise in HTML, CSS, and JavaScript, I
                build responsive designs that deliver seamless experiences
                across all devices.
              </p>
              <button className="button">Explore My Work </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="hero-img">
                <img src={"/img/hero/header.gif"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
