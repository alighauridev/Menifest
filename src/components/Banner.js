import React, { useEffect } from "react";
import "../scss/banner.scss";
import img1 from "../assests/banner.png";
import heading from "../assests/heading.webp";
import i1 from "../assests/i.1.webp";
import i2 from "../assests/i.2.webp";
import i3 from "../assests/i.3.webp";
import i4 from "../assests/i.4.webp";
import i5 from "../assests/i.5.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
const Banner = () => {
  useEffect(() => {}, []);
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="content">
            <div className="heading">
              <img src={heading} alt="" />
            </div>
            <div className="para">
              <p>
                Capoo, Made by a experienced team in Defi, is looking to take
                its rightful place amongst other “Blue-Chip” Meme coins.
              </p>
              <p>
                ​ Through aggressive shilling and marketing campaign & a strong
                community, we’re going to capoo our way to the top.
              </p>
            </div>
          </div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="container-2">
          <div className="buy-content">
            <div className="icons">
              <img src={i1} alt="" />
              <img src={i2} alt="" />
              <img src={i3} alt="" />
              <img src={i4} alt="" />
              <img src={i5} alt="" />
            </div>
            <div className="btn">
              <span>BUY NOW</span>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <p>0xb4e58335d52Fea54D408E7E44eD77B791B0BC470</p>
        </div>
      </section>
    </>
  );
};

export default Banner;
