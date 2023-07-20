import React from "react";
import i1 from "../assests/icons/icon-1.png";
import i2 from "../assests/icons/icon-2.png";
import i3 from "../assests/icons/icon-3.svg";
import i4 from "../assests/icons/icon-4.png";
import i5 from "../assests/icons/icon-5.png";
import "../scss/parteners.scss";
const Parteners = () => {
  return (
    <>
      <section id="parteners">
        <div className="container">
          <div className="heading">
            <h1> SOCIALS</h1>
          </div>
          <div className="content">
            <a href="https://t.me/pepetheftauto" target="blank_">
              <img src={i1} alt="" />
            </a>
            <a href="https://twitter.com/pepetheftauto" target="blank_">
              <img src={i2} alt="" />
            </a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x4f38eec9da219aa9f7bfe2d33995ec1747781db7"  target="blank_">
              <img src={i3} alt="" />
            </a>
            <a href="#">
              <img src={i4} alt="" />
            </a>
            <a href="#">
              <img src={i5} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Parteners;
