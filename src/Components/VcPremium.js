import React from 'react'
import PremiumImg from './PremiumImg';
import {cards,Premium} from './premiumStore'
export default function VcPremium(props) {
  return (
    <>
    <div className='premium-container'>
      <div className='container'>
        <div className="pre-main">
          <div className="pre-heading">
            <h2>{props.heading} <span> <img src="./images/crown@2x.png" alt=""/></span></h2>
          </div>
          <div className="view-more-div">
            <button className='btn-subscribe'>Subscribe</button>
          </div>
        </div>

        <div className="pre-plate">
          {Premium.map((item) => {
            return (
              <div className="pre-details">
                <img src={item.src} alt="card-img-one" width="256px"></img>
                <h3 className="card-heading">{item.heading}</h3>
                <p className="card-para">{item.para}</p>
                <p className="card-author pre-author">{item.author}</p>
              </div>
            );
          })}
          <PremiumImg position={{top:"40%",left:"52%"}}/>
          <PremiumImg position={{top:"40%",left:"19%"}}/>
          <PremiumImg position={{top:"40%",right:"10%"}}/>
        </div>
      </div>
    </div>
    <div className='container'>
   
    </div>
    
    </>
  )
}
