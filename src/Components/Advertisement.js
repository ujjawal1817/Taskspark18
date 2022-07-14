import React from 'react'

export default function Advertisement(props) {
  return (
    <div className='container'>
      <div className='advertisement-color'>
        <p className='advertisement-heading'>Advertisement</p>
        <img style={props.margin} src={props.src} alt="An advertising board" width={props.width}/>
      </div>
    </div>
  )
}
