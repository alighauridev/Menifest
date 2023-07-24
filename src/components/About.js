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
            <h1 data-aos="fade-up">PROJECTS</h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              eaque voluptates soluta, veritatis voluptatum dolore.
            </p>
          </div>
          <div className="content">
            <div className="layer"></div>

            <div className="imges" data-aos="fade-up">
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

          <div className="center" data-aos={'fade-up'} data-aos-duration="300">
            <div
              className="cross"
              onClick={() => {
                setActive(false);
              }}
            >
              <img src="/images/bb (2).png" alt="" />
            </div>
            <img src={active} alt="" />
            <div className="upper">
              <h2>About this project</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint minima ducimus porro nulla perferendis deleniti magnam nihil, quis sit laborum, quaerat eius perspiciatis hic ad quos temporibus. Accusantium, esse modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab officia suscipit accusantium expedita dolorum qui. Distinctio, at esse iste deleniti, aspernatur quidem, eum maxime ullam quos harum ut. Rem, perspiciatis?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
