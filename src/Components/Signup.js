import React, { useState } from "react";

export default function Signup(props) {

    const [input,setInput]=useState("");

    const clickHandler=()=>{
        console.log(input);
        setInput("")
    }
  return (
    <>
    <div className="container">
      <div className="signup-container">
        <div className="signup-main">
          <div className="signup-img">
            <img src="./images/envelope.png" alt="mail-img" />
            <div>
              <p className="sign-up-para">
                Get industry update with our daily newsletter{" "}
              </p>
              <p className="sign-up-para-para">Subscribe Now !</p>
            </div>
          </div>

          <div className="signup-inp">
            <input
              type="text"
              value={input}
              className="inp-field"
              placeholder="Email address"
              onChange={(e)=>setInput(e.target.value)}
            />
          </div>
          <div className="signup-btn">
            <button className="signup-btn-btn" onClick={clickHandler}>Sign UP</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <div className={props.border}/>

    </div>
    </>
  );
}
