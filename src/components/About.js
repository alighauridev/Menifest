import React, { useState } from "react";
import heading from "../assests/about.h.png";

import "../scss/about.scss";
import { images } from "../assests/data";
import { FaCross } from "react-icons/fa";
import { AiOutlineCompress } from "react-icons/ai";
const About = () => {
  const [active, setActive] = useState(null);
  console.log(active);
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="imges">
            {images.map((e) => {
              return (
                <>
                  <div
                    className="box"
                    onClick={() => {
                      setActive(e.img, e.btn);
                    }}
                    
                  >
                    <img src={e.img} alt="" />
                    <div className="upper">
                      <div className="btn">{e.btn}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="content"></div>
        </div>
        <div
          className="model"
          style={active ? { display: "flex", opacity: "1" } : null}
          onClick={() => {
            setActive(false);
          }}
        >
          <div
            className="cross"
            onClick={() => {
              setActive(false);
            }}
          >
            <img src="/images/bb (2).png" alt="" />
          </div>
          <div className="center">
            <img src={active} alt="" />
            <div className="upper">
              {/* <div className="btn">{e.btn}</div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
