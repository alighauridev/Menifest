import React from "react";
import img1 from "../assests/Tokenomics-h.png";
import t1 from "../assests/t.1.webp";
import t2 from "../assests/t.2.webp";
import t3 from "../assests/t.3.webp";
import "../scss/tokenomics.scss";
const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="heading">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <div className="box">
              <div className="title">Total Supply</div>
              <ul >
                <p>
                  <img src={t1} alt="" />
                </p>
                <div style={{ border: " 3px solid #ff4040" }}>
                  <li>1,000,000,000 $CAPOO</li>
                </div>
              </ul>
            </div>
            <div className="box">
              <div className="title">Taxes </div>
              <ul>
                <p>
                  <img src={t2} alt="" />
                </p>
                <div style={{ border: "3px solid rgb(203, 28, 160)" }}>
                  <li>Final Taxes will be 0% for Buy and Sell</li>
                </div>
              </ul>
            </div>
            <div className="box">
              <div className="title">Liquidity</div>
              <ul>
                <p >
                  <img src={t3} alt="" />
                </p>
                <div  style={{ border: "3px solid #4682b4" }}>
                  <li>100% LP Burnt</li>
                  <li>Ownership Renounced</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
