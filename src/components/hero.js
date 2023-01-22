import React, { useContext, useEffect, useRef } from "react";
// CONTEXT
import { EssentialsContext } from "../context/Essentials";
import {
  FaInstagram,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from "react-icons/fa";
import Typed from "typed.js";

// FUNCTIONS
function Hero() {
  const { doodldeImg, artImg } = useContext(EssentialsContext);
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi there !",
        "My Name is <br/>",  
        "<span className='first'>NELSON</span>",
        "FrontEnd Dev <br/> Product Designer",
        "Welcome to My <br/> Web Dojo <br/>",
      ],
      loop: true,
      typeSpeed: 150,
      backSpeed: 5,
      loopCount: Infinity,
      smartBackspace: false,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="logo-nav">
          <div className="logo">
            <div className="logo-line">
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            <h1>NEHL</h1>
          </div>
        </div>

        <div className="homeContent">
          <div className="self">
            <div className="textCon">
              <div className="text-content">
                <h2 className="autoType" ref={el}> </h2>
              </div>
            </div>

            <div className="myImage">
              <img src={doodldeImg} className="imgDoodle" alt="doodle" />
              <img src={artImg} alt="web developer" className="my-self" />
            </div>
          </div>

          <div className="homeSocials">
            <a href="https://instagram.com/nehlzin" title="instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/nehlzin" title="twitter">
              <FaTwitter />
            </a>
            <a href="https://github.com/nehldotjs" title="github">
              <FaGithubAlt />
            </a>
            <a href="https://dribbble.com/nehlzin" title="dribbble">
              <FaDribbble />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
