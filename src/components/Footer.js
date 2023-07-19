import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPage4,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import icon1 from "../assests/footer icons/youtub.svg";
import icon2 from "../assests/footer icons/facebook.svg";
import icon3 from "../assests/footer icons/twitter.svg";
import icon4 from "../assests/footer icons/squre3.svg";
import icon5 from "../assests/footer icons/discord.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="top">
            <ul>
              <a href="#">Terms of Use & Privacy Policy </a>
              <a href="#">Careers</a>
              <a href="#">User agreement</a>
              <a href="#">Fan Content Guidelines</a>
              <a href="#">REDmod</a>
            </ul>
          </div>

          <div className="icons">
            <h2>Find us on</h2>
            <ul>
              <a href="#">
                <img src={icon1} alt="" />
              </a>
              <a href="#">
                <img src={icon2} alt="" />
              </a>
              <a href="#">
                <img src={icon3} alt="" />
              </a>
              <a href="#">
                <img src={icon4} alt="" />
              </a>
              <a href="#">
                <img src={icon5} alt="" />
              </a>
            </ul>
          </div>

          <p style={{ maxWidth: "600px" }}>
            $PTA is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
          <span>© 2023 by PTA. All rights reserved!</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
