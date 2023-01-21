import React, { createContext } from "react";

// IMAGES
import doodldeImg from "../assets/doodle.png";
import artImg from "../assets/nel-art.png";
export const EssentialsContext = createContext();
function Essentials(props) {
  return (
    <EssentialsContext.Provider
      value={{
        doodldeImg,
        artImg,
      }}>
      {props.children}
    </EssentialsContext.Provider>
  );
}

export default Essentials;
