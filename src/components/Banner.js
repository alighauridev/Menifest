import React, { useEffect, useRef } from "react";
import "../scss/banner.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import bannerImg from "../assests/7.jpg";
import btn1 from "../assests/btn-bac.svg";
import video from "../assests/Video/spacecraft_-_82659 (540p).mp4"
const Banner = () => {
  const imageRef = useRef(null);

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
              <h1>MANIFEST LABS COMING SEPTEMBER 26, 2023</h1>
            </div>
            <div className="content">
              <a href="#" target="blank_">
                <img src={btn1} alt="" />
                <span>Make INQUIRY</span>
              </a>
              <a href="#" target="blank_">
                <img src={btn1} alt="" />

                <span> CONTENT CREATORS</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
