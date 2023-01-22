import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Nav() {
  const [activeNav, setAcvtiveNav] = useState(false);
  function navToggle() {
    if (!activeNav) {
      setAcvtiveNav(() => true);
    } else {
      setAcvtiveNav(() => false);
    }
  }
  return (
    <div>
      <nav>
        <div className="nav-links" id="nav-links">
          <a href="#home" className="webNavLink">
            HOME
          </a>
          <a href="#mainAboutCon" className="webNavLink">
            ABOUT
          </a>
          <a href="#services" className="webNavLink">
            WORK
          </a>
          <a href="#contact" className="webNavLink">
            CONTACT
          </a>
        </div>
      </nav>
      <div className="mobileHamburgerMenu">
        <button
          type="button"
          className="mobileHamburgerMenuBtn"
          onClick={navToggle}>
          <div
            className={!activeNav ? "hamLine line1" : "hamLine"}
            id="hamline1"></div>
          <div className="hamLine" id="hamline2"></div>
        </button>
      </div>
      <div
        onClick={navToggle}
        className={activeNav ? "navMobileLinks activateNav" : "navMobileLinks"}>
        <div className="mobileLinks">
          <a href="#home" className="mobileNavLink">
            HOME
          </a>
          <a href="#mainAboutCon" className="mobileNavLink">
            ABOUT
          </a>
          <a href="#services" className="mobileNavLink">
            WORK
          </a>
          <a href="#contact" className="mobileNavLink">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
