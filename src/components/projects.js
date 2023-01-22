import React, { useContext, useEffect } from "react";
import { ProjectProvider } from "../context/ProjectsContext";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  const { projects, setWork } = useContext(ProjectProvider);
  function projectIndex(item) {
    setWork(item);
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="services" id="services">
        <div className="services-container">
          <div className="s-line">
            <div className="s-line-1">
              <h1>Work</h1>
            </div>
            <div className="s-line-2"></div>
            <div className="s-line-3"></div>
          </div>
          <div className="s-contxt">
            <div className="myProj" id="projectCon">
              {projects.map((item) => {
                const { id, title, description, liveLink, projectImage } = item;
                return (
                  <div
                    data-aos="slide-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    className="project"
                    key={id}>
                    <div className="projectContaier">
                      <div className="projImgCon">
                        <img src={projectImage} alt="thumbnail" />
                      </div>
                      <div className="projContext">
                        <h3 className="projTitle">{title}</h3>
                        <h3 className="projTitle">{description}</h3>
                        <div className="extraContext">
                          <Link
                            to="/ProjectStudy"
                            // type="button"
                            className="projectLink"
                            onClick={() => projectIndex(item)}>
                            case
                          </Link>
                          {liveLink && (
                            <a
                              href={liveLink}
                              className="projectLink">
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
