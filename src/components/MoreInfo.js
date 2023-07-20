import React from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/moreInfo-img.webp";
const MoreInfo = () => {
  return (
    <>
      <section id="section-2">
        <div className="container">
          <div className="heading">
            <h1>FREEDOM ALWAYS COMES AT A PRICE</h1>
          </div>

          <div className="para">
            <p>
              Phantom Liberty is a new spy-thriller adventure for Cyberpunk
              2077. Return as cyber-enhanced mercenary V and embark on a
              high-stakes mission of espionage and intrigue to save the NUS
              President. In the dangerous district of Dogtown, you must forge
              alliances within a web of shattered loyalties and sinister
              political machinations. Do you have what it takes to survive?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreInfo;
