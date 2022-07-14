import React from "react";
import Advertisement from "./Advertisement";
import Card from "./Card";

export default function ManufacturingBody() {
  return (
    <>
    <div className="container">
      <div className="manufacturing-main">
        <div className="manufacturing-text">
          <h3 className="manufacturing-text-heading-main">MANUFACTURING</h3>
          <h2 className="manufacturing-text-heading">
            Warburg Pincus set to acquire majority stake in auto parts maker
          </h2>
          <p className="manufacturing-text-para">
            Private equity firm TPG, which is reportedly heading towards a
            public listing, said on Thursday it had appointed long-time company
            executive Todd Sisitsky as president, effective immediately.
          </p>
          <div className="manufacturing-sub-para">
            <p className="manufacturing-sub-sub-para">30 September . Madhurima Nandy</p>
          </div>
          <div>
            <button className="manufacturing-button">Read More</button>
          </div>
        </div>
        <div>
          <img src="./images/manufacturing.png" alt="manufacturing-img" />
        </div>
      </div>
    </div>
    <Card/>
    <div className="container">
    
    </div>
    <Advertisement src="./images/advertisement2.png " width="800px" margin={{marginLeft:"158px"}}/>
    </>

  );
  }
