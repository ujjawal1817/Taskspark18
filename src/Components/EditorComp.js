import React from "react";
import PremiumImg from "./PremiumImg";
import SideAd from "./SideAd";

export default function EditorComp(props) {
  return (
    <div className="container">
      <div className="editor-main">
        <div className="editor-section-one">
          <h3>{props.heading}</h3>
          <div className="editor-span">
            <img src={props.srcmain} alt="Economy-Man" />
            <span style={props.spanposmain}>{props.pre}</span>
          </div>
          <h4 className="editor-heading">{props.headingtwo}</h4>
          <p className="editor-para-section-one">{props.paraone}</p>
          <p className="card-author editor-author">30 September . Madhurima Nandy</p>
        </div>
        <div>
          <div className="editor-img-one">
            <div className="editor-span">
              <div>
                <img src={props.srcone}></img>
              </div>
              <span style={props.spanpos}>{props.pre}</span>
            </div>

            <div className="editor-details">
              <div className="edit-heading">{props.editorheadingtwo}</div>
              <p className="editor-para">{props.editorparatwo}</p>
              <p className="editor-sub-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>

          <div className="editor-img-two">
          <div className="editor-span">
              <div>
                <img src={props.srctwo}></img>
              </div>
              <span style={props.spanpos}>{props.pre}</span>
            </div>
            <div className="editor-details">
              <div className="edit-heading">{props.headingthree}</div>
              <p className="editor-para">{props.parathree}</p>
              <p className="editor-sub-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>

          <div className="editor-img-two">
            <div>
              <img src={props.srcthree}></img>
            </div>
            <div className="editor-details">
              <div className="edit-heading">{props.headingfour}</div>
              <p className="editor-para">{props.parafour}</p>
              <p className="editor-sub-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>
        </div>
        <div>
          <SideAd
            src="./images/sidead.png"
            alt="side-advertisement"
            width="243px"
          />
        </div>
      </div>
      <div className="nav-border" style={props.style}></div>
    </div>
  );
}
