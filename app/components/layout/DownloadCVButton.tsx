import { FaDownload } from "react-icons/fa6";
import React from "react";

const DownloadCVButton = () => (
  <div className="relative w-full mt-16 mb-8 pt-5">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
    <div className="relative z-20 flex justify-center w-full">
      <div className="flex items-center justify-center gap-1 text-sm font-semibold py-2 min-w-36 bg-orange text-darkGray hover:bg-orangeHover transition-colors duration-300 cursor-pointer">
        <FaDownload /> Download CV
      </div>
    </div>
  </div>
);

export default DownloadCVButton;
