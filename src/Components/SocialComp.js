import React from 'react'
import Caraousel from './Caraousel'
import SideAd from './SideAd'
import caraImg from "./CaraouselImageStore";
import Advertisement from './Advertisement';
import VcPremium from './VcPremium';

export default function SocialComp() {
  return (
    <>
    <div className='container'>
      <div className='social'>
        <div className='twitter-div'>
        <img src="./images/social-twitter.png" alt="twitter-logo" width="250px"/>
        <div className='twitter-para'>
          <p>VCCircle.com</p>
          <p>World Bank arm IFC to double down its investments into funds in 2022</p>
        </div>
        </div>
        
        
        <div >
            <h3 className='social-infographic'>INFOGRAPHIC</h3>
            <img src="./images/infographic.png" alt="" height="280px"/>
        </div>
        <div className='social-side-ad'>
        <SideAd src="./images/sidead.png" width="243px" />
        </div>
      </div>
      <div className='nav-border'></div>
    </div>
     
     </>
  )
}
