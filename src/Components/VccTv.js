import React from "react";

export default function VccTv(props) {
  return (
    <div className="container">
      <div className="tv-container">
        <div className="tv-headers">
          <div>
            <h3 className="vcc-heading">VCC TV</h3>
          </div>
          <div>
            <h4 className="vcc-view">
              View More{" "}
              <span>
                <img src="./images/angle-right.svg"></img>
              </span>
            </h4>
          </div>
        </div>

        <div className="tv-video-main">
          <div className="tv-video">
            <iframe
              width="400px"
              height="300px"
              src="https://www.youtube.com/embed/Tn6-PIqc4UM"
              title="React in 100 Seconds"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>

          <div className="tv-data">
            <h3 className="tv-heading">HEALTHCARE</h3>
            <p className="tv-para">
              How can we harness data for healthcare and safegaurd ourselves
              from cyber threats?
            </p>
            <p className="tv-para-para">
              The global healthcare data is expected to grow at a CAGR of 36% by
              2025. To make healthcare more equitable, affordable and
              accessible, there is a need to find ways to unite and generate
              actionable insights from data. How collaborations and strategic
              partnerships can harness the data to tackle the issues faced by
              the sector?
            </p>
            <p className="tv-author">30 September . Madhurima Nandy</p>
          </div>
        </div>
      </div>
      <div className={props.border}/>
    </div>
  );
}
