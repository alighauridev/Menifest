import React from "react";
import tokenomics from "../assests/tokenomics-img.webp";
import "../scss/tokenomics.scss";
const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="img1">
            <img src={tokenomics} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <h1>TOKENOMICS</h1>
            </div>
            <p>
              <p>Contract Address</p>
              0x87327C89f1ABb682140063192f1c8AA6be8B347B
            </p>
            <p>
              Total Supply
              <span>100,000,000 $PTA</span>
            </p>

            <p>
              Taxes
              <span> 2%</span>
            </p>

            <p>
              Security
              <span> Ownership Renounced</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
