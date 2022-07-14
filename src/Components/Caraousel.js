import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Advertisement from "./Advertisement";
import PremiumImg from "./PremiumImg";

import VcPremium from "./VcPremium";
// import cards from "./imagestore";


export default function Caraousel(props) {


  return (

    <>
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

        <div className="cara-plate">
          {props.imgData.map((item) => {
            return (
              <div className="cara-details">
                <img src={item.src} alt="card-img-one" width="250px"></img>
                <h3 className="card-heading">{item.heading}</h3>
                <p className="card-para">{item.para}</p>
                <p className="card-author">{item.author}</p>
              </div>
            );
          })}
          
          <PremiumImg position={{bottom:"52%",left:"42%"}}/>
          <PremiumImg position={{bottom:"52%",right:"0%"}}/>
        </div>
        
      </div>
      <div className="container">
      <div className={props.border}/>

      </div>
      
      
    </>
  );
}
