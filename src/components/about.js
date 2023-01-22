import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// CONTEXT
import { EssentialsContext } from "../context/Essentials";

function About() {
  const { artImg } = useContext(EssentialsContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="aboutMainCon" id="mainAboutCon">
        <section className="about" id="about">
          <div className="about-bckgrnd-design">
            <div className="lines-and-index">
              <div className="about-index">
                <h4
                  data-aos="slide-up"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  className="index-4">
                  About
                </h4>

                <div className="lines">
                  <div className="about-line-1"></div>
                  <div className="lines-x">
                    <div className="about-line-2"></div>
                    <div className="about-line-3"></div>
                  </div>
                </div>
              </div>

              <div className="about-items">
                <div className="about-content">
                  <div className="aboutContentContainer">
                    <h3
                      data-aos="slide-down"
                      data-aos-offset="150"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      className="about-h3 aboutLeftAnimation">
                      hello!
                      <span>
                        My name is
                        <span className="aboutRightAnimation"> NELSON</span>
                      </span>
                    </h3>
                    <div className="about-context">
                      <div className="p-tag-and-art-img">
                        <p
                          data-aos="slide-up"
                          data-aos-offset="150"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          className="aboutRightAnimation">
                          I'm a self-taught <strong>Frontend developer</strong>{" "}
                          and <strong>Graphic designer</strong> who has been in
                          the tech industry for over a year and I'm loving it!
                          To me, designing is a lifestyle, and I enjoy creating
                          unique designs for users that can make their digital
                          experience more enjoyable. I'm also a big fan of good
                          music - it's my way of unwinding and feeling inspired
                          while coding. With my self-taught skills and passion
                          for design, music, and coding, I'm sure to bring a
                          unique and creative vibe to any development team.
                        </p>
                        <div
                          data-aos="flip-up"
                          data-aos-offset="150"
                          data-aos-easing="ease-in-out"
                          data-aos-once="false"
                          className="art-image">
                          <img src={artImg} alt="Graphic Artwork" />
                        </div>
                      </div>

                      <h3
                        data-aos="slide-up"
                        data-aos-offset="150"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        Skill set:
                      </h3>
                      <div
                        data-aos="slide-up"
                        data-aos-offset="150"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="experiences">
                        <div
                          data-aos="slide-down"
                          data-aos-offset="150"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          className="code aboutLeftAnimation">
                          <a href="##">HTML / Css</a>
                          <a href="##">javaScript (ES6+)</a>
                          <a href="##">React</a>
                          <a href="##">React Native</a>
                        </div>
                        <hr />
                        <div
                          data-aos="slide-down"
                          data-aos-offset="150"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          className="software aboutRightAnimation">
                          <a href="##">FIGMA</a>
                          <a href="##">After Effect</a>
                          <a href="##">Adobe illustrator</a>
                          <a href="##">Adobe Photoshop</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mySocials">
                    <div
                      data-aos="flip-up"
                      data-aos-offset="50"
                      data-aos-easing="ease-in-out"
                      data-aos-once="false"
                      className="ul">
                      <a href="https://www.instagram.com/nehlzin/">Instagram</a>
                      <a href="https://twitter.com/nehlzin">Twitter</a>
                      <a href="https://github.com/nehlzin">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
