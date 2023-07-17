import React, { useState, useEffect, useRef } from "react";
import "../scss/roadmap.scss";
const Roadmap = () => {
  const [middleIndex, setMiddleIndex] = useState(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMiddleIndex(itemsRef.current.indexOf(entry.target));
          }
        });
      },
      { threshold: 0.5 }
    );

    itemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      heading: "PHASE I",
      list: ["Website", "Gitbook", "Discord / Twitter marketing push"],
    },
    {
      heading: "PHASE II",
      list: [
        "Setup AMA Twitter events with big communities.",
        "WAGMI WEDNESDAYS",
      ],
    },
    {
      heading: "PHASE III",
      list: [
        "Asset creation with community feedback and collaboration.",
        "Finalization of smart contract",
      ],
    },
    {
      heading: "PHASE IV",
      list: ["MINT DATE ANNOUNCED.", "CHARITY ANNOUNCEMENT"],
    },
    {
      heading: "PHASE V",
      list: [
        "WL MINT 0.0222 1000 wolves.",
        "ETH / ALPHAS THE PACK DAO CREATION",
      ],
    },
    {
      heading: "PHASE VI",
      list: ["MINT 0.0333."],
    },
    {
      heading: "PHASE VII",
      list: [
        "HOLDER BENEFITS.",
        "ALL WWC HOLDERS GET CHANCE MONTHLY TO WIN 4x4 WWC Custlm Art canvass from mudbloodbeer.",
      ],
    },
    {
      heading: "PHASE VIII",
      list: [
        "NFT STAKING FOR MUTATIONS #MOON",
        "MARKETPLACE",
        "GAME ASSETS FOR WWC HOLDERS",
        "TOKEN GATED ACCESS TO EXUSIVE CONTENT",
        "PARTNERSHIPS",
        "GAME",
      ],
    },
  ];
  return (
    <div id="roadmap" className="page-wrapper-2">
      <div className="section-timeline-heading">
        <div className="container">
          <div
            data-w-id="e7e84cd1-dfd3-26ea-64aa-9a618662154d"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 1,
              transformStyle: "preserve-3d",
            }}
            className="padding-vertical-xlarge"
          >
            <div className="timeline-main_heading-wrapper">
              <div className="margin-bottom-medium">
                <h2 className="heading-3" data-aos-easing='ease-out' data-aos='fade-up' data-aos-delay='300'>Roadmap</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-timeline">
        <div className="container">
          <div className="timeline_component">
            <div className="timeline_progress">
              <div className="timeline_progress-bar" />
            </div>
            {data.map((item, index) => {
              return (
                <div
                  data-w-id="e7e84cd1-dfd3-26ea-64aa-9a618662155b"
                  className={`timeline_item  ${index === middleIndex ? "active" : ""
                    }`}
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <div
                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a618662155c-69524bc3"
                    className="timeline_left"
                    style={{ willChange: "opacity", opacity: "0.25" }}
                  >
                    <div className="timeline_date-text">{item.heading}</div>
                  </div>
                  <div
                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a618662155f-69524bc3"
                    className="timeline_centre"
                  >
                    <div
                      className="timeline_circle"
                      style={{
                        willChange: "background",
                        backgroundColor: `${index === middleIndex ? "white" : "rgb(65, 65, 65)"
                          }`,
                      }}
                    />
                  </div>
                  <div
                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a6186621561-69524bc3"
                    className="timeline_right"
                    style={{ willChange: "opacity", opacity: "0.25" }}
                  >
                    <div className="margin-bottom-xlarge">
                      <div className="timeline_text">
                        <ul>
                          {item.list.map((ite, i) => {
                            return <li>{ite}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div
                                data-w-id="e7e84cd1-dfd3-26ea-64aa-9a6186621567"
                                className="timeline_item"
                            >
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a6186621568-69524bc3"
                                    className="timeline_left"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="timeline_date-text">Monster Metaverse</div>
                                </div>
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a618662156b-69524bc3"
                                    className="timeline_centre"
                                >
                                    <div
                                        className="timeline_circle"
                                        style={{
                                            willChange: "background",
                                            backgroundColor: "rgb(65, 65, 65)",
                                        }}
                                    />
                                </div>
                                <div
                                    className="timeline_right"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            The uniqueness and limited supply of the Monster Ape Club
                                            collection will impress any NFT enthusiast and NFT
                                            collector.
                                            <br />
                                            <br />
                                            Now, more than 100,000 people from all over the world have
                                            gathered in our Discord.
                                            <br />
                                            <br />
                                            Each Monster Ape is a masterpiece and your ticket to a
                                            unique metaverse of monsters.
                                            <br />
                                            <br />
                                            The high quality of our art will allow you to use the
                                            Monster Ape the way you want, whether in the Metaverse or
                                            games.
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-w-id="e7e84cd1-dfd3-26ea-64aa-9a618662157a"
                                className="timeline_item"
                            >
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a618662157b-69524bc3"
                                    className="timeline_left"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="timeline_date-text">
                                        Tribute to the NFT apostles
                                    </div>
                                </div>
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a618662157e-69524bc3"
                                    className="timeline_centre"
                                >
                                    <div
                                        className="timeline_circle"
                                        style={{
                                            willChange: "background",
                                            backgroundColor: "rgb(65, 65, 65)",
                                        }}
                                    />
                                </div>
                                <div
                                    className="timeline_right"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            We all love apes and respect the projects that are now
                                            leaders in the NFT world - BAYC and MAYC.
                                            <br />
                                            <br />
                                            That's why we decided to prepare a gift for you...
                                            <br />
                                            <br />
                                            All Monster Ape holders will have a fantastic opportunity to
                                            participate in the drawing of one NFT of the BAYC and MAYC,
                                            which they can get FREE!
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-w-id="e7e84cd1-dfd3-26ea-64aa-9a6186621594"
                                className="timeline_item"
                            >
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a6186621595-69524bc3"
                                    className="timeline_left"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="timeline_date-text">Exclusive merch</div>
                                </div>
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a6186621598-69524bc3"
                                    className="timeline_centre"
                                >
                                    <div
                                        className="timeline_circle"
                                        style={{
                                            willChange: "background",
                                            backgroundColor: "rgb(65, 65, 65)",
                                        }}
                                    />
                                </div>
                                <div
                                    className="timeline_right"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            The Monster Ape Club collection moves to a new level and
                                            goes beyond the Metaverse…
                                            <br />
                                            <br />
                                            Now members of our club have a way to excel!
                                            <br />
                                            <br />
                                            We will create a branded collection of clothes,
                                            high-resolution posters with legendary Monster Apes, and 3D
                                            Monster Ape figures available to all members of the MAC.
                                            <br />
                                            <br />
                                            The quality of MAC merch won't be inferior to world-famous
                                            brands
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-w-id="e7e84cd1-dfd3-26ea-64aa-9a61866215b0"
                                className="timeline_item"
                            >
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a61866215b1-69524bc3"
                                    className="timeline_left"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="timeline_date-text">
                                        Exclusive Monster Ape Holders Club
                                    </div>
                                </div>
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a61866215b4-69524bc3"
                                    className="timeline_centre"
                                >
                                    <div
                                        className="timeline_circle"
                                        style={{
                                            willChange: "background",
                                            backgroundColor: "rgb(65, 65, 65)",
                                        }}
                                    />
                                </div>
                                <div
                                    className="timeline_right"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            The MAC team appreciates Monster Ape holders and collectors.
                                            <br />
                                            <br />
                                            There are going to be parties around the world for them with
                                            the opportunity to meet with celebrities and other MAC
                                            holders.
                                            <br />
                                            <br />
                                            We are sure you will have a great time because you will all
                                            be united by your love for NFTs and monsters!
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-w-id="e7e84cd1-dfd3-26ea-64aa-9a61866215cd"
                                className="timeline_item"
                            >
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a61866215ce-69524bc3"
                                    className="timeline_left"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="timeline_date-text">
                                        Monsters capture the hearts of NFT collectors
                                    </div>
                                </div>
                                <div
                                    id="w-node-e7e84cd1-dfd3-26ea-64aa-9a61866215d1-69524bc3"
                                    className="timeline_centre"
                                >
                                    <div
                                        className="timeline_circle"
                                        style={{
                                            willChange: "background",
                                            backgroundColor: "rgb(65, 65, 65)",
                                        }}
                                    />
                                </div>
                                <div
                                    className="timeline_right"
                                    style={{ willChange: "opacity", opacity: "0.25" }}
                                >
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            Monster Apes have risen to the top of the NFT! But we won't
                                            stop there...
                                            <br />‍<br />
                                            Other monster animals join the Metaverse. <br />
                                            <br />
                                            Everyone will have a chance to mint NFT from the new
                                            collections, but the privileges will go to Monster Ape
                                            owners.
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            <div className="overlay-fade-bottom" />
            <div className="overlay-fade-top" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
