import React, { useState } from "react";
import "../scss/about.scss";
import { images } from "../assests/data";
import { FaCross } from "react-icons/fa";
import { AiOutlineCompress } from "react-icons/ai";
import btn1 from "../assests/btn-bac.svg";

const About = () => {
  const [active, setActive] = useState(null);
  console.log(active);
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="heading">
            <h1>WELCOME TO THE DARK FUTURE</h1>
            <p>
              Immerse yourself in the Cyberpunk universe, from the original
              storyline of Cyberpunk 2077 and its gripping spy-thriller
              expansion Phantom Liberty to the award-winning anime series
              Cyberpunk: Edgerunners — there are countless stories to discover
              in the deadly megalopolis of Night City.
            </p>
          </div>
          <div className="content">
            <div className="layer"></div>

            <div className="imges">
              {images.map((e) => {
                // console.log(e);

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
                        <div className="btn">
                          <img src={btn1} alt="" />
                          <span>{e.btn}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="layer"></div>
          </div>
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
