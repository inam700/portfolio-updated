import React from "react";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

const CVPage = () => {
  return (
    <div className="mt-10">
      <div>
        <p className="text-3xl">Work Experience</p>
        <WorkExperience />
      </div>
      {/* <div className="relative w-full mt-5 pb-5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
      </div> */}
      <div className="my-10">
        <p className="text-3xl">Technical Skills</p>
        <Skills />
      </div>

      <div className="mb-20">
        <p className="text-3xl">Education</p>
        <div className="mt-5">
          <p className="text-orange text-sm">(2016 - 2020)</p>{" "}
          <p className="text-sm">Bachelor of Science in Computer Science </p>
          <p className="text-lg">
            University of Engineering & Technology, Lahore
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
