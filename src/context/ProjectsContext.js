import React, { createContext, useState } from "react";

import workstation1 from "../assets/workstation.jpg";
import test1 from "../assets/thumbnails/prototype/img1.png";
import workstation2 from "../assets/wwrkst2.jpg";
export const ProjectProvider = createContext();

function ProjectsContext(props) {
  const [work, setWork] = useState(null);
  const projects = [
    {
      id: 1,
      category: "React",
      title: "APP NAME",
      description: "Movie Review Website",
      inspiration:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
      projectImage: test1,

      link: "#",
      figmaDesignLink: "#",

      designProcess: null,
      projectTimeLine: null,
      userResearch: null,
      userReview: [
        {
          name: "John Doe",
          age: "99",
          img: test1,
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!",
        },
        {
          name: "John Doe",
          age: "88",
          img: test1,
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!",
        },
      ],
      userFlow: null,
      sketches: null,
      wireFrame: null,
      finalDesign: null,
      liveLink: "Facebook.com",
      color: null,
    },
  ];
  return (
    <ProjectProvider.Provider
      value={{ projects, workstation2, workstation1, work, setWork }}>
      {props.children}
    </ProjectProvider.Provider>
  );
}

export default ProjectsContext;
