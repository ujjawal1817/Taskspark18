import React from "react";

export default function Upcoming(props) {
  return (
    <div className="container">
      <div className="cara-main">
        <div className="cara-heading">
          <h2>{props.heading}</h2>
        </div>
        <div className="view-more-div">
          <p>
            Viewmore
            <span>
              <img src="./images/angle-right.svg" className="cara-icon" />
            </span>
          </p>
        </div>
      </div>

      <div className="up-main">
        <div className="up-section-one">
          <img src="./images/upcoming-img1.png" alt=""/>
          <div className="up-text">
            <p className="up-para">Limited Partners Summit 2022</p>
            <p className="up-para-para">Hyatt Regency, New Delhi | New Hybrid Masterclass.</p>
          </div>
        </div>
        
        <div className="up-section-one">
          <img src="./images/upcoming-img2.png" alt=""/>
          <div className="up-text">
            <p className="up-para">Cloud- The Digital Infrastructure</p>
            <p className="up-para-para">Hyatt Regency, New Delhi | New Hybrid Masterclass.</p>
          </div>
        </div>
      </div>

      <div className={props.border}></div>
    </div>
  );
}
