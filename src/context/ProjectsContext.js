import React, { createContext, useState } from "react";

import test1 from "../assets/thumbnails/prototype/img1.png";
import w1 from "../assets/thumbnails/prototype/w1.png";
import w2 from "../assets/thumbnails/prototype/w2.png";
import w3 from "../assets/thumbnails/prototype/w3.png";
import w4 from "../assets/thumbnails/prototype/w4.png";
import f1 from "../assets/thumbnails/prototype/f1.png";
import f2 from "../assets/thumbnails/prototype/f2.png";
import f3 from "../assets/thumbnails/prototype/f3.png";
import f4 from "../assets/thumbnails/prototype/f4.png";
import mockup from "../assets/thumbnails/prototype/ff1.png";
import color from "../assets/thumbnails/prototype/colors.png";

export const ProjectProvider = createContext();
function ProjectsContext(props) {
  const [work, setWork] = useState(null);
  const projects = [
    {
      id: 1,
      type: null,
      category: "React",
      title: "KASHMI",
      description: "Online banking App",
      inspiration:
        "UiUx Case Study: Experience money transactions like never before with Kashmi App! Keep track of your spending and make online purchases with ease - all in one secure and unique design!",
      projectImage: test1,
      userReview: [
        {
          name: "John Doe",
          age: "99",
          img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!",
        },
        {
          name: "Helen Doe",
          age: "88",
          img: "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=600",
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!",
        },
      ],
      userFlow: null,
      sketches: null,
      wireFrame: [w1, w2, w3, w4],
      finalDesign: [f1, f2, f3, f4],
      mockupdesign: mockup,
      color: color,
      liveLink: null,
      figmaDesignLink:
        "https://www.figma.com/file/pjMsRm6ogwdA8YKUKFK3Vn/KasshMi?node-id=0%3A1&t=Mt3E36Q1RH2yYmXp-0",
      designProcess: null,
      projectTimeLine: null,
      userResearch: null,
    },
  ];
  return (
    <ProjectProvider.Provider value={{ projects, work, setWork }}>
      {props.children}
    </ProjectProvider.Provider>
  );
}

export default ProjectsContext;
