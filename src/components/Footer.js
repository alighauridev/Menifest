import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaPage4,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";
import bac from "../assests/footer-bac.jpg";
import logo1 from "../assests/logo-1.webp";
import logo2 from "../assests/logo-2.webp";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="top">
            <div className="logo">
              <a href="#">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
              </a>
            </div>
            <p>Check us out here!</p>
          </div>
          <div className="bottom">
            <span>2023 by Capoo. No Copyright Infringement Intended</span>
            <div className="icons">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
