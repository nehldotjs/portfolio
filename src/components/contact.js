import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div>
      <section className="contact" id="contact">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="contactHeader">
          <h1>Contact</h1>
        </div>

        <div className="contactSection" id="contactSection">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="contactText">
            {/* <p>Have an idea ?</p> */}
            <h3>LET'S TALK</h3>
          </div>

          {/* <div className="contactInput">
            <div className="formCon">
              <form className="form">
                <div className="nameInput">
                  <div className="entries">
                    <input
                      name="Name"
                      type="text"
                      required
                      placeholder="NAME"
                    />
                  </div>
                  <div className="entries">
                    <input
                      name="Email"
                      type="email"
                      required
                      placeholder="EMAIL"
                    />
                  </div>

                  <div className="entries">
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="SUBJECT"
                    />
                  </div>
                </div>
                <div className="entriesMessage">
                  <textarea
                    name="message"
                    className="messageInput"
                    id="message"
                    cols="30"
                    required
                    placeholder="MESSAGE"></textarea>
                </div>
                <div className="entryBtn">
                  <button type="submit" className="submitBtn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div> */}

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="contactMsgBtn">
            <a href="mailto:nelsonosuya11@gmail.com" className="contactMeBtn">
              Contact Me
            </a>
          </div>
          <div className="contactActivity">
            <p>Always open to work</p>
            <div className="available"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
