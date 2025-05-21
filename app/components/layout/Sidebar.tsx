import React from "react";
import ProfileImage from "./ProfileImage";
import TypewriterTitle from "./TypewriterTitle";
import SocialIcons from "./SocialIcons";
import DownloadCVButton from "./DownloadCVButton";

const Sidebar = () => {
  return (
    <aside className="h-full mt-10 lg:mt-0 bg-darkGray/80 px-10 flex flex-col items-center xl:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-[1.01]">
      <ProfileImage />
      <TypewriterTitle />
      <p className="text-4xl font-bold">Inam Ullah</p>
      <SocialIcons />
      <DownloadCVButton />
    </aside>
  );
};

export default Sidebar;
