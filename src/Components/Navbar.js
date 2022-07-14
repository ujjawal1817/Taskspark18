import React from "react";
import "../App.css";
import Advertisement from "./Advertisement";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">
           <img src="./images/vccircle.png" alt="logo-img"/>
          </div>

          <div>
            <img
              src="./images/magnifyingglass.png"
              alt="magnifying-glass"
            ></img>
            <span className="nav-span">Search</span>
          </div>
          <div>
            <img src="./images/crown.png" alt="magnifying-glass"></img>
            <span className="nav-span">Subscribe</span>
          </div>
          <div>
            <img src="./images/Path 2168.png" alt="magnifying-glass"></img>
            <span className="nav-span">Sign In</span>
          </div>
        </div>

        <div className="sub-navbar">
          <div>
            <p>Private Equity</p>
          </div>
          <div>
            <p>Venture Capital</p>
          </div>
          <div>
            <p>M&A</p>
          </div>
          <div className="sub-nav-div">
            {" "}
            <span>Industry</span>
            <img className="nav-drop" src="./images/dropdown.png" alt="" />
          </div>
          <div>
            {" "}
            <p>Stressed Assests</p>
          </div>
          <div>
            {" "}
            <p>Limited Partner</p>
          </div>
          <div>
            {" "}
            <p>Founder</p>
          </div>
          <div className="sub-nav-div">
            {" "}
            <span className="sub-nav-custom">Customize</span>
            <img className="nav-drop" src="./images/dropdown.png" alt="" />{" "}
          </div>
        </div>
      </div>
      <div className="nav-border"></div>
      <Advertisement src="./images/advertisement.png" width="1000px" margin={{marginLeft:"40px"}}/>
    </>
  );
}
