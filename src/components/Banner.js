import React, { useEffect, useRef, useState } from "react";
import "../scss/banner.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import bannerImg from "../assests/7.jpg";
import btn1 from "../assests/btn-bac.svg";
import video from "../assests/Video/Animation.mp4"
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import InquiryForm from "./InquiryForm";
const Banner = () => {
  const imageRef = useRef(null);
  const [creatorsForm, setCreatorsForm] = useState(false)
  const [inquiryFormShow, setInquiryFormShow] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercentage =
            (window.innerHeight - rect.top) / window.innerHeight;
          const rotationAngle = -90 + scrollPercentage * 90;

          imageRef.current.style.transform = `rotateY(${rotationAngle}deg)`;
          imageRef.current.style.transition = "transform 0.5s ease-out";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="banner__wrapper">
        {/* <img src={bannerImg} style={{ width: "100%" }} alt="" /> */}
        <section id="banner">

          <video src={video} muted autoPlay loop />          <div className="container">
            <div className="heading">
              <h1 style={{ opacity: 0 }}>WELCOME TO MANIFEST LABS</h1>
            </div>
            <div className="content">
              <Link to="/" onClick={() => setInquiryFormShow(true)} >
                <img src={btn1} alt="" />
                <span>INCUBATOR PROGRAM</span>
              </Link>
              <Link to="/" onClick={() => setCreatorsForm(true)}>
                <img src={btn1} alt="" />

                <span> CONTENT CREATORS</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {
        creatorsForm && <ContactForm setCreatorsForm={setCreatorsForm} />
      }
      {
        inquiryFormShow && <InquiryForm setInquiryFormShow={setInquiryFormShow} />
      }
    </>
  );
};

export default Banner;
