import React, { useState } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import RoadMapOne from "../components/RoadMapOne";
import Tokenomics from "../components/Tokenomics";
import Join from "../components/Join";

const Home = () => {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main>
            <Navigation />
            {/* <Banner /> */}
            <About />
            {/* <RoadMapOne />
            <Tokenomics/>
            <Join/>
            <Footer /> */}
          </main>
        </>
      )}
    </>
  );
};

export default Home;
