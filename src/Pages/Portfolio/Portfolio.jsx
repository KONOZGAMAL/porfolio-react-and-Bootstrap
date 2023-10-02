import React from "react";
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';
import work6 from '../../assets/work6.jpg';
export default function Portfolio() {
  return (
    <div className="protfolio" id="protfolio">
      <div className="protfolio_title">
        <h1>Portfolio</h1>
      </div>
      <div className="protfolio_container">
        <div className="project portfolio_img">
          <img src={work1} alt=""/>
          <span>
            <a href="/">
              view site live
            </a>
          </span>
        </div>
        <div className="project portfolio_img">
          <img src={work2} alt=""/>
          <span>
            <a href="/">
              {" "}
              view site live
            </a>
          </span>
        </div>
        <div className="project portfolio_img">
          <img src={work3} alt="/"/>
          <span>
            <a href="/" >
              view site live
            </a>
          </span>
        </div>
        <div className="project portfolio_img">
          <img src={work4} alt=""/>
          <span>
            <a href="/">view site live</a>
          </span>
        </div>
        <div className="project portfolio_img">
          <img src={work5} alt="" />
          <span>
            <a href="/">view site live</a>
          </span>
        </div>
        <div className="project portfolio_img">
          <img src={work6} alt=""/>
          <span>
            <a href="/">view site live</a>
          </span>
        </div>
      </div>
    </div>
  );
}
