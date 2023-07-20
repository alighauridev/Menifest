import React, { useState, useEffect } from "react";
import m1 from "../assests/m.1.jpg";
import m2 from "../assests/m.2.jpg";
import m3 from "../assests/m.3.jpg";
import "../scss/mission.scss";
const Mission = () => {
  const [tabs, setTabs] = useState("tab1");

  useEffect(() => {}, []);
  return (
    <>
      <section id="mission">
        <div className="container">
          <div className="start">
            <div className="heading">MISSION BRIEFING</div>

            <div className="list">
              <ul>
                <li
                  className={tabs === "tab1" ? "set" : null}
                  onClick={() => {
                    setTabs("tab1");
                  }}
                >
                  Objective{" "}
                </li>
                <li
                  className={tabs === "tab2" ? "set" : null}
                  onClick={() => {
                    setTabs("tab2");
                  }}
                >
                  Abilities and gear
                </li>
                <li
                  className={tabs === "tab3" ? "set" : null}
                  onClick={() => {
                    setTabs("tab3");
                  }}
                >
                  Abilities and gear
                </li>
              </ul>
              <span className="line"></span>
            </div>
          </div>
          <div className="img-wrapper">
            {tabs === "tab1" && (
              <>
                <div
                  className="img"
                  style={tabs === "tab1" ? { transform: "scale(1)" } : null}
                >
                  <img src={m1} alt="" />
                  <div className="para">
                    <p>
                      Enter the shadowy world of spycraft and become —
                      infiltrate high-security buildings, take out enemies, and
                      go toe-to-toe against seasoned professionals. Espionage is
                      a high-risk game, and failure isn’t an option. Choose your
                      allies with care as you unravel the secrets at the heart
                      of this expansion.
                    </p>
                  </div>
                </div>
              </>
            )}
            {tabs === "tab2" && (
              <>
                <div
                  className="img"
                  style={tabs === "tab2" ? { transform: "scale(1)" } : null}
                >
                  <img src={m2} alt="" />
                  <div className="para">
                    <p>
                      Watch your back in Dogtown, a ruined city-within-a-city
                      ruled by. Its crumbling structures hold secrets and
                      opportunities that can only be seized by those willing to
                      do whatever it takes. Within its walls, discover
                      high-octane gigs and quests with stakes like never before.
                    </p>
                  </div>
                </div>
              </>
            )}
            {tabs === "tab3" && (
              <>
                <div
                  className="img"
                  style={tabs === "tab3" ? { transform: "scale(1)" } : null}
                >
                  <img src={m3} alt="" />
                  <div className="para">
                    <p>
                      Power up with and craft a unique playstyle — use every new
                      weapon and piece of cyberware at your disposal to survive
                      in a fractured world of desperate hustlers, cunning
                      netrunners, and ruthless mercenaries bent on profit and
                      power.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
