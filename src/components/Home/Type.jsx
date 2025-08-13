import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "< Full-Stack Developer />",
          "< Front-End Developer />",
          "< Back-End Developer />",
          "< NextJS Developer />",
          "< React JS Developer />",
          "< Effective Problem Solver/>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
