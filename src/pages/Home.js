import React, { useState } from "react";

import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

import Footer from "../components/Footer";

import About from "../components/About";

import MoreInfo from "../components/MoreInfo";
import "../scss/home.css";

import Parteners from "../components/Parteners";

import Tokenomics from "../components/Tokenomics";
import Mission from "../components/Mission";
const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      <>
        <main>
          <div className="bac-main">
            <Navigation />
          </div>
          <Banner />
          <MoreInfo />
          <Mission />
          <About />

          {/* <MoreInfo />
          <Tokenomics />

          <Parteners />
           */}
          <Footer />
        </main>
      </>
    </>
  );
};

export default Home;
