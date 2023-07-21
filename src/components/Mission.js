import React, { useState, useEffect } from "react";
import m1 from "../assests/m.1.jpg";
import m2 from "../assests/m.2.jpg";
import m3 from "../assests/m.3.jpg";
import "../scss/mission.scss";
const Mission = () => {
  const [tabs, setTabs] = useState("tab1");

  useEffect(() => { }, []);
  return (
    <>
      <section id="mission">
        <div className="container">
          <div className="start">
            <div className="heading" data-aos="fade-up">Our Mission</div>

            <div className="list">
              <ul>
                <li
                  className={tabs === "tab1" ? "set" : null}
                  onClick={() => {
                    setTabs("tab1");
                  }}
                  data-aos="fade-up"
                >
                  Phase 1{" "}
                </li>
                <li
                  className={tabs === "tab2" ? "set" : null}
                  onClick={() => {
                    setTabs("tab2");
                  }}
                  data-aos="fade-up"
                >
                  Phase 2
                </li>
                <li
                  className={tabs === "tab3" ? "set" : null}
                  onClick={() => {
                    setTabs("tab3");
                  }}
                  data-aos="fade-up"
                >
                  Phase 3
                </li>
              </ul>
              <span className="line"></span>
            </div>
          </div>
          <div className="img-wrapper" data-aos="fade-up">
            {tabs === "tab1" && (
              <>
                <div
                  className="img"
                  data-aos="fade"
                  style={tabs === "tab1" ? { transform: "scale(1)" } : null}
                >
                  <img src={m1} alt="" />
                  <div className="para" data-aos="fade">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, debitis nesciunt totam fuga voluptatibus eius corrupti veritatis maxime itaque cumque! Velit, illum quibusdam atque magni, sunt odit optio asperiores laborum vel eligendi possimus quas et quasi esse nobis impedit modi!
                    </p>
                  </div>
                </div>
              </>
            )}
            {tabs === "tab2" && (
              <>
                <div
                  className="img"
                  data-aos="fade"
                  style={tabs === "tab2" ? { transform: "scale(1)" } : null}
                >
                  <img src={"https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt="" />
                  <div className="para" data-aos="fade">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, debitis nesciunt totam fuga voluptatibus eius corrupti veritatis maxime itaque cumque! Velit, illum quibusdam atque magni, sunt odit optio asperiores laborum vel eligendi possimus quas et quasi esse nobis impedit modi!
                    </p>
                  </div>
                </div>
              </>
            )}
            {tabs === "tab3" && (
              <>
                <div
                  className="img"
                  data-aos="fade"
                  style={tabs === "tab3" ? { transform: "scale(1)" } : null}
                >
                  <img src={"https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt="" />
                  <div className="para" data-aos="fade">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, debitis nesciunt totam fuga voluptatibus eius corrupti veritatis maxime itaque cumque! Velit, illum quibusdam atque magni, sunt odit optio asperiores laborum vel eligendi possimus quas et quasi esse nobis impedit modi!
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
