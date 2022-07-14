import React from "react";
import {cards} from "./imagestore";
import PremiumImg from "./PremiumImg";

export default function Card() {
  return (
    <div className="container">
      <div className="card-plate">
        { cards.map((item)=>{
            return (
                <div className="card-details">
                <img src={item.src} alt="card-img-one" width="250px"></img>
                <h3 className="card-heading">{item.heading}</h3>
                <p className="card-para">{item.para}</p>
                <p className="card-author">{item.author}</p>
                </div>
            )
        })
          
        }
        <PremiumImg position={{top:"36%",left:"18%"}}/>
        <PremiumImg position={{top:"36%",right:"52%"}}/>
        <PremiumImg position={{top:"36%",right:"2%"}}/>
      </div>
    </div>
  );
}
