import React, { useContext, useEffect } from "react";
import { ProjectProvider } from "../../context/ProjectsContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./caseStudy.css";
import Aos from "aos";
import "aos/dist/aos.css";

function CaseStudy() {
  const { work } = useContext(ProjectProvider);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="caseStudyScreen">
      <div className="goBackBtn">
        <Link to="/nehl" className="goBackLinkBtn">
          <FaHome className="linkIcon" />
        </Link>
        {work?.title && (
          <div className="projectNameWrapper ">
            <h1 className="projectName">{work?.title}</h1>
          </div>
        )}
      </div>
      {/* ---------------------------------------------------------------------------------- */}

      <div className="studyWrapper">
        {work?.projectImage && (
          <div
            data-aos="slide-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="projectThumbNail">
            <img src={work?.projectImage} alt="Project Ui" />
          </div>
        )}

        {work?.designProcess && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="projectDesignProcess projectBorder">
              <h5>Design Process</h5>
              <div className="projectOverviewWrapper proj">
                {work?.designProcess.map((item) => {
                  const { img } = item;
                  return <>{img}</>;
                })}
              </div>
            </div>
          </>
        )}
        {work?.projectTimeLine && (
          <>
            <div
              data-aos="flip-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="ProjectTimeLine projectBorder">
              <h5>TimeLime</h5>
              <div className="projectOverviewWrapper proj"></div>
            </div>
          </>
        )}
        {work?.userResearch && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="projectUserResearch projectBorder">
              <h5>User Research</h5>
              <div className="projectOverviewWrapper proj"></div>
            </div>
          </>
        )}
        {/* ----------------------------------------------------------------- */}
        {work?.userReview && (
          <>
            <div className="userReviews projectBorder">
              <h5>User Review</h5>
              {work?.userReview.map((item) => {
                const { name, img, fasutration, goal, age } = item;
                return (
                  <>
                    <div className="userReviewContentWrapper">
                      <div
                        data-aos="flip-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="aboutPersonWrapper">
                        <div className="perosn-imageWrapper">
                          <img src={img} alt="AVATAR" />{" "}
                        </div>
                        <div className="aboutPesronWrapper">
                          <h3 className="personName">{name}</h3>
                          <h4 className="age">
                            {age}
                            <span>years</span>
                          </h4>
                          <h4 className="occupation">Software Engineer</h4>
                        </div>
                      </div>

                      <div
                        data-aos="slide-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="perosn-review">
                        <div className="faustraions overallReview">
                          <h4>Faustration</h4>

                          <li>{fasutration}</li>
                        </div>
                        <div
                          data-aos="slide-up"
                          data-aos-offset="200"
                          data-aos-easing="ease-in-out"
                          data-aos-once="false"
                          className="goals overallReview">
                          <h4>Goals</h4>
                          <li>{goal}</li>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
        {/* --------------------------------------------------------------- */}
        {work?.inspiration && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="projectOverView projectBorder">
              <h5>Project Description</h5>
              <div className="projectOverviewWrapper proj">
                <h3>{work?.inspiration}</h3>
              </div>
            </div>
          </>
        )}
        {work?.userFlow && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="userFlow projectBorder">
              <h5>User Flow</h5>
              <div className="projectOverviewWrapper proj"></div>
            </div>
          </>
        )}
        <>
          <h4>Style Guide</h4>
          <hr className="projectHr" />
        </>

        {work?.sketches && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="projectsSketches projectBorder">
              <h5>Sketches</h5>
              <div className="projectOverviewWrapper proj"></div>
            </div>
          </>
        )}
        {work?.wireframe && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="wireFrames projectBorder">
              <h5>WireFrames</h5>
              <div className="projectOverviewWrapper proj"></div>
            </div>
          </>
        )}

        {work?.color && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="projectsColor projectBorder">
              <h5>Color</h5>
              <div className="projectOverviewWrapper proj"></div>
            </div>
          </>
        )}
        {work?.finalDesign && (
          <>
            <div
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="projectFinalDesigns projectBorder">
              <h5>Final Design</h5>
              <div className="projectOverviewWrapper proj">
                <div className="finalDesignWrapper">
                  {work?.finalDesign.map((item) => {
                    const { img } = item;
                    return (
                      <div className="finalDesignWrapper-img">
                        <img src={img} alt="project" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
        {work?.finalDesign && (
          <div
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="projectLink projectBorder">
            <h5>Link</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
