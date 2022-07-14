import React from 'react'

export default function SideAd(props) {
  return (
    <div className='sidead'>
        <p className='sidead-para'>Advertisement</p>
      <img src={props.src} alt="" width={props.width}/>
    </div>
  )
}
