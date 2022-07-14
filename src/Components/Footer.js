import React from 'react'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='mosiac-digital'>
        <img src="./images/Mosaic-digital.png" alt="mosiac-digital"/>
      </div>
      <div className='social-icons'>
        <div className='fb'>
          <img src="./images/facebook.png" alt="facebook"/>
        </div>
        <div className='twitter'>
        <img src="./images/twitter.png" alt="twitter"/>
        </div>
        <div className='lkdn'>
        <img src="./images/linkedin.png" alt="linkedin"/>
        </div>
      </div>
      <div className='container'>
      <div className='footer-div'>
        <div><p className='footer-text'>About Us</p></div>
        <div><p className='footer-text'>Advertise with us</p></div>
        <div><p className='footer-text'>Contact Us</p></div>
        <div><p className='footer-text'>Copyright</p></div>
        <div><p className='footer-text'>Privacy Policy</p></div>
        <div><p className='footer-text'>Terms of use</p></div>
        <div><p className='footer-text'>Company Listing</p></div>
        <div><p className='footer-text'>Tag Listing</p></div>
      </div>
      </div>

      <div className='container'>
      <div className='footer-div'>
        <div><p className='footer-text-sub'>Our Products :</p></div>
        <div><p className='footer-text-sub'>VCCircle</p></div>
        <div><p className='footer-text-sub'>TechCircle</p></div>
        <div><p className='footer-text-sub'>Events</p></div>
        <div><p className='footer-text-sub'>Training</p></div>
        <div><p className='footer-text-sub'>VCCEdge</p></div>
        <div><p className='footer-text-sub'>SalesEdge</p></div>
        <div><p className='footer-text-sub'>PartnerEdge</p></div>
        <div><p className='footer-text-sub'>Edge Insights</p></div>
      </div>
      </div>
      <div className='footer-copyright'>
        <p>Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures Pvt. Ltd.</p>
      </div>
    </div>
  )
}
