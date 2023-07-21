import React from "react";

import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";
import { InsertEmoticon } from "@material-ui/icons";
// import { AiOutlineTwitter } from "react-icons/ai";
import icon3 from "../assests/footer icons/twitter.svg";
const Teams = () => {
    return (
        <>
            <section id="team" className="team">
                <div className="container">
                    <div className="heading">
                        <h1 data-aos="fade-up">
                            THE TEAM
                        </h1>
                    </div>
                    <div className="team__grid">
                        {team.map((ite, ind) => {
                            return (
                                <a
                                    key={ind}

                                >
                                    <div key={ind} className="item" data-aos="fade-up"
                                        data-aos-delay={150 * ind}
                                        data-aos-easing="ease-out">
                                        <div className="inner">
                                            <div className={`img ${ite.name.substring(0, 3)}`}>
                                                <img src={ite.path} alt="" />
                                            </div>
                                            <div className="detail">
                                                <h2 className="name">
                                                    {
                                                        ite.name}
                                                </h2>
                                                <h4>{ite.position}</h4>
                                                <div className="icon">
                                                    <img style={{ filter: 'invert(1)', width: "20px", marginTop: '10px' }} src={icon3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Teams;