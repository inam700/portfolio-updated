import { Typewriter } from "react-simple-typewriter";
import React from "react";

const TypewriterTitle = () => (
  <p className="mt-5 font-semibold uppercase text-orange">
    <Typewriter
      words={["Web Design", "Web Development", "E-Commerce"]}
      loop
      cursor
      cursorStyle="_"
      typeSpeed={120}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </p>
);

export default TypewriterTitle;
